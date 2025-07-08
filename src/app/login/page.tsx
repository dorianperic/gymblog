"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      login(email); // simulate login with email
      router.push("/membership");
    }
  };

  return (
    <div className="min-h-screen flex flex-col  lg:flex-row items-center justify-center bg-black px-4 py-12 gap-16">

       <div className="flex flex-col items-center md:items-start gap-5 max-w-md text-center lg:text-left">
        <h2 className="text-white text-3xl font-bold">
          Fit<span className="text-red-600">Zone</span>
        </h2>
        <h1 className="text-white text-4xl lg:text-5xl font-black">Login</h1>
        <p className="text-white text-2xl font-bold">
          Log in to access your account and view your plans.
        </p>
        <div className="inline-flex items-center gap-3 mt-4">
        </div>
      </div>

      {/* Right side: Form */}
      <div className="w-full max-w-xl bg-neutral-900 rounded-2xl p-8 flex flex-col gap-6">
        <h1 className="text-white text-4xl font-black">Welcome back!</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="text-white text-2xl font-bold">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 px-4 rounded border-[2.5px] border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <label className="text-white text-2xl font-bold">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-14 px-4 rounded border-[2.5px] border-white bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <p className="text-white/80 text-base font-semibold cursor-pointer hover:underline">
            Forgot password?
          </p>

          <button
            type="submit"
            className="h-14 bg-white text-black text-xl font-extrabold rounded hover:bg-red-100 transition"
          >
            Login
          </button>

          <button
            type="button"
            className="h-14 outline outline-2 outline-white text-white text-xl font-extrabold rounded hover:bg-white/10 transition"
          >
            Sign in with Google
          </button>
        </form>

        <p className="text-white/80 text-base font-semibold">
          Don&apos;t have an account?{" "}
          <span className="text-red-500 cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>

      {/* Right side: Info */}
     
    </div>
  );
}
