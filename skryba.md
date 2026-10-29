---
layout: default
title: Skryba — my own ecosystem
description: Skryba is the brand behind my own products — a multi-site CMS, a desktop IDE for AI coding agents and a shared library of agent skills.
permalink: /skryba/
---

<p align="center">
  <img src="/img/skryba/skryba-logo-lockup.svg" alt="Skryba" width="320">
</p>

<p align="center"><strong>Ink and rubric.</strong> Tools for building websites and for working with AI agents — designed as one family.</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-private%20beta-14171D?style=for-the-badge" alt="Private beta">
  <a href="https://www.linkedin.com/in/dawidolko/"><img src="https://img.shields.io/badge/Follow%20the%20progress-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Follow on LinkedIn"></a>
</p>

---

## Why Skryba

A medieval scribe — *skryba* in Polish — copied texts by hand, in black ink, with red rubrics marking what mattered. That is the idea behind the brand: careful, readable work where the important things stand out. Everything under the Skryba name is built the same way — documented, accessible, tested, and meant to keep running after the demo.

I am building Skryba as my own ecosystem: products I use every day in my work, shaped into something other developers and teams can use too.

## The family

### ✒️ Skryba CMS

A modular **Laravel 12** content management system in which **one installation serves many independent websites** — each with its own domains, pages, menus, widgets, media, languages, shop and customers, separated by a global scope on every model.

- Bilingual content (PL/EN) in every title, body and SEO field, with a translator that fills the gaps
- Accessibility as a requirement: the panel warns about barriers when the author saves (ATAG 2.0, WCAG 2.2 AA)
- 20 domain modules, 27 switchable features, 32 widget types and 23 page templates
- 642 tests on MySQL in CI, Pint and PHPStan, Docker images for development and production

<p>
  <img src="https://img.shields.io/badge/PHP-8.4-777BB4?logo=php&logoColor=white" alt="PHP 8.4">
  <img src="https://img.shields.io/badge/Laravel-12-FF2D20?logo=laravel&logoColor=white" alt="Laravel 12">
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4">
  <img src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white" alt="Docker">
</p>

### 🤖 Skryba Agent Workflow

A **desktop IDE for AI coding agents** for macOS, Windows and Linux. Claude Code, Codex, Cursor Agent, Gemini CLI and more work side by side in workspaces, tabs and split panes — and the app knows which agent is working, which one waits for a decision and which one has finished.

- Agent states detected from the live screen, notifications for what you are not looking at, sessions restored after a restart
- Tasks from Jira, Redmine, GitHub, GitLab and Linear — start one and an agent gets the branch, the task file and the prompt
- Git worktrees per agent, multi-agent pipelines, commit proposals without AI trailers
- Security, WCAG and SEO audits, an in-app browser shared with agents, Claude and Cursor integrations, Docker monitoring
- A `skryba` CLI and MCP server, so one agent can start, prompt and read another
- Installers for every system and automatic updates

<p align="center">
  <img src="/img/skryba/agent-workflow-dashboard.jpg" width="900" alt="Skryba Agent Workflow — dashboard">
</p>

<p align="center">
  <img src="/img/skryba/agent-workflow-agents.jpg" width="900" alt="Skryba Agent Workflow — agents in split panes">
</p>

### 🧩 agent-skills

A library of **27 portable skills** — task workflow, commits, reviews, backend and end-to-end tests, PageSpeed, security, migrations, Docker, CI and more — with **one installer for seven agents** (Claude Code, Codex, Cursor, Gemini CLI, OpenCode, Windsurf, GitHub Copilot). Scripts condense tool output before an agent reads it: a 455 KB Lighthouse report becomes 754 bytes.

## How they fit together

```
Tracker task ──► Skryba Agent Workflow ──► agents with agent-skills ──► Skryba CMS sites
  (Jira, Redmine…)   (workspaces, worktrees,      (tests, audits, docs,        (multi-site, accessible,
                      pipelines, audits)           commits without trailers)    bilingual)
```

## Status

All Skryba products are in **private beta** while I polish them for a public release. If you want early access or a demo, write to **dawid_olko@outlook.com** or reach me on [LinkedIn](https://www.linkedin.com/in/dawidolko/).

<p align="center"><a href="/">← Back to the profile</a></p>
