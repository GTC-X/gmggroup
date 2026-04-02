import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { RiUserLocationLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { GiWorld } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import OtpInput from "react-otp-input";
import { countryList } from "../../context/useCountriesDetails";
import { useLocationDetail } from "../../context/useLocationDetail";
import { toast } from "react-toastify";

const NewEvent = ({ zapierUrl }) => {
    const locale = useLocale();
    const { countryCode } = useLocationDetail();
    const [loading, setLoading] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [sendEmailOtpLoading, setSendEmailOtpLoading] = useState(false);
    const [disableSendOtpBtn, setDisableSendOtpBtn] = useState(false);
    const [showEmailOtpVerify, setShowEmailOtpVerify] = useState(false);
    const [storedEmailOtp, setStoredEmailOtp] = useState("");

    const generatePassword = (length = 12) => {
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const number = "0123456789";
        const special = "!@#$%^&*";

        const all = lower + upper + number + special;

        // Ensure at least one of each type
        const password = [
            lower[Math.floor(Math.random() * lower.length)],
            upper[Math.floor(Math.random() * upper.length)],
            number[Math.floor(Math.random() * number.length)],
            special[Math.floor(Math.random() * special.length)],
        ];

        // Fill the rest with random chars
        for (let i = password.length; i < length; i++) {
            password.push(all[Math.floor(Math.random() * all.length)]);
        }

        // Shuffle to avoid predictable positions
        return password.sort(() => Math.random() - 0.5).join("");
    };

    const formik = useFormik({
        initialValues: {
            nickname: "",
            email: "",
            phone: "",
            password: generatePassword(),
            invest_password: generatePassword(),
            confirm_password: "",
            country: "",
            /* platform: "", */
            otp: "",
            terms: false,
        },
        validationSchema: Yup.object({
            nickname: Yup.string().required("First name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            phone: Yup.string().required("Phone is required"),
            country: Yup.string().required("Country is required"),
            otp: Yup.string()
                .length(6, "OTP must be 6 digits")
                .required("OTP is required"),
            terms: Yup.bool().oneOf([true], "You must accept the terms of service"),
        }),
        onSubmit: async (values) => {
            // Check if OTP is verified before submitting
            if (!isOtpVerified) {
                toast.error(
                    "Please verify your phone number with OTP before submitting."
                );
                setLoading(false);
                return;
            }

            setLoading(true);
            try {
                // Analytics (non-blocking)

                const validationResponse = await axios.post(`/api/validate-email`, {
                    email: formik.values.email,
                });

                if (!validationResponse.data.valid) {
                    toast.error(
                        "Invalid email address. Please use a valid email."
                    );
                    return;
                }
                try {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({ event: "formSubmission", formName: "Form" });
                } catch { }

                // Optional UI resets
                formik.resetForm();
                setShowEmailOtpVerify?.(false);

                // 2) Fire Zapier + Email AFTER MT5 success (run in parallel; don’t block redirect)
                const zapierWebhookUrl = zapierUrl ||
                    "https://hooks.zapier.com/hooks/catch/16420445/ueb5fg4/"; // <- adjust if you use a direct Zapier hook
  
                const partnerPayload = {
                    email: formik?.values?.email,
                    name: formik?.values?.nickname,
                    phone: formik?.values?.phone,
                    country: formik?.values?.country,
                };

                // 2) Then Marketing Cloud + Zapier in parallel
                const [mcResult, zapierResult] = await Promise.allSettled([
                    axios.post("/api/email", partnerPayload),
                    axios.post(zapierWebhookUrl, JSON.stringify(values)),
                ]);

                const mcSuccess = mcResult.status === "fulfilled" && mcResult.value?.data?.success;
                const zapierSuccess = zapierResult.status === "fulfilled";

                if (mcSuccess) {
                    toast.success(
                        mcResult.value?.data?.message || "Registered successfully."
                    );
                    formik.resetForm();
                } else if (mcResult.status === "rejected") {
                    toast.error(
                        mcResult.reason?.response?.data?.error ||
                        mcResult.reason?.response?.data?.details ||
                        "Registration failed. Please try again."
                    );
                } else if (zapierSuccess) {
                    const ok = zapierResult.value?.data?.success ?? true;
                    if (ok) {
                        toast.success(
                            zapierResult.value?.data?.message || "✅ Your form has been submitted successfully."
                        );
                    }
                    formik.resetForm();
                }
            } catch (err) {
                // Top-level failure (network/unexpected)
                const apiMsg =
                    err?.response?.data?.message ||
                    err?.message ||
                    "Something went wrong. Please try again.";
                toast.error(apiMsg);
            } finally {
                setLoading(false);
            }
        },
    });

    useEffect(() => {
        if (countryCode && countryList?.length) {
            const code = countryCode.toUpperCase?.() || countryCode;
            const filterData = countryList.find(
                (item) => (item?.alpha_2_code || "").toUpperCase() === code
            );
            formik.setFieldValue(
                "country",
                filterData ? filterData.en_short_name : ""
            );
        }
    }, [countryCode, countryList]);


    const sendEmailOtp = async () => {
        // First validate email
        if (!formik.values.email) {
            toast.error("Email is required");
            return;
        }
      
        setSendEmailOtpLoading(true);
        setDisableSendOtpBtn(true);
        
        try {
          // Validate email first
          const validationResponse = await axios.post(`/api/validate-email`, {
            email: formik.values.email,
          });
      
          if (!validationResponse.data.valid) {
            toast.error("Invalid email address. Please use a valid email.");
            setSendEmailOtpLoading(false);
            setDisableSendOtpBtn(false);
            return;
          }
      
          // If email is valid, send OTP
          const response = await axios.post(
            `/api/otp-smtp`,
            JSON.stringify({
              email: formik.values.email,
              first_name: formik.values.nickname,
            })
          );
      
          if (response.status === 200) {
            setSendEmailOtpLoading(false);
            setStoredEmailOtp(response.data.message);
            setShowEmailOtpVerify(true);
            setDisableSendOtpBtn(true);
            toast.success(`OTP sent to ${formik.values.email}`);
          } else {
            toast.error("Failed to send OTP. Please try again.");
            setDisableSendOtpBtn(false);
          }
        } catch (err) {
          setSendEmailOtpLoading(false);
          if (err.response?.data?.reason) {
            toast.error("Invalid email address");
          } else {
            toast.error("Failed to send OTP. Please try again.");
          }
          setDisableSendOtpBtn(false);
        }
      };

    const verifyEmailOtpCode = (otp) => {
        if (!otp || otp.length !== 6) return;

        const expected = String(storedEmailOtp || "").trim();
        const received = String(otp || "").trim();

        if (!expected) {
            toast.error("Please request an OTP first.");
            setIsOtpVerified(false);
            return;
        }

        if (received === expected) {
            toast.success("OTP verified successfully");
            setShowEmailOtpVerify(false);
            setIsOtpVerified(true);
        } else {
            toast.error("Invalid OTP");
            setIsOtpVerified(false);
        }
    };




    // When user changes email after verifying, require OTP again
    useEffect(() => {
        if (isOtpVerified) {
            setIsOtpVerified(false);
            formik.setFieldValue("otp", "");
            setShowEmailOtpVerify(false);
            setStoredEmailOtp("");
            setDisableSendOtpBtn(false);
        }
    }, [formik.values.email]);

    const boxStyle = {
        background:
            "linear-gradient(to bottom, rgba(182,135,86,.65) 40%, rgba(5,3,49,1) 60%)",
        borderRadius: "8px",
    };

    return (
        <section className="demo-account">
            <div className="demo">
                <div className="relative py-[1px] px-[1px]" style={boxStyle}>
                    <h2 className="text-center py-4 bg-gradient-to-b from-primary via-[#050331] to-primary rounded-t-xl text-lg  text-white">
                        Register Now
                    </h2>
                </div>

                <div className="relative">
                    <form
                        onSubmit={formik.handleSubmit}
                        className="bg-white relative text-gray-700 rounded-b-xl  p-4 mx-auto"
                    >
                        {/* Full Name & Email */}
                        <div className="grid grid-cols-1 gap-4 mb-3">
                            <div className="relative">
                                <RiUserLocationLine className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                                <input
                                    type="text"
                                    className={`w-full px-4 bg-white py-3 pl-9 border ${formik.touched.nickname && formik.errors.nickname ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                                    placeholder="Full Name"
                                    {...formik.getFieldProps("nickname")}
                                />
                                {formik.touched.nickname && formik.errors.nickname && (
                                    <p className="text-red-500 text-sm">
                                        {formik.errors.nickname}
                                    </p>
                                )}
                            </div>
                            <div className="relative">
                                <CiMail className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                                <input
                                    type="email"
                                    className={`w-full bg-white px-4 py-3 pl-9 border ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                                    placeholder="Email"
                                    {...formik.getFieldProps("email")}
                                />
                                <button
                                    type="button"
                                    onClick={sendEmailOtp}
                                    disabled={disableSendOtpBtn || sendEmailOtpLoading || !formik.values.email}
                                    className="absolute top-2.5 bg-primary right-3 rounded-md cursor-pointer text-white py-1.5 px-2 text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {sendEmailOtpLoading ? "Sending..." : "Get Code"}
                                </button>
                                {formik.touched.email && formik.errors.email && (
                                    <p className="text-red-500 text-sm">{formik.errors.email}</p>
                                )}
                            </div>
                        </div>

                        {showEmailOtpVerify && (
                            <div className="grid grid-cols-1 gap-2 mb-4">
                                <p className="text-xs md:text-sm mb-1 text-gray-700">
                                    A verification code has been sent to your email
                                </p>
                                <OtpInput
                                    value={formik.values.otp}
                                    onChange={(otp) => {
                                        formik.setFieldValue("otp", otp);
                                        if (otp?.length === 6) {
                                            verifyEmailOtpCode(otp);
                                        }
                                    }}
                                    numInputs={6}
                                    containerStyle={{
                                        justifyContent: "space-around",
                                        alignItems: "center",
                                        gap: "5px",
                                    }}
                                    renderInput={(props) => (
                                        <input
                                            {...props}
                                            type="tel"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                        />
                                    )}
                                    isInputNum
                                    inputStyle={{
                                        fontSize: "16px",
                                        borderRadius: "5px",
                                        paddingBottom: "8px",
                                        paddingTop: "8px",
                                        width: "20%",
                                        backgroundColor: "#f3f4f6",
                                        color: "#000",
                                        fontWeight: "700",
                                        outlineColor: "#f9c617",
                                        border:
                                            formik.touched.otp && formik.errors.otp
                                                ? "1px solid red"
                                                : "1px solid gray",
                                    }}
                                />
                                {formik.touched.otp && formik.errors.otp && (
                                    <p className="text-red-500 text-sm mt-2">
                                        {formik.errors.otp}
                                    </p>
                                )}
                            </div>
                        )}

                        <div className="grid grid-cols-1 mb-4">
                            <p className="text-xs md:text-sm">Phone number</p>
                            <div className="relative mb-2">

                                <PhoneInput
                                    key={`phone-${countryCode || "AE"}`}
                                    international
                                    countryCallingCodeEditable={false}
                                    defaultCountry={countryCode || "AE"}
                                    value={formik.values.phone}
                                    onChange={(phone) => formik.setFieldValue("phone", phone)}
                                    className={`w-full px-4 py-3 border ${formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                                )}
                            </div>
                        </div>

                        {/* Password & Confirm Password */}
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <RiLockPasswordLine className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  className={`w-full px-4 bg-white py-3 pl-9 border ${formik.touched.password && formik.errors.password ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm">{formik.errors.password}</p>
                )}
              </div>
              <div className="relative">
                <RiLockPasswordLine className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                <input
                  type="password"
                  className={`w-full bg-white px-4 py-3 pl-9 border ${formik.touched.confirm_password && formik.errors.confirm_password ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none`}
                  placeholder="Confirm Password"
                  {...formik.getFieldProps("confirm_password")}
                />
                {formik.touched.confirm_password && formik.errors.confirm_password && (
                  <p className="text-red-500 text-sm">{formik.errors.confirm_password}</p>
                )}
              </div>
            </div> */}

                        <div className="relative mb-4">
                            <GiWorld className="absolute top-4 left-3 text-gray-400 h-5 w-5" />
                            <select
                                className={`w-full text-primary bg-white px-4 py-3 pl-9 border ${formik.touched.country && formik.errors.country ? "border-red-500" : "border-gray-300"} rounded-lg text-gray-700`}
                                {...formik.getFieldProps("country")}
                            >
                                <option value="">Select Country</option>
                                {countryList.map((item) => (
                                    <option key={item?.alpha_2_code} value={item?.en_short_name}>
                                        {item?.en_short_name}
                                    </option>
                                ))}
                            </select>
                            {formik.touched.country && formik.errors.country && (
                                <p className="text-red-500 text-sm">{formik.errors.country}</p>
                            )}
                        </div>
                        <div>
                            <label
                                className={`block text-sm pb-2 ${formik.touched.terms && formik.errors.terms
                                    ? "text-red-500"
                                    : ""
                                    }`}
                                htmlFor="terms"
                            >
                                {formik.touched.terms && formik.errors.terms
                                    ? formik.errors.terms
                                    : ""}
                            </label>
                            <div className="flex items-center gap-1">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    id="terms"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.terms}
                                    value="checked"
                                    className="h-5 w-5"
                                />
                                <p className="inline px-3 text-[10px] text-primary">
                                   




By submitting your details you are agreeing to be contacted according to our  <a
                                        className="text-secondary underline"
                                        href="https://gmgmarkets.co.uk/wp-content/uploads/2024/07/GLOBAL-MARKETS-GROUP-LIMITED_PRIVACY-POLICY.pdf"
                                    >Privacy Policy</a>, so that we can respond to your inquiries.
                                </p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center mt-3">
                            <button
                                disabled={!isOtpVerified}
                                type="submit"
                                className="bg-primary text-white font-semibold py-1 px-8 rounded-full text-lg"
                            >
                                {loading ? "Sending..." : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};


export default NewEvent