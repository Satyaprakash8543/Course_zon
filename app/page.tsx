"use client";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "motion/react";

export default function Home() {
  const router = useRouter();
  return (
    // <div className="flex justify-center items-center mt-10px">
    // <div className="flex flex-col justify-center items-center text-black  bg-amber-50 mt-2  p-3 w-[300] h-[300] ">

    //   <h1 className="text-xl uppercase font-light">Welcome to the next.js</h1>
    //   <div className="gap-2 flex flex-col ">
    //   <button  onClick={() => router.push("/Projects/project_1_coursezone")} className="bg-green-400 py-2 px-2 rounded-2xl  flex  justify-center items-center text-xl"><span>Go to project-1 </span><FaArrowCircleRight/></button>

    //    <button  onClick={() => router.push("/Projects/project_2_memg")} className="bg-blue-600 py-2 px-2 rounded-2xl shadow-blue-100 flex  justify-center items-center text-xl "><span>Go to project-2</span> <FaArrowCircleRight/></button>
    // </div>
    // </div>
    // </div>

    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className="flex w-[300px] flex-col items-center gap-4 rounded-xl bg-amber-50 p-4 shadow-lg"
      >
        <h1 className="text-center text-xl font-light text-black uppercase">
          Welcome to Next.js
        </h1>

        <div className="flex w-full flex-col gap-3">
          <button
            onClick={() => router.push("/Projects/project_1_coursezone")}
            className="flex items-center justify-center gap-2  cursor-pointer rounded-2xl bg-green-500 px-4 py-2 text-lg text-white transition hover:bg-green-600 active:scale-95"
          >
            <span>Go to Project 1</span>
            <FaArrowCircleRight />
          </button>

          <button
            onClick={() => router.push("/Projects/project_2_memg")}
            className="flex items-center justify-center gap-2 rounded-2xl cursor-pointer bg-blue-600 px-4 py-2 text-lg text-white transition hover:bg-blue-700 active:scale-95"
          >
            <span>Go to Project 2</span>
            <FaArrowCircleRight />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
