"use client";

import { useState } from "react";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;

    alert(`[회원가입 완료]: ${email} !!`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-10">
      <label>
        Email:
        <input type="email" value={email} onChange={handleChangeEmail} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handleChangePW} />
      </label>
      <button
        type="submit"
        className="bg-orange-500 flex-none mr-auto px-5 py-2 mt-4 rounded-md text-white font-bold"
      >
        Sign Up
      </button>
    </form>
  );
}
