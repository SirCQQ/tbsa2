import { Section, Text, Button } from "@react-email/components";
import BaseEmail from "./base-email";

interface RegisterEmailProps {
  name: string;
  verificationUrl: string;
}

export default function RegisterEmail({
  name,
  verificationUrl,
}: RegisterEmailProps) {
  return (
    <BaseEmail previewText="Confirmă-ți adresa de email pentru TBSA">
      <Section style={content}>
        <Text style={title}>Confirmă-ți adresa de email</Text>
        <Text style={paragraph}>Salut {name},</Text>
        <Text style={paragraph}>
          Îți mulțumim pentru înregistrarea în aplicația TBSA. Pentru a-ți
          activa contul și a începe să folosești aplicația, te rugăm să confirmi
          adresa de email folosind butonul de mai jos:
        </Text>
        <Button href={verificationUrl} style={button}>
          Confirmă Adresa de Email
        </Button>
        <Text style={paragraph}>
          Dacă nu te-ai înregistrat tu în aplicația TBSA, te rugăm să ignori
          acest email.
        </Text>
        <Text style={paragraph}>
          Link-ul de confirmare este valabil 24 de ore. Dacă a expirat, te rugăm
          să te înregistrezi din nou.
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
