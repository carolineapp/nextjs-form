import RootLayout from "@/app/layout";

import { Formik, Field, Form } from "formik";
import { useState } from "react";

const questions = {
  "Do you have a name?": "No",
  "Do you have a pet?": "o0",
  "Do you have any medical conditions?": "No",
  "Are you on any medication?": "No",
  "Is this is a series of questions?": "No",
};

const Consultation = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [complete, setComplete] = useState(false);

  const handleSubmit = (values: object) => {
    setComplete(true);
    console.log(values);
  };

  return (
    <RootLayout>
      <h1>Questions</h1>
      <Formik
        initialValues={questions}
        onSubmit={(values) => handleSubmit(values)}
      >
        {() => (
          <Form>
            {Object.keys(questions).map((q, i) => (
              <div className={`${activeQuestion !== i && "hidden"}`} key={q}>
                <label>
                  <span>{q}</span>{" "}
                </label>
                <Field component="select" id={i} name={q}>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Field>
                <div>
                  {" "}
                  <button
                    type="button"
                    className="px-3 py-1 bg-teal-300"
                    onClick={() => setActiveQuestion(i++)}
                  >
                    Next
                  </button>
                </div>
              </div>
            ))}
            {activeQuestion === Object.keys(questions).length && !complete && (
              <button type="submit" className="px-3 py-1 bg-teal-300">
                Submit
              </button>
            )}
          </Form>
        )}
      </Formik>
      {complete && <h3>Thank you for submitting your responses</h3>}
    </RootLayout>
  );
};

export default Consultation;
