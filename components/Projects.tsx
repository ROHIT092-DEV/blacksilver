"use client";

import React from "react";
import { projectsdata } from "../public/projectsdata";
import Image from "next/image";
import Link from "next/link";

import { motion } from "motion/react";

function Projects() {
  return (
    <div className=" bg-gray-200 py-8">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-2xl font-bold tracking-tight py-4">
          Top Projects Build
        </h1>

        <motion.div
          className="grid md:grid-cols-3 grid-cols-1 gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {projectsdata.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-100 p-4 rounded-sm shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="rounded-lg transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h2 className="text-xl font-semibold mt-3 mb-1 text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
