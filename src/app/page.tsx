import Image from "next/image";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <Image
        src="https://www.dermatica.co.uk/_next/static/media/dermatica-logo.cd9241ff.svg"
        alt="Dermatica logo"
        width={180}
        height={38}
        priority
      />
      <div>
        <h1>Health Questionnaire</h1>
        <h3>
          Please answer a few questions on your health so that we can meet your
          needs
        </h3>
      </div>
      <Button href="consultation" text="Start Consultation" />
    </>
  );
}
