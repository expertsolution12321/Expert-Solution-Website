import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";

function SignIn() {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters long")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      // Handle form submission
      console.log("Form data:", values);
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="signInPage mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-md lg:max-w-lg border-solid border-2 border-cyan-200 h-auto px-6 py-6 md:px-8 lg:px-10 rounded-md bg-cyan-100 shadow-lg">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 sm:text-3xl">
          Sign In
        </h2>
        <form onSubmit={formik.handleSubmit} className="mt-8 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={`mt-2 block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ${
                formik.touched.email && formik.errors.email
                  ? "ring-red-500"
                  : "ring-gray-300"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm`}
              placeholder="Enter Your Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className={`mt-2 block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ${
                formik.touched.password && formik.errors.password
                  ? "ring-red-500"
                  : "ring-gray-300"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm`}
              placeholder="Enter Your Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          <button
            type="submit"
            className="mt-4 w-full flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:text-base"
          >
            Sign In
          </button>

          <div className="text-center mb-4 mt-6">
            <p className="text-sm">Or sign in with:</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <button className="flex items-center justify-center w-full sm:w-auto rounded-md border border-gray-300 bg-white py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
              <FaGoogle className="mr-2" />
              Google
            </button>
            <button className="flex items-center justify-center w-full sm:w-auto rounded-md border border-gray-300 bg-white py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
              <FaFacebookF className="mr-2" />
              Facebook
            </button>
            <button className="flex items-center justify-center w-full sm:w-auto rounded-md border border-gray-300 bg-white py-2 px-4 text-sm text-gray-700 hover:bg-gray-100">
              <FaGithub className="mr-2" />
              GitHub
            </button>
          </div>

          <p className="text-sm mt-6 text-center">
            Don't have an account?{" "}
            <a className="text-blue-600 font-medium" href="./signUp">
              Create Account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
