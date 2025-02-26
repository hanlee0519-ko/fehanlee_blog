import Card from "@/components/card";
import { Suspense } from "react";

type RepoData = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
};

async function getRepos() {
  try {
    const response = await fetch(
      "https://api.github.com/users/piotr-jura-udemy/repos"
    );
    if (!response.ok) throw new Error();

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function ProjectList() {
  const repos: RepoData[] = await getRepos();

  if (repos.length === 0) {
    return <h1>{"Error 발생"}</h1>;
  }

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {repos.map((repo) => (
        <li key={repo.id} className="mb-4">
          <Card className="font-mono h-full">
            <header className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">{repo.name}</h3>
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
