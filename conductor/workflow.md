# Workflow

## Test Coverage
- Required minimum: **80% code coverage** for all non-trivial logic
- Unit test framework: **Vitest**
- Test files live alongside the code they test: `Button.test.tsx` next to `Button.tsx`
- Run tests with: `npx vitest run`
- Coverage report with: `npx vitest run --coverage`

## Commit Strategy
- **Commit after each phase** (a logical group of related tasks), not after every individual task
- Each commit should represent a coherent, working increment — never a half-finished state
- Commit message format: `<type>(<scope>): <short description>`
  - Types: `feat`, `fix`, `style`, `refactor`, `test`, `chore`
  - Example: `feat(hero): add bundle pricing calculator`
- Do not commit generated files, build artifacts, or `.env` files

## Task Summaries
- Record task summaries using **Git Notes** (`git notes add -m "..."`) attached to the phase commit
- The note should summarize what was built, any deviations from the plan, and any open questions

## Phase Completion Verification and Checkpointing Protocol
At the end of each phase:
1. All tasks and sub-tasks in the phase are marked `[x]` in `plan.md`
2. `npx vitest run --coverage` passes with ≥80% coverage
3. `npm run lint` passes with no errors
4. `npm run build` completes without errors
5. A git commit is created for the phase with a Git Note summary
6. The user manually verifies the phase output before the next phase begins

## Development Approach
- Write tests before or alongside implementation (TDD where practical)
- Server Components by default in Next.js App Router; add `"use client"` only when required
- shadcn/ui components are added via CLI, then composed into project-specific components
- No placeholder or "TODO" code committed to a phase commit — either it works or it stays local
