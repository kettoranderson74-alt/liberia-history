"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  async function signup() {
    setMessage("");

    if (!name || !email || !password || !confirmPassword) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name,
        },
      },
    });

    if (error) {
      setMessage("Signup failed: " + error.message);
      return;
    }

    setMessage("Account created successfully!");

    setTimeout(() => {
      router.push("/user-login");
    }, 1500);
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow max-w-md w-full">

        <h1 className="text-3xl font-bold text-green-700 mb-2 text-center">
          Create Your Account 🇱🇷
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Join Liberia History and explore Liberia's story.
        </p>

        <input
          className="border p-3 w-full mb-4 rounded"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <input
          type="password"
          className="border p-3 w-full mb-4 rounded"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          onClick={signup}
          className="bg-green-700 text-white px-6 py-3 rounded-lg w-full"
        >
          Create Account
        </button>

        <p className="mt-4 text-center font-semibold">
          {message}
        </p>

        <button
          onClick={() => router.push("/user-login")}
          className="mt-4 text-green-700 w-full"
        >
          Already have an account? Login
        </button>

      </div>
    </main>
  );
}