import { NextResponse } from "next/server";
import { mailgunClient, MAILGUN_DOMAIN, MAILGUN_FROM } from "../../config/nodemailer";
import { generateEnglis } from "./template";

const generateEmailContent = (data) => {
  return {
    html: generateEnglis(data),
  };
};

export async function POST(req) {
  const reqBody = await req.json();
  try {
    const res = await mailgunClient.messages.create(MAILGUN_DOMAIN, {
      from: MAILGUN_FROM,
      to: "info@gmgmarkets.co.uk",
      bcc:"zeeshan@gtcfx.com",
      subject: `GMGmarkets -Spread Betting. Tax-Free. FCA-Regulated`,
      ...generateEmailContent(reqBody),
    });

    return NextResponse.json(
      { message: "Success", email: reqBody?.email },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
