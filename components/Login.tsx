"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
const Login = () => {
  return (
    <div className="bg-[#11a37f] h-screen flex flex-col justify-center items-center text-center">
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-xl animate-pulse "
      >
        Sign In To use ChatGPT
      </button>
    </div>
  );
};

export default Login;
