import Card from "@/components/card";
import { RepoData } from "@/types/repo";
import { Suspense } from "react";

async function getRepos() {
  const response = await fetch("http://localhost:3001/repos");
  if (!response.ok) throw new Error();

  const data = await response.json();
  return data;
}

async function ProjectList() {
  const repos: RepoData[] = await getRepos();

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {repos.map((repo) => (
        <li key={repo.id} className="mb-4">
          <Card className="font-mono h-full">
            <header className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">{repo.title}</h3>
              <span>⭐️{repo.stargazers_count}</span>
            </header>

            <p>{repo.description}</p>
          </Card>
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
      <article>
        <h1 className="mb-4 text-2xl">Page: Projects</h1>
        <Suspense fallback={<ProjectLoading />}>
          <ProjectList />
        </Suspense>
      </article>
    </>
  );
}
