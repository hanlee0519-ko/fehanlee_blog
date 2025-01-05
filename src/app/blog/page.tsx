import { RepoData } from "@/types/repo";

export default async function Page() {
  const response = await fetch("http://localhost:3001/repos");
  const projects: RepoData[] = await response.json();

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
