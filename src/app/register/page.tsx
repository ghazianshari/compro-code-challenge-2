"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import useRegister from "./_hooks/useRegister";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(3),
  email: Yup.string().required("Email is required").email(),
  password: Yup.string().required("Password is required").min(6),
});

const RegisterPage = () => {
  // const [form, setForm] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const handleRegister = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (form.password !== form.confirmPassword) {
  //     alert("Your passwords do not match.");
  //     return;
  //   }

  //   alert("Register successfull. You are now bound.");
  // TODO: JANGAN LUPA KONEK BACKENDLESS, COBA COPAS BANG DANIEL AJA
  // };

  const { mutateAsync: register, isPending } = useRegister();

  return (
    <main className="container mx-auto bg-black h-screen text-white flex items-center justify-center px-6 py-24">
      <motion.div
        className="w-full max-w-md bg-zinc-900 border border-red-600 rounded-2xl p-8 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-red-500 text-center mb-6">
          Join the Market
        </h1>
        <p className="text-center text-sm text-gray-400 mb-8">
          One of us. One of us.
        </p>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await register(values);
          }}
        >
          <Form className="space-y-4">
            <CardHeader>
              <CardTitle>Register to your account</CardTitle>
              <CardDescription>
                Enter your data below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                {/* NAME */}
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Field
                    name="name"
                    as={Input}
                    type="text"
                    placeholder="Your name"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>

                {/* EMAIL */}
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Field
                    name="email"
                    as={Input}
                    type="email"
                    placeholder="Your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>

                {/* PASSWORD */}
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Field
                    name="password"
                    as={Input}
                    type="password"
                    placeholder="Your password"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-sm text-red-500"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? <Wrench className="animate-spin" /> : "Register"}
              </Button>
            </CardFooter>
          </Form>
        </Formik>

        <div className="mt-6 text-center text-sm text-gray-400">
          Already marked?{" "}
          <Link href="/login" className="text-red-500 hover:underline">
            Return to the Gate
          </Link>
        </div>
      </motion.div>
    </main>
  );
};

export default RegisterPage;
