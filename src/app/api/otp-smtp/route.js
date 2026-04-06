import { NextResponse } from "next/server";
import otpGenerator from "otp-generator";
import { mailgunClient, MAILGUN_DOMAIN, MAILGUN_FROM } from "../../config/nodemailer";


export async function POST(req) {
  try {
    const { email, first_name } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 6-digit numeric OTP
    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      specialChars: false,
      digits: true,
      lowerCaseAlphabets: false,
    });

    const subject = "GMG Group - Email Verification OTP";

    const html = `
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>You’ve Registered for the GTC Demo Competition
</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">

          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0; border-radius:8px;padding:30px; padding-top: 30px">
           <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gmgmarkets.co.uk/wp-content/uploads/2024/07/gmg-logo-1.png" alt="GTC Logo" style="width: 160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:18px;font-weight:600;color:#2a2f83;padding-bottom:10px;">
             Spread Betting. Tax-Free. FCA-Regulated.





              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#4D4D70;padding-bottom:20px;">
                We’ve added all your credentials into this email so that you’re ready!
              </td>
            </tr>

            <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

          <!-- Greeting & OTP -->
<tr>
  <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
    Hi ${first_name},
  </td>
</tr>

<tr>
  <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
   Welcome to GMGMarkets. You are one step away from getting started.
  </td>
</tr>

<tr>
  <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
    Please use the verification code below to confirm your email address and activate your account:
  </td>
</tr>

<tr>
  <td style="padding:15px 0;">
    <div style="font-size:22px;font-weight:bold;letter-spacing:3px;color:#192055;text-align:center;">
      ${otp}
    </div>
  </td>
</tr>

<tr>
  <td style="font-size:13px;color:#6B7280;padding-bottom:15px;text-align:center;">
    This code is valid for ${"10 minutes"}.
  </td>
</tr>


        <!-- Account Info Box -->



          <tr>
              <td style="font-size:16px;color:#4D4D70;padding-bottom:10px; font-weight: 600">


Need Help?
              </td>
            </tr>
               <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:10px;">
           If you’ve got any questions or need further assistance, please don’t hesitate to contact us at <a href="mailto:info@gmgmarkets.co.uk">info@gmgmarkets.co.uk</a> . We are here to support you and ensure your experience with us is the best you’ve ever experienced.

              </td>
            </tr>

            <!-- Signoff -->
            <tr>
              <td style="font-size:16px;color:#4D4D70;padding-bottom:10px; font-weight: 600;">
                <br>
            Best regards,<br>
GMGMarkets Family

              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#4D4D70;padding-bottom:30px;">
                You’re the best, and soon, you’ll show the world you are!
              </td>
            </tr>

             <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

            <!-- Contact Info -->
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://gmgmarkets.co.uk/wp-content/uploads/2024/07/gmg-logo-1.png" alt="GTC Logo" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Phone: +44 (0) 203 8653306<br/>
                      ✉️ Email: <a href="mailto:info@gmgmarkets.co.uk" style="color: #192055; text-decoration: none;">info@gmgmarkets.co.uk</a>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>

            <!-- Legal Footer -->
<tr>
  <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
  <strong>Risk Warning:CFDs and Spread Bets are complex instruments and come with a high risk of losing money rapidly due to leverage. 56.0% of retail investor accounts lose money when trading CFDs and Spread Bets with this provider. You should consider whether you understand how CFDs and Spread Bets work and whether you can afford to take the high risk of losing your money. There is a possibility to lose all your initial capital.</strong><br/><br/>
    
    Global Markets Group Limited, a company registered in England & Wales under company number 09493910, is authorised and regulated by the Financial Conduct Authority with reference number 744501. Its registered address is Green Park House, 15 Stratton Street, London W1J 8LQ, United Kingdom You can contact us at info@gmgmarkets.co.uk or +44 203 865 3306.
    <br/><br/>
    <stong style="font-weight: 600p; color: #000;">HIGH RISK INVESTMENT WARNING:</stong> CFDs and Spreadbets are complex instruments and come with a high risk of losing money rapidly due to leverage. 56.0% of retail investor accounts lose money when trading in CFDs and Spreadbets with this provider. You should consider whether you understand how CFDs and Spreadbets work and whether you can afford to take the high risk of losing your money. CFDs and Spreadbets are provided by Global Markets Group Limited on an execution-only basis; we do not provide any advice and any written or verbal communication with us should not be considered as such.
    <br/><br/>
    All news, research, analysis, or other information is provided as general market commentary and not as investment advice and all potential results discussed are not guaranteed to be achieved. The information is derived from publicly available sources, research or surveys. Past performance is not indicative of future performance.
    <br/><br/>
 The information on this website is not directed at residents of the United States, Japan, Canada, Belgium or any other jurisdiction, where such distribution or use may be contrary to local laws or regulation. You must be of minimum legal age as determined by your country of origin to use services on this website.
    <br/><br/>
   © 2026 Global Markets Group Limited | All rights reserved.
  </td>
</tr>


          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
    `;

    const res = await mailgunClient.messages.create(MAILGUN_DOMAIN, {
      from: MAILGUN_FROM,
      to: email,
      subject,
      text: `Your OTP is ${otp}`,
      html,
    });

    // Return OTP (adjust to your security model; often you don't return the OTP)
    return NextResponse.json({ id: res.id, message: otp }, { status: 200 });
  } catch (error) {
    console.error("Mailgun error:", error?.message || error);
    return NextResponse.json({ message: "Error Sending OTP" }, { status: 500 });
  }
}
