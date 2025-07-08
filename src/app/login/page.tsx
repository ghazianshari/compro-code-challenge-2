"use client";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import Link from "next/link";
import useLogin from "./_hooks/useLogin";

const LoginPage = () => {
  const { mutateAsync: login, isPending } = useLogin();

  return (
    <>
      <main className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          className="w-full max-w-md bg-zinc-900 border border-red-600 rounded-2xl p-8 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-red-500 text-center mb-6">
            Welcome Back, Mortal
          </h1>
          <p className="text-center text-sm text-gray-400 mb-8">
            Access the marketplace of shadows.
          </p>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              await login({ login: values.email, password: values.password });
            }}
          >
            <Form className="space-y-4">
              <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                  Enter your email below to login to your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6">
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
                  {isPending ? <Loader className="animate-spin" /> : "Login"}
                </Button>
              </CardFooter>
            </Form>
          </Formik>

          <div className="mt-6 text-center text-sm text-gray-400">
            Doesn't have an account?{" "}
            <Link href="/register" className="text-red-500 hover:underline">
              Register
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default LoginPage;
