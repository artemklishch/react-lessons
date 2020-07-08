import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "Artem",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("Form values", values);
};

const validate = (values) => {
  //values.name, values.email, values.channel
  //errors.name, errors.email, errors.channel
  //errors.name = 'This field is reqired'
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};

const validateSchema = Yup.object({
  name: Yup.string().required("Req"),
  email: Yup.string().email("Invalid format").required("Req"),
  channel: Yup.string().required("Req"),
});

const resOnChange = () => {
  console.log("It has changed");
};

function OldYouTubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    // onChange: resOnChange, // this is doesn`t work!!!!!!!!!!
    validationSchema: validateSchema,
  });
  // console.log("Form values", formik.values);
  //   console.log("Form errors", formik.errors);
  // console.log("Visited fields", formik.touched);
  return (
    <div className="form-control">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.name}
            {...formik.getFieldProps("name")} //this expression replaces above three ones
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            // {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
            // {...formik.getFieldProps("channel")}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OldYouTubeForm;
