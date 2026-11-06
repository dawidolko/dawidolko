// Writes the project list in README.md from data/projects.json, with live star counts.
// Run it with `node scripts/build-readme.mjs`; GITHUB_TOKEN is optional but avoids rate limits.
import { readFile, writeFile } from "node:fs/promises";

const OWNER = "dawidolko";
const START = "<!-- projects:start -->";
const END = "<!-- projects:end -->";

const groups = JSON.parse(await readFile("data/projects.json", "utf8"));
const readme = await readFile("README.md", "utf8");
const headers = { Accept: "application/vnd.github+json" };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function stars(repo) {
  const response = await fetch(`https://api.github.com/repos/${OWNER}/${repo}`, { headers });
  if (!response.ok) throw new Error(`${repo}: GitHub answered ${response.status}`);
  return (await response.json()).stargazers_count;
}

function row(project, count) {
  const links = [`[Code](https://github.com/${OWNER}/${project.repo})`];
  if (project.live) links.push(`[Live](${project.live})`);
  const star = count > 0 ? ` ⭐ ${count}` : "";
  return `| **${project.title}**${star} | ${project.summary} | ${project.stack.join(", ")} | ${links.join(" · ")} |`;
}

const sections = [];
for (const group of groups) {
  const rows = await Promise.all(
    group.projects.map(async (project) => ({ project, count: await stars(project.repo) })),
  );
  rows.sort((a, b) => b.count - a.count);
  sections.push(
    `### ${group.category}\n\n| Project | What it is | Stack | Links |\n| --- | --- | --- | --- |\n` +
      rows.map(({ project, count }) => row(project, count)).join("\n"),
  );
}

const before = readme.slice(0, readme.indexOf(START) + START.length);
const after = readme.slice(readme.indexOf(END));
await writeFile("README.md", `${before}\n\n${sections.join("\n\n")}\n\n${after}`);
