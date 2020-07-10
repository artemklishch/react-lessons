import React, { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "Artem",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const savedValues = {
  name: "Artem",
  email: "@example.com",
  channel: "codevolution",
  comments: "Welcome to formik",
  address: "NewYork",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values, onSubmitProps) => {
  console.log("Form values", values);
  console.log("submit props", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validateSchema = Yup.object({
  name: Yup.string().required("Req"),
  email: Yup.string().email("Invalid format").required("Req"),
  channel: Yup.string().required("Req"),
  address: Yup.string().required("Req"),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

// function YouTubeForm() {
//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validateSchema}
//       onSubmit={onSubmit}
//       validateOnChange={false}
//       validateOnBlur={false}
//     >
//       <Form>
//         <div className="form-control">
//           <label htmlFor="name">Name</label>
//           <Field type="text" id="name" name="name" />
//           <ErrorMessage name="name" component={TextError} />
//         </div>

//         <div className="form-control">
//           <label htmlFor="email">E-mail</label>
//           <Field type="text" id="email" name="email" />
//           <ErrorMessage name="email">
//             {(errorMsg) => <div className="error">{errorMsg}</div>}
//           </ErrorMessage>
//         </div>

//         <div className="form-control">
//           <label htmlFor="channel">Channel</label>
//           <Field
//             type="text"
//             id="channel"
//             name="channel"
//             placeholder="YouTube channel name"
//           />
//           <ErrorMessage name="channel" />
//         </div>

//         <div className="form-control">
//           <label htmlFor="comments">Comments</label>
//           <Field
//             // component="textarea"
//             as="textarea"
//             id="comments"
//             name="comments"
//             validate={validateComments}
//           />
//           <ErrorMessage name="comments" component={TextError} />
//         </div>

//         <div className="form-control">
//           <label htmlFor="address">Address</label>
//           {/* <Field name="address">
//             {(props) => {
//               // const { field, form, meta } = props;
//               const { field, meta } = props;
//               // console.log("Render props", props);
//               console.log("Field render");
//               return (
//                 <div>
//                   <input id="address" type="text" {...field} />
//                   {meta.touched && meta.error ? <div>{meta.error}</div> : null}
//                 </div>
//               );
//             }}
//           </Field> */}
//           <FastField name="address">
//             {(props) => {
//               // const { field, form, meta } = props;
//               const { field, meta } = props;
//               // console.log("Render props", props);
//               // console.log("Field render");
//               return (
//                 <div>
//                   <input id="address" type="text" {...field} />
//                   {meta.touched && meta.error ? <div>{meta.error}</div> : null}
//                 </div>
//               );
//             }}
//           </FastField>
//         </div>

//         <div className="form-control">
//           <label htmlFor="facebool">Facebook profile</label>
//           <Field type="text" id="facebook" name="social.facebook" />
//         </div>
//         <div className="form-control">
//           <label htmlFor="twitter">Twitter profile</label>
//           <Field type="text" id="twitter" name="social.twitter" />
//         </div>

//         <div className="form-control">
//           <label htmlFor="primaryPh">Primary phone number</label>
//           <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
//         </div>

//         <div className="form-control">
//           <label htmlFor="secondaryPh">Secondary phone number</label>
//           <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
//         </div>

//         <div className="form-control">
//           <label htmlFor="">List of phone numbers</label>
//           <FieldArray name="phNumbers">
//             {(fieldArrayProps) => {
//               console.log("fieldArrayProps", fieldArrayProps);
//               const { push, remove, form } = fieldArrayProps;
//               const { values } = form;
//               const { phNumbers } = values;
//               // console.log("Form errors", form.errors);
//               return (
//                 <div>
//                   {phNumbers.map((phNumber, index) => (
//                     <div key={index}>
//                       <Field name={`phNumbers[${index}]`} />
//                       {index > 0 && (
//                         <button type="button" onClick={() => remove(index)}>
//                           {" "}
//                           -{" "}
//                         </button>
//                       )}
//                       <button type="button" onClick={() => push("")}>
//                         {" "}
//                         +{" "}
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               );
//             }}
//           </FieldArray>
//         </div>

//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// }

function YouTubeForm() {
  const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validateSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnMount
    >
      {(formik) => {
        // console.log("Formik props", formik);
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email">
                {(error) => <div className="error">{error}</div>}
              </ErrorMessage>
            </div>

            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                id="channel"
                name="channel"
                placeholder="YouTube channel name"
              />
              <ErrorMessage name="channel" />
            </div>

            <div className="form-control">
              <label htmlFor="comments">Comments</label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="address">Address</label>
              <FastField name="address">
                {({ field, form, meta }) => {
                  // console.log('Field render')
                  return (
                    <div>
                      <input type="text" {...field} />
                      {meta.touched && meta.error ? (
                        <div>{meta.error}</div>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>
            </div>

            <div className="form-control">
              <label htmlFor="facebook">Facebook profile</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>

            <div className="form-control">
              <label htmlFor="twitter">Twitter profile</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>

            <div className="form-control">
              <label htmlFor="primaryPh">Primary phone number</label>
              <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
            </div>

            <div className="form-control">
              <label htmlFor="secondaryPh">Secondary phone number</label>
              <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
            </div>

            <div className="form-control">
              <label>List of phone numbers</label>
              <FieldArray name="phNumbers">
                {(fieldArrayProps) => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  // console.log('fieldArrayProps', fieldArrayProps)
                  // console.log('Form errors', form.errors)
                  return (
                    <div>
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                        </div>
                      ))}
                      <button type="button" onClick={() => push("")}>
                        +
                      </button>
                    </div>
                  );
                }}
              </FieldArray>
            </div>
            {/* <button
              type="button"
              onClick={() => formik.validateField("comments")}
            >
              Validate comments
            </button>
            <button
              type="button"
              onClick={() => formik.setFieldTouched("comments")}
            >
              Visit comments
            </button>
            <button type="button" onClick={() => formik.validateForm()}>
              Validate all
            </button>
            <button
              type="button"
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true,
                })
              }
            >
              Visit all
            </button> */}
            <button type="button" onClick={() => setFormValues(savedValues)}>
              Load saved data
            </button>
            <button type="reset">Reset</button>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
              // disabled={!(formik.isValid || formik.dirty)}
              // disabled={!formik.isValid}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YouTubeForm;
