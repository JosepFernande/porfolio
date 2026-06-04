import Head from "next/head";
import * as React from "react";

interface ContactEmailProps {
  readonly name?: string;
  readonly email: string;
  readonly message: string;
  readonly correlationId: string;
  readonly receivedAt: string;
}

/**
 * Plain-HTML email template for contact form notifications.
 * Kept dependency-free (no @react-email) to avoid adding heavy dev deps.
 * Rendered via ReactDOMServer.renderToStaticMarkup on the server.
 */
export function ContactEmail({
  name,
  email,
  message,
  correlationId,
  receivedAt,
}: ContactEmailProps) {
  const displayName = name?.trim() || "Not provided";
  // Escape user content to prevent HTML injection in the email body
  const safeMessage = message
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\n", "<br />");
  const safeName = displayName
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
  const safeEmail = email
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>New Contact Form Submission</title>
      </Head>
      <body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f4f4f5",
          margin: 0,
          padding: "24px",
        }}
      >
        <table
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  padding: "32px",
                  border: "1px solid #e4e4e7",
                }}
              >
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#09090b",
                    marginTop: 0,
                    marginBottom: "24px",
                  }}
                >
                  📬 New Contact Form Submission
                </h1>

                <table width="100%" cellPadding={0} cellSpacing={0}>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          paddingBottom: "16px",
                          borderBottom: "1px solid #f4f4f5",
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "#71717a",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          From
                        </p>
                        <p
                          style={{
                            margin: "4px 0 0",
                            fontSize: "16px",
                            color: "#09090b",
                          }}
                          dangerouslySetInnerHTML={{
                            __html: `${safeName} &lt;<a href="mailto:${safeEmail}" style="color:#10b981">${safeEmail}</a>&gt;`,
                          }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ paddingTop: "16px", paddingBottom: "16px" }}>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "12px",
                            fontWeight: "bold",
                            color: "#71717a",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          Message
                        </p>
                        <p
                          style={{
                            margin: "8px 0 0",
                            fontSize: "15px",
                            color: "#18181b",
                            lineHeight: "1.6",
                            whiteSpace: "pre-wrap",
                          }}
                          dangerouslySetInnerHTML={{ __html: safeMessage }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>

                <hr style={{ borderColor: "#f4f4f5", margin: "24px 0 16px" }} />

                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    color: "#a1a1aa",
                  }}
                >
                  Received: {receivedAt} · ID: {correlationId}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </html>
  );
}
