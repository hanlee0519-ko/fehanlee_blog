import type { Metadata } from "next";
import SignUpForm from "@/components/sign-up-form";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <article className="border-4 border-orange-500">
      <h1>Page: Login</h1>
      <SignUpForm />
    </article>
  );
}
