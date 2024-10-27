import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignUp() {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters long")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      const res = await fetch("http://localhost:5000/admin/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      console.log("data post", data);
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="signInPage mt-10 sm:mx-auto sm:w-full sm:max-w-md lg:max-w-lg border-solid border-2 border-cyan-200 h-auto px-6 py-10 lg:px-8 rounded-md bg-cyan-100 shadow-lg">
        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 sm:text-3xl">
          Create Account
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6 mt-8">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              UserName:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={`mt-2 block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ${
                formik.touched.name && formik.errors.name
                  ? "ring-red-500"
                  : "ring-gray-300"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm`}
              placeholder="Enter Your Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.name}
              </div>
            ) : null}
          </div>

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
            className="mt-6 flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </button>

          <hr className="border-1 border-black mt-6" />

          <p className="text-base mt-4 text-center">
            Already have an account?{" "}
            <a className="text-blue-600 font-medium" href="./signIn">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
