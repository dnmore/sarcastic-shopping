import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormInput from "../components/FormInput";
import Toast from "../components/Toast";
import Fab from "@mui/material/Fab";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function SignUp() {
  const navigate = useNavigate();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("success");

  const handleToastClose = () => {
    setToastOpen(false);
  };

  return (
    <div className="bg-white px-6 max-w-96 mx-auto">
      <h3 className="text-xl font-bold mb-4">Sign up</h3>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("*Required"),
          lastName: Yup.string().required("*Required"),
          email: Yup.string()
            .email("*Invalid email address")
            .required("*Required"),
          password: Yup.string()
            .min(8, "*Must be at least 8 characters")
            .required("*Required"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          await sleep(500);
          let formData;
          formData = JSON.stringify(values, null, 2);

          try {
            const response = await fetch(`${backendUrl}/register`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: formData,
            });
            const result = await response.json();

            if (response.ok) {
              setToastSeverity("success");
              setToastMessage(result.message);
              setToastOpen(true);
              setSubmitting(false);
              resetForm({
                values: {
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                },
              });
              navigate("/");
            } else if (response.status === 409) {
              setToastSeverity("error");
              setToastMessage(result.message);
              setToastOpen(true);
            } else {
              setToastSeverity("error");
              setToastMessage(result.message);
              setToastOpen(true);
            }
          } catch (error) {
            console.error("Error:", error);

            setToastSeverity("error");
            setToastMessage("Something went wrong. Please try again.");
            setToastOpen(true);
          }
        }}
      >
        <Form className="my-4">
          <div className="flex flex-col md:flex-row gap-2">
            <FormInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="your first name"
              autoComplete="first-name"
            />

            <FormInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="your last name"
              autoComplete="last-name"
            />
          </div>

          <FormInput
            label="Email"
            name="email"
            type="email"
            placeholder="your email address"
            autoComplete="email"
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            placeholder="type password"
            autoComplete="password"
          />

          <Fab
            type="submit"
            color="primary"
            aria-label="pay"
            variant="extended"
          >
            Sign Up
          </Fab>
        </Form>
      </Formik>
      <p className="text-sm mb-4">
        Already have an account?
        <Link
          to="/sign-in"
          className="text-sm ml-2  text-blue-700 hover:opacity-75 "
        >
          SignIn
        </Link>
      </p>
      <Toast
        open={toastOpen}
        message={toastMessage}
        severity={toastSeverity}
        onClose={handleToastClose}
      />
    </div>
  );
}
