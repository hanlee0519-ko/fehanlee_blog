import { RepoData } from "@/types/repo";

async function getProjects() {
  try {
    const response = await fetch("http://localhost:3001/repos");
    if (!response.ok) throw new Error();

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

export default async function Page() {
  const projects: RepoData[] = await getProjects();

  if (!projects.length) {
    return (
      <p className="bg-red-500 text-2xl text-white font-bold  m-4 p-10">
        {"서버 Error 발생"}
      </p>
    );
  }

  return (
    <article className="border-4 border-blue-500 m-4 p-10">
      <h1 className="mb-2">Page: Blog</h1>
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
    </article>
  );
}
