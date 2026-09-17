# AI Development Rules - KrishiSetu

These rules apply to every AI assistant and every human contributor working on this
repository. They exist to keep the codebase safe, deterministic and easy to share
between developers.

## Phase discipline

- The current phase is defined in [PROJECT_STATUS.md](./PROJECT_STATUS.md).
- **If asked to implement a feature that belongs outside the current phase, stop and
  report that the feature belongs to a later phase.** Do not implement it.

## Change control

1. Never modify unrelated modules.
2. Inspect the existing implementation before changing anything.
3. Never rewrite working code without a clear reason.
4. Never delete functionality in order to "fix" a bug.
5. Make focused, minimal commits and changes.
6. Do not modify another developer's feature without explicit instruction.
7. Do not change public API contracts without explicit instruction.
8. Before major changes, perform an impact analysis first.
9. Run the relevant checks (typecheck, lint, tests, build) after modifications.
10. Every feature must have tests where applicable.

## Security

11. Never hardcode secrets, API keys, tokens or passwords.
12. Never commit `.env` files. Document new variables in `.env.example` instead.
13. Never expose backend secrets in the web or mobile applications. Only
    `VITE_*` / `EXPO_PUBLIC_*` values are client-safe, and they must never be secret.

## Data and correctness

14. Do not invent external API responses.
15. Do not invent market prices.
16. Do not calculate financial or business values in the LLM layer.
17. Important calculations must be deterministic backend logic, implemented and
    tested in backend services.

## Architectural facts to respect

18. MongoDB will become the application source of truth (later phase).
19. Clerk will handle authentication (later phase).
20. The blockchain layer is an audit/provenance layer. It is **not** proof of
    physical crop quality, and must never be described as such.
