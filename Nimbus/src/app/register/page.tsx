"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Gradients from "@/components/Gradients";
import Link from "next/link";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submithandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all the fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });

      if (res.status === 200) {
        alert("Registered successfully! Please login.");
        router.push("/login");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        alert(err.response.data.message || "Registration failed");
      } else {
        alert("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex justify-center items-center">
      {loading && (
        <div className="absolute min-h-screen w-full bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
          <span className="text-[#00FF9C] text-xl font-semibold animate-pulse">
            Registering...
          </span>
        </div>
      )}

      <Gradients />

      <div className="bg-[#00ff9d41] border border-white/10 rounded-2xl backdrop-blur-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-5 m-5 w-full max-w-100 z-10">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Welcome to Nimbus
        </h1>

        <form onSubmit={submithandler} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              className="w-full px-4 py-2 rounded-lg bg-black/30 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#00FF9C]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-black/30 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#00FF9C]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="w-full px-4 py-2 rounded-lg bg-black/30 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#00FF9C]"
            />
          </div>

          <div className="flex justify-between gap-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-[#00FF9C] text-black font-semibold rounded-lg hover:bg-[#00e68a] transition duration-200 cursor-pointer disabled:opacity-50"
            >
              Register
            </button>

            <Link
              href="/login"
              className="w-full py-2 text-center border-2 border-[#00FF9C] text-white rounded-lg transition duration-200 cursor-pointer hover:bg-[#00ff9c11]"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;