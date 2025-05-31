import { Section, Text, Button } from "@react-email/components";
import BaseEmail from "./base-email";

interface WelcomeEmailProps {
  name: string;
  loginUrl: string;
}

export default function WelcomeEmail({ name, loginUrl }: WelcomeEmailProps) {
  return (
    <BaseEmail previewText="Bine ai venit în aplicația TBSA!">
      <Section style={content}>
        <Text style={title}>Bine ai venit, {name}!</Text>
        <Text style={paragraph}>
          Îți mulțumim că te-ai alăturat aplicației TBSA. Suntem încântați să te
          avem alături de noi și să te ajutăm să-ți gestionezi mai ușor
          asociația de proprietari.
        </Text>
        <Text style={paragraph}>
          Pentru a începe, te rugăm să accesezi contul tău folosind butonul de
          mai jos:
        </Text>
        <Button href={loginUrl} style={button}>
          Accesează Contul
        </Button>
        <Text style={paragraph}>
          Dacă ai întrebări sau nelămuriri, nu ezita să ne contactezi. Suntem
          aici să te ajutăm!
        </Text>
        <Text style={paragraph}>
          Cu stimă,
          <br />
          Echipa TBSA
        </Text>
      </Section>
    </BaseEmail>
  );
}

const content = {
  padding: "20px",
};

const title = {
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "0 0 20px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
  margin: "0 0 20px",
};

const button = {
  backgroundColor: "#556cd6",
  borderRadius: "4px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "12px",
  margin: "20px 0",
};
