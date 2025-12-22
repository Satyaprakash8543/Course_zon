

// import Link from 'next/Link';
import Link from 'next/link'
import React from "react";
import { courses } from "../data";

import {
  FaCode,
  FaJava,
  FaPhp,
  FaPython,
  FaReact,
  FaServer,
  FaCloudDownloadAlt,
} from "react-icons/fa";

const Courselist = () => {
  return (
    <div className="container mx-auto my-6 px-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Welcome To CourseZone - Following Courses We Offer
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-3  ">
        {courses.map((item) => (
          <div
            key={item.id}
            className="bg-gray-700 rounded-xl shadow-md border p-6 flex flex-col items-center text-center   duration-500 ease-out "
          >
            {/* Icon */}
            <div className="text-4xl text-indigo-600 mb-3">
              {item.icon}
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold cursor-pointer">{item.title}</h2>
              <Link href={`/Projects/project_1_coursezone/${item.id}`} >
              <button className='border-white bg-blue-600 px-2 py-1 rounded-2xl'>Explore Course</button>
              </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courselist;

