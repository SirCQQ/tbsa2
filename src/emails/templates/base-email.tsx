import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";
import { ReactNode } from "react";

interface BaseEmailProps {
  previewText: string;
  children: ReactNode;
}

export default function BaseEmail({ previewText, children }: BaseEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Text style={logoText}>TBSA</Text>
          </Section>
          {children}
          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} TBSA. Toate drepturile rezervate.
            </Text>
            <Text style={footerLinks}>
              <Link href="#" style={link}>
                Dezabonare
              </Link>
              {" • "}
              <Link href="#" style={link}>
                Preferințe
              </Link>
              {" • "}
              <Link href="#" style={link}>
                Ajutor
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const logo = {
  padding: "32px 20px",
  borderBottom: "1px solid #e6ebf1",
};

const logoText = {
  fontSize: "32px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "0",
};

const footer = {
  padding: "0 20px",
};

const footerText = {
  fontSize: "12px",
  color: "#8898aa",
  textAlign: "center" as const,
  marginBottom: "10px",
};

const footerLinks = {
  fontSize: "12px",
  color: "#8898aa",
  textAlign: "center" as const,
};

const link = {
  color: "#556cd6",
  textDecoration: "underline",
};
