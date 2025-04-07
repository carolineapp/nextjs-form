import RootLayout from "@/app/layout";
import Button from "../../components/Button";
import submitResponses from "@/utils/submitResponses";

import { Formik, Field, Form } from "formik";
import { useState } from "react";

const questions = {
  "Do you have a name?": "No",
  "Do you have a pet?": "No",
  "Do you have any medical conditions?": "No",
  "Are you on any medication?": "No",
  "Is this is a series of questions?": "No",
};

const Consultation = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [complete, setComplete] = useState(false);

  const handleSubmit = (values: object) => {
    setComplete(true);
    submitResponses(values);
  };

  return (
    <RootLayout>
      <h1>Consultation</h1>
      {!complete && (
        <Formik
          initialValues={questions}
          onSubmit={(values) => handleSubmit(values)}
        >
          {() => (
            <Form>
              {Object.keys(questions).map((question, index) => (
                <div
                  className={`${
                    activeQuestion !== index && "hidden"
                  } columns-sm`}
                  key={question}
                >
                  <label>
                    <span>{question}</span>{" "}
                  </label>
                  <Field component="select" id={index} name={question}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Field>
                  <Button
                    handleOnClick={() => setActiveQuestion(index + 1)}
                    text="Next"
                  />
                </div>
              ))}
              {activeQuestion === Object.keys(questions).length &&
                !complete && (
                  <>
                    <h3>You are all done! Please click submit</h3>
                    <Button type="submit" text="Submit" />
                  </>
                )}
            </Form>
          )}
        </Formik>
      )}
      {complete && <span>Thank you for submitting your responses</span>}
    </RootLayout>
  );
};

export default Consultation;
