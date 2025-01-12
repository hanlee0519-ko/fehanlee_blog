import { RepoData } from "@/types/repo";
import { Suspense } from "react";

async function getProjects() {
  try {
    const response = await fetch("http://localhost:3001/repos");
    if (!response.ok) throw new Error();

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

async function ProjectList() {
  const projects: RepoData[] = await getProjects();

  if (!projects.length) {
    return (
      <p className="bg-red-500 text-2xl text-white font-bold mt-10 p-5">
        {"서버 Error 발생"}
      </p>
    );
  }

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id} className="p-4">
          <h3>{project.title}</h3>
          <h4 className="bg-yellow-500 font-bold text-white">
            {project.stargazers_count}
          </h4>
        </li>
      ))}
    </ul>
  );
}

function ProjectLoading() {
  return (
    <ul>
      {Array.from({ length: 3 }).map((_, index) => (
        <li key={index} className="p-4">
          <div className="w-full h-20 animate-pulse bg-gray-400 dark:bg-black"></div>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <article className="border-4 border-blue-500">
        <h1 className="mb-4 text-2xl">Page: Projects</h1>
        <Suspense fallback={<ProjectLoading />}>
          <ProjectList />
        </Suspense>
      </article>
    </>
  );
}
