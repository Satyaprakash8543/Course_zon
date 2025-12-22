"use client";
import React from "react";
import { courseDetails } from "../data";
import { FaClock, FaLayerGroup, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const page = ({ params }) => {
  const router = useRouter();
  const { slug } = React.use(params);
  //Find course based on slug
  const course = courseDetails.find((course) =>
    course.title.toLowerCase().includes(slug.toLowerCase())
  );
  console.log("getting course based on slug =", course);
  return (
    <div>
      {/* <h1>Welcome to the course dynamic route= {slug}</h1> */}
      <div className="container text-center w-full h-screen bg-gray-300 text-white flex justify-center items-center ">
        <div className=" bg-gray-900 rounded-2xl w-[500px] h-[450px] p-6 ">
          <div className="text-center">
            <h1 className="text-amber-300 text-3xl">{course.title}</h1>

            <div className="flex items-center justify-center gap-2 my-2">
              <button className="flex items-center gap-1 rounded bg-blue-400 px-3 py-2 text-xl ">
                <FaClock className="text-base" />
                <span>{course.duration}</span>
              </button>

              <button className="flex items-center gap-1 rounded bg-amber-300 px-3 py-2 text-xl hover:shadow-amber-100 ">
                <FaLayerGroup className="text-base" />
                <span>{course.level}</span>
              </button>
            </div>
          </div>
          <h3 className="text-2xl py-2">Project you can build</h3>
          <ul className="bg-gray-500 text-base py-3 tracking-normal leading-7 rounded-xl shadow-xl/30">
            {course.projects.map((project) => (
              <li key={project.id}>{project.title}</li>
            ))}
          </ul>

          <div className="flex items-center justify-center ">
            <button
              onClick={() => router.push("/Projects/project_1_coursezone")}
              className="mt-5 flex  cursor-progress items-center justify-end gap-2 rounded-2xl  px-3 py-2 text-xl bg-cyan-500 shadow-lg shadow-cyan-500/50 "
            >
              <FaArrowLeft />
              <span>Back to course</span>
            </button>
          </div>
          <button className="bg-blue-500  my-3 px-2 py-2 rounded-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
            Save Changes
          </button>

        
        </div>
      </div>
    </div>
  );
};

export default page;
