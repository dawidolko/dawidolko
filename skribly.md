---
layout: default
title: Skribly — developer tools for AI coding agents
description: Skribly is a private, non-commercial project of five developers from Rzeszów — a family of developer tools for planning work and building software with AI coding agents.
permalink: /skribly/
---

<p align="center">
  <img src="/img/skribly/skribly-logo-lockup.svg" alt="Skribly" width="320">
</p>

<p align="center"><strong>Ink and rubric.</strong> Tools for planning work and building software with AI agents — designed as one family.</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-in%20active%20development-14171D?style=for-the-badge" alt="In active development">
  <a href="https://www.linkedin.com/in/dawidolko/"><img src="https://img.shields.io/badge/Follow%20the%20progress-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Follow on LinkedIn"></a>
</p>

---

## Why Skribly

Skribly is built by **Dawid Olko**, **[Piotr Smoła](https://github.com/PiotrSmola)**, **[Michał Pilecki](https://github.com/Prawy126)**, **[Konrad Pluta](https://github.com/g00staw)** and **[Mateusz Olko](https://github.com/OlkoMateusz)** — five developers from Rzeszów.

A medieval scribe — *skryba* in Polish, the word behind our name — copied texts by hand, in black ink, with red rubrics marking what mattered. That is the idea behind the brand: careful, readable work where the important things stand out. Everything under the Skribly name is built the same way — documented, accessible, tested, and meant to keep running after the demo.

Skribly is a private project I build with four friends, independent of my employment. It is a family of developer tools for people who write software with AI coding agents. It is non-commercial: nothing is sold, it has no clients and offers no services, and its repositories stay private while we build. Three apps do the work — Skribly Tracker, Skribly Agent and agent-skills — and three shared pieces stand behind them: Skribly Core, Skribly UI and Skribly Docs.

## The family

### <img src="/img/skribly/skribly-tracker-logo.svg" width="28" align="center" alt=""> Skribly Tracker

The **issue tracker** of the family: projects, issues with keys such as `SKR-12`, Kanban boards, comments and subtasks — in the browser and inside Skribly Agent. Its REST API is described in OpenAPI and documented at [docs.skribly.pl](https://docs.skribly.pl). It is the default tracker in Skribly Agent, and the agent-skills `task` skill supports it as one of six trackers, next to Redmine, Jira, GitHub, GitLab and Linear. The first edition runs on Laravel; a Node.js and TypeScript edition is in development and already answers the whole API, checked by contract tests against the shared schemas.

### <img src="/img/skribly/agent-workflow-logo.svg" width="28" align="center" alt=""> Skribly Agent

A **desktop app for AI coding agents** on macOS, Windows and Linux. Claude Code, Codex, Cursor Agent, Gemini CLI and more run side by side in workspaces, tabs and split panes — and the app shows which agent is working, which one waits for a decision and which one has finished. It is in development, and its installers are not public yet.

- Agent states read from the live screen, notifications, sessions restored after a restart and one history of past sessions across agents
- Tasks from Skribly Tracker, Jira, Redmine, GitHub, GitLab and Linear — start one and an agent gets the branch, the task file and the prompt
- A git worktree per agent, pipelines of several agents, review notes written on a diff and sent to an agent, commit proposals without AI trailers
- Security, WCAG and SEO audits and a browser inside the app shared with agents
- A list of the MCP servers of every agent with a connection test, and import and export of your own data
- A `skribly` command and an MCP server that only reads by default and asks in the app before any change
- Light, dark and high-contrast themes from Skribly UI and the same accessibility switches as the Skribly sites

<p align="center">
  <img src="/img/skribly/agent-workflow-dashboard.jpg" width="900" alt="Skribly Agent — dashboard">
</p>

<p align="center">
  <img src="/img/skribly/agent-workflow-agents.jpg" width="900" alt="Skribly Agent — agents in split panes">
</p>

### <img src="/img/skribly/agent-skills-logo.svg" width="28" align="center" alt=""> agent-skills

A library of **36 portable skills** — task workflow, commits, reviews, backend and end-to-end tests, PageSpeed, security and WCAG audits, migrations, Docker, CI, decision records and more — with **one installer for seven coding agents** (Claude Code, Codex, Cursor, Gemini CLI, OpenCode, GitHub Copilot, Devin). Each skill carries the fields of the open Agent Skills specification.

- **Adapts to each project** through a project profile
- **Learns:** confirmed lessons are kept per project
- **Cheap on tokens:** tool output is condensed before an agent reads it — a 455 KB Lighthouse report becomes 754 bytes
- **Safe by default:** a risky step waits for your OK, and commits carry no AI trailers
- **Works anywhere:** it works in any repository; for now it is available to our team only

### <img src="/img/skribly/skribly-core-logo.svg" width="28" align="center" alt=""> Skribly Core

The **shared contracts** of the family, written in TypeScript: the Tracker API schemas and client, webhook signing and verification, a catalogue of events in the CloudEvents format and an app registry. It is in development and not published as a package.

### <img src="/img/skribly/skribly-ui-logo.svg" width="28" align="center" alt=""> Skribly UI

The **design system**: design tokens, plain CSS classes that work on any page, React components built on React Aria, and the Astro site kit behind skribly.pl, docs.skribly.pl and ui.skribly.pl. It has light, dark and high-contrast themes and a brand section with the marks of the family, and it is built to WCAG 2.2 AA as a target. The live gallery is at **[ui.skribly.pl](https://ui.skribly.pl)**.

### <img src="/img/skribly/skribly-docs-logo.svg" width="28" align="center" alt=""> Skribly Docs

The **documentation** at **[docs.skribly.pl](https://docs.skribly.pl)**, in English and Polish: installing and using Skribly Agent, agent-skills and Skribly Tracker, the Tracker REST API reference, and the Core and UI packages. It documents only what exists and marks everything else as planned.

The three sites — skribly.pl, docs.skribly.pl and ui.skribly.pl — share one header, one page layout and one accessibility panel, and are in English and Polish.

## How they fit together

<p align="center">
  <img src="/img/skribly/ecosystem.svg" width="100%" alt="The Skribly ecosystem: Skribly Tracker, Skribly Agent and agent-skills with the shared building blocks Skribly Core, Skribly UI and Skribly Docs">
</p>

A task comes from **Skribly Tracker** or another tracker such as Jira, Redmine or GitHub. **Skribly Agent** turns it into a branch, a task file and an agent session; the agents work with **agent-skills** for tests, audits, documentation and clean commits. **Skribly Core** holds the shared contracts, **Skribly UI** the look and **Skribly Docs** the explanations.

## Status

The website **[skribly.pl](https://skribly.pl)**, the documentation **[docs.skribly.pl](https://docs.skribly.pl)** and the design system **[ui.skribly.pl](https://ui.skribly.pl)** are public. The repositories are private while we build. Questions go to **contact@dawidolko.pl**.

<p align="center"><a href="/">← Back to the profile</a></p>
