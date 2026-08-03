"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");



  async function login() {

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });



    if (error) {

      setMessage("Login failed: " + error.message);
      return;

    }


    router.push("/admin");

  }




  return (

    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">


      <div className="bg-white p-8 rounded-xl shadow max-w-md w-full">


        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Liberia History Admin Login 🇱🇷
        </h1>



        <input

          className="border p-3 w-full mb-4 rounded"

          placeholder="Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

        />



        <input

          type="password"

          className="border p-3 w-full mb-4 rounded"

          placeholder="Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

        />



        <button

          onClick={login}

          className="bg-green-700 text-white px-6 py-3 rounded-lg w-full"

        >
          Login
        </button>



        <p className="mt-4 font-semibold">
          {message}
        </p>



      </div>


    </main>

  );

}