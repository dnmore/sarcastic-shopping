import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormInput from "../components/FormInput";
import Fab from "@mui/material/Fab";

import { authContext } from "../contexts/authContext";
import Toast from "../components/Toast";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
export default function SignIn() {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(authContext);

  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState("success");

  const handleToastClose = () => {
    setToastOpen(false);
  };

  return (
    <div className="bg-white px-6 max-w-96 mx-auto">
      <h3 className="text-xl font-bold mb-4">Sign In</h3>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
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
            const response = await fetch(`${backendUrl}/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: formData,
            });

            const result = await response.json();
            if (response.ok) {
              localStorage.setItem("token", result.access_token);
              setLoggedIn(true);
              
             
              setSubmitting(false);
              resetForm({
                values: {
                  email: "",
                  password: "",
                },
              });
              navigate("/");
            } else if (response.status === 401) {
              
              setToastSeverity("error");
              setToastMessage(
                result.message
              );
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
          <FormInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@test.com"
            autoComplete="email"
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            autoComplete="password"
          />

          <Fab
            type="submit"
            color="primary"
            aria-label="pay"
            variant="extended"
          >
            Sign In
          </Fab>
        </Form>
      </Formik>
      <p className="text-sm">
        Don't have an account?
        <Link
          to="/sign-up"
          className="text-sm ml-2 text-blue-700 hover:opacity-75 "
        >
          SignUp
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
