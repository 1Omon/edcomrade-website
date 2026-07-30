import * as React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Section,
  Heading,
  Hr,
  Link,
  Preview,
} from "@react-email/components";

interface NotificationEmailProps {
  type: "submission" | "contact";
  data: any;
}

export const NotificationEmail = ({ type, data }: NotificationEmailProps) => {
  const isSubmission = type === "submission";

  return (
    <Html>
      <Preview>New {isSubmission ? "School Application" : "Contact Message"} on Edcomrade</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New {isSubmission ? "Application" : "Message"}</Heading>
          <Text style={text}>
            You have received a new {isSubmission ? "school application" : "contact message"} through the Edcomrade website.
          </Text>

          <Section style={section}>
            <Heading as="h2" style={h2}>Details:</Heading>
            {isSubmission ? (
              <>
                <Text style={label}>School Name:</Text>
                <Text style={value}>{data.schoolName}</Text>

                <Text style={label}>Contact Person:</Text>
                <Text style={value}>{data.contactName}</Text>

                <Text style={label}>Email:</Text>
                <Text style={value}>{data.email}</Text>

                {data.phone && (
                  <>
                    <Text style={label}>Phone:</Text>
                    <Text style={value}>{data.phone}</Text>
                  </>
                )}
              </>
            ) : (
              <>
                <Text style={label}>From:</Text>
                <Text style={value}>{data.name}</Text>

                <Text style={label}>Role:</Text>
                <Text style={value}>{data.role}</Text>

                <Text style={label}>Email:</Text>
                <Text style={value}>{data.email}</Text>

                {data.phone && (
                  <>
                    <Text style={label}>Phone:</Text>
                    <Text style={value}>{data.phone}</Text>
                  </>
                )}

                {data.schoolName && (
                  <>
                    <Text style={label}>School Name:</Text>
                    <Text style={value}>{data.schoolName}</Text>
                  </>
                )}

                {data.subject && (
                  <>
                    <Text style={label}>Subject:</Text>
                    <Text style={value}>{data.subject}</Text>
                  </>
                )}
              </>
            )}
          </Section>

          {data.message || data.description ? (
            <Section style={section}>
              <Heading as="h3" style={h3}>{isSubmission ? "Description:" : "Message:"}</Heading>
              <Text style={box}>
                {data.message || data.description}
              </Text>
            </Section>
          ) : null}

          <Hr style={hr} />

          <Section style={{ textAlign: "center" as const, marginTop: "32px" }}>
            <Link
              href={`https://edcomrade.com/admin/${isSubmission ? "submissions" : "contacts"}`}
              style={button}
            >
              View in Admin Portal
            </Link>
          </Section>

          <Text style={footer}>
            Edcomrade Platform Notifications
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "580px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
};

const h1 = {
  color: "#1A3C5E",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0",
};

const h2 = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#333",
  margin: "0 0 10px 0",
};

const h3 = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#333",
  margin: "0 0 10px 0",
};

const text = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "center" as const,
};

const section = {
  padding: "24px",
  backgroundColor: "#f9fafb",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
  marginBottom: "24px",
};

const label = {
  fontSize: "12px",
  fontWeight: "bold",
  color: "#8898aa",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  marginBottom: "4px",
  marginTop: "12px",
};

const value = {
  fontSize: "16px",
  color: "#333",
  margin: "0",
  fontWeight: "500",
};

const box = {
  fontSize: "15px",
  color: "#444",
  lineHeight: "1.6",
  fontStyle: "italic",
};

const button = {
  backgroundColor: "#1A3C5E",
  borderRadius: "8px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "32px",
};
