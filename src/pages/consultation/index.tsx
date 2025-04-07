import RootLayout from "@/app/layout";
import Button from "../../components/Button";
import submitResponses from "@/utils/submitResponses";

import { Formik, Field, Form } from "formik";
import { useState } from "react";

const initialValues = {
  "Do you have a name?": "No",
  "Do you have a pet?": "No",
  "Do you have any medical conditions?": "No",
  "Are you on any medication?": "No",
  "Is this is a series of questions?": "No",
};

const questions = Object.keys(initialValues);

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
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
        >
          {() => (
            <Form>
              {questions.map((question, index) => (
                <div
                  className={`${
                    activeQuestion !== index && "hidden"
                  } columns-sm`}
                  key={question}
                >
                  <label className="mr-2">{question}</label>
                  <Field
                    component="select"
                    id={index}
                    name={question}
                    className="border border-gray-300 rounded-lg"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Field>
                  <Button
                    handleOnClick={() => setActiveQuestion(index + 1)}
                    text="Next"
                  />
                </div>
              ))}
              {activeQuestion === questions.length && !complete && (
                <>
                  <h3>You are all done! Please click submit</h3>
                  <Button type="submit" text="Submit" />
                </>
              )}
            </Form>
          )}
        </Formik>
      )}
      {complete && <p>Thank you for submitting your responses</p>}
    </RootLayout>
  );
};

export default Consultation;
