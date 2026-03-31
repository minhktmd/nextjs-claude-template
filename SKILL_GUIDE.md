# Skills Setup Guide

Run these commands once after cloning the template to install community skills that are not bundled in the repo.

---

## Project skills (already in repo)

These skills are committed to `skills/` and available immediately — no installation needed.

| Skill | When to use |
|-------|-------------|
| `const-map-pattern` | Creating a const map, derived type, or options array |
| `context-pattern` | Creating a new React Context |
| `service-pattern` | Creating a service function, query hook, or mutation |
| `zustand-pattern` | Creating a Zustand store |
| `form-pattern` | Creating a form with React Hook Form + Zod |
| `error-handling` | Implementing error boundaries, toast notifications, or logger |

---

## Community skills (install once per project)

```bash
# Required
npx skills add vercel-labs/agent-skills --skill react-best-practices -a claude-code

# Recommended
npx skills add vercel-labs/agent-skills --skill react-composition-patterns -a claude-code
```

Installed skills are placed at `.claude/skills/` automatically. Commit this directory so the whole team shares the same setup.

---

## Important: barrel import rule

`react-best-practices` includes a rule against barrel files. In this template, `features/*/index.ts` and `domains/*/index.ts` are **public API boundaries**, not barrel anti-patterns. The anti-pattern to avoid is re-exporting everything from `shared/` root, or importing icon/component libraries through their index.