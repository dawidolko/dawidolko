---
layout: default
title: Skryba — my own ecosystem
description: Skryba is the brand behind my own products — an issue tracker, a desktop IDE for AI coding agents and a shared library of agent skills.
permalink: /skryba/
---

<p align="center">
  <img src="/img/skryba/skryba-logo-lockup.svg" alt="Skryba" width="320">
</p>

<p align="center"><strong>Ink and rubric.</strong> Tools for planning work and building software with AI agents — designed as one family.</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-private%20beta-14171D?style=for-the-badge" alt="Private beta">
  <a href="https://www.linkedin.com/in/dawidolko/"><img src="https://img.shields.io/badge/Follow%20the%20progress-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Follow on LinkedIn"></a>
</p>

---

## Why Skryba

Skryba is built by **Dawid Olko** and **[Piotr Smoła](https://github.com/PiotrSmola)** — two developers from Rzeszów who already ship products together.

A medieval scribe — *skryba* in Polish — copied texts by hand, in black ink, with red rubrics marking what mattered. That is the idea behind the brand: careful, readable work where the important things stand out. Everything under the Skryba name is built the same way — documented, accessible, tested, and meant to keep running after the demo.

We are building Skryba as our own ecosystem: products we use every day in our work, shaped into something other developers and teams can use too.

## The family

### <img src="/img/skryba/skryba-tracker-logo.svg" width="28" align="center" alt=""> Skryba Tracker

The **issue tracker** of the ecosystem, in active development: projects, issues with keys like `SKR-12`, Kanban boards, comments, time logs and subtasks — in the browser and inside Skryba Agent. Built on Laravel 12, with a REST API that Skryba Agent and the agent-skills `task` skill use as their default tracker.

### <img src="/img/skryba/agent-workflow-logo.svg" width="28" align="center" alt=""> Skryba Agent

A **desktop IDE for AI coding agents** for macOS, Windows and Linux. Claude Code, Codex, Cursor Agent, Gemini CLI and more work side by side in workspaces, tabs and split panes — and the app knows which agent is working, which one waits for a decision and which one has finished.

- Agent states detected from the live screen, notifications for what you are not looking at, sessions restored after a restart
- Tasks from Jira, Redmine, GitHub, GitLab and Linear — start one and an agent gets the branch, the task file and the prompt
- Git worktrees per agent, multi-agent pipelines, commit proposals without AI trailers
- Security, WCAG and SEO audits, an in-app browser shared with agents, Claude and Cursor integrations, Docker monitoring
- A `skryba` CLI and MCP server, so one agent can start, prompt and read another
- Installers for every system and automatic updates

<p align="center">
  <img src="/img/skryba/agent-workflow-dashboard.jpg" width="900" alt="Skryba Agent — dashboard">
</p>

<p align="center">
  <img src="/img/skryba/agent-workflow-agents.jpg" width="900" alt="Skryba Agent — agents in split panes">
</p>

### <img src="/img/skryba/agent-skills-logo.svg" width="28" align="center" alt=""> agent-skills

A library of **27 portable skills** — task workflow, commits, reviews, backend and end-to-end tests, PageSpeed, security, migrations, Docker, CI and more — with **one installer for seven agents** (Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Windsurf, GitHub Copilot). Scripts condense tool output before an agent reads it: a 455 KB Lighthouse report becomes 754 bytes.

## How they fit together

<p align="center">
  <img src="/img/skryba/ecosystem.svg" width="100%" alt="The Skryba ecosystem diagram">
</p>

A task arrives from a tracker such as Jira, Redmine or GitHub. **Skryba Agent** turns it into a branch, a task file and an agent session; the agents work with **agent-skills** for tests, audits, documentation and clean commits. agent-skills stays independent — any developer can install it in any repository, with or without the rest of Skryba.

## Status

All Skryba repositories are **private for now** — we build them every day and will open them step by step. If you want early access or a demo, write to **dawid_olko@outlook.com** or reach me on [LinkedIn](https://www.linkedin.com/in/dawidolko/).

<p align="center"><a href="/">← Back to the profile</a></p>
