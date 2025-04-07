import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <div>
        <h1>Health Consultation</h1>
        <h3>
          Please answer a few questions on your health so that we can meet your
          needs
        </h3>
      </div>
      <Button href="consultation" text="Start Consultation" />
    </>
  );
}
