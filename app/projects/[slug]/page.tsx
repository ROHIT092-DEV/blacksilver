import * as React from "react";
import { projectsdata } from "@/public/projectsdata";
import Image from "next/image";
import Link from "next/link";

export default async function ComponentName({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projectsdata.find((item) => item.id === Number(slug));
  if (!project) {
    return (
      <main className="p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-red-600">
          Project not found 😢
        </h1>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-center text-xl font-bold text-gray-700">
        Review our Project {project.title}
      </h1>
      <div className="grid lg:grid-cols-6 grid-cols-1 py-10 gap-2">
        <section className="col-span-4 ">
          <div className="relative w-full h-[450px]  overflow-hidden  ">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </section>
        <section className="col-span-2 ">World</section>
      </div>

      {/* Project Title Section */}
      {/*<section className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <p className="text-gray-500">{project.category}</p>
      </section>

      {/* Image Section */}

      {/*<section className="grid md:grid-cols-3 grid-cols-1 gap-8">

        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{project.description}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-3">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>*/}

      {/* Right side: meta details */}
      {/*<aside className="bg-gray-50 rounded-lg shadow-sm p-5 space-y-3 h-fit">
          <h3 className="text-xl font-semibold mb-2">Project Info</h3>
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <strong>Client:</strong> {project.client}
            </p>
            <p>
              <strong>Duration:</strong> {project.duration}
            </p>
            <p>
              <strong>Status:</strong> {project.status}
            </p>
            <p>
              <strong>Created:</strong> {project.createdAt}
            </p>
          </div>

          <div className="flex gap-3 mt-5">
            <Link
              href={project.github}
              target="_blank"
              className="flex-1 bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 text-center transition"
            >
              GitHub
            </Link>
            <Link
              href={project.liveDemo}
              target="_blank"
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 text-center transition"
            >
              Live Demo
            </Link>
          </div>
        </aside>
      </section>*/}

      {/* Back Button */}
      {/*<div className="mt-12 text-center">
        <Link
          href="/projects"
          className="inline-block text-gray-600 hover:text-gray-900 transition"
        >
          ← Back to Projects
        </Link>
      </div>*/}
    </main>
  );
}
