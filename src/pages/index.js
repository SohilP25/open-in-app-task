import Image from "next/image";
import {
  AiFillApple,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BiLogoDiscord } from "react-icons/bi";
import { useSession, signIn, signOut } from "next-auth/react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  async function handleSignIn() {
    signIn("google", { callbackUrl: "https://open-in-app-task-five.vercel.app/dashboard" });
  }

  const myComponentStyle = {};

  return (
    <div
      className="grid grid-cols-2 h-screen  w-screen bg-[#F8FAFF] "
      style={myComponentStyle}
    >
      <div className="w-auto h-auto  bg-gradient-to-r from-[#4285F4] to-[#286DE0] grid grid-row-6 justify-center items-center">
        <div className="">
          <h2 className="text-white font-[700] absolute left-9">LOGO</h2>
        </div>
        <div className="row-span-4 ">
          <h1 className="text-white text-5xl font-[700] ">Board.</h1>
        </div>
        <div className=" ">
          <h1 className="text-white text-4xl font-[700] flex gap-5">
            <AiFillGithub />
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <BiLogoDiscord />
          </h1>
        </div>
      </div>

      <div className="w-auto h-auto bg-inherit flex ml-3 justify-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-black font-[700] text-2xl">Sign In</h1>
          <h4 className="text-black text-lg  mt-1 mb-5">
            Sign in to your account
          </h4>
          <div className="flex flex-row justify-start gap-7">
            <div className="flex w-44 h-7 bg-white text-[#858585] text-xs items-center  justify-center rounded-lg">
              <a
                className="flex flex-row text-center justify-center pt-1 items-center gap-[10px] cursor-pointer"
                style={{ marginTop: "-2.2% " }}
                onClick={handleSignIn}
              >
                <FcGoogle className="w-4 h-4" />
                Sign into Google
              </a>
            </div>
            <div className="flex w-44 h-7 bg-white text-[#858585] text-xs items-center  justify-center rounded-lg">
              <a
                href="/"
                className="flex flex-row text-center justify-center pt-1 items-center gap-[10px]"
                style={{ marginTop: "-2.2% " }}
              >
                <AiFillApple className="w-4 h-4" />
                Sign into Apple
              </a>
            </div>
          </div>

          <div className=" w-96  h-80 mt-7 bg-white flex flex-col items-center rounded-[20px]">
            <div className="mt-7">
              <h4 className="text-4 text-black mb-2">Email Address</h4>
              <input
                type="email"
                className="w-80 h-10 bg-[#F5F5F5] rounded-lg text-black p-2"
              />
            </div>
            <div className="mt-7">
              <h4 className="text-4 text-black mb-2">Password</h4>
              <input
                type="password"
                className="w-80 h-10 bg-[#F5F5F5] text-black rounded-lg p-2"
              />
            </div>
            <div className="my-4">
              <h3 className="text-4 text-[#346BD4]">Forgot Password?</h3>
            </div>

            <button className="w-80 h-10 bg-[#4285F4] mx-7 mb-7 rounded-[10px]">
              Sign In
            </button>
          </div>

          <div className="self-center">
            <h3 className="text-[#858585] text-3 mt-5">
              Don't have an account?{" "}
              <span className="text-[#346BD4] text-3">Register here</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
