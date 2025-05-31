import { Resend } from "resend";
import { ReactElement } from "react";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailOptions {
  to: string;
  subject: string;
  react?: ReactElement;
  html?: string;
}

export async function sendEmail({
  to,
  subject,
  react,
  html,
}: SendEmailOptions) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY environment variable");
  }

  if (!react && !html) {
    throw new Error("Either react or html must be provided");
  }

  try {
    const renderedHtml = react ? await render(react) : html;

    const data = await resend.emails.send({
      from: "TBSA <no-reply@tbsa.ro>",
      to,
      subject,
      html: renderedHtml,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}
