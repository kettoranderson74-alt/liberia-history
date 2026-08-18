"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function UserLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function login() {
    setMessage("");

    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage("Login failed: " + error.message);
      return;
    }

    router.push("/account");
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow max-w-md w-full">

        <h1 className="text-3xl font-bold text-green-700 mb-2 text-center">
          Welcome Back 🇱🇷
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Login to your Liberia History account.
        </p>

        <input
          type="email"
          className="border p-3 w-full mb-4 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-3 w-full mb-4 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="bg-green-700 text-white px-6 py-3 rounded-lg w-full"
        >
          Login
        </button>

        <p className="mt-4 text-center font-semibold">
          {message}
        </p>

        <button
          onClick={() => router.push("/signup")}
          className="mt-4 text-green-700 w-full"
        >
          Don't have an account? Create Account
        </button>

      </div>
    </main>
  );
}