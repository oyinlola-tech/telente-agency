# Contributing

Thank you for contributing to Telente Technologies. This document defines the expected workflow and quality standards.

## Before You Start
- Ensure `.env` files are configured (frontend and backend).
- Run the apps locally and verify your change in context.
- Keep changes scoped to a single purpose.

## Workflow
1. Create a feature branch.
2. Make changes with clear commits.
3. Add or update tests where applicable.
4. Open a pull request with a concise summary and screenshots (for UI changes).

## Code Quality
- Prefer explicit, readable code over cleverness.
- Avoid `any` in TypeScript. Use proper interfaces and types.
- Handle loading and error states for all API calls.
- Keep components small and cohesive.

## Frontend Guidelines
- Do not hardcode configuration values. Use `import.meta.env`.
- Ensure accessibility (labels, contrast, focus states).
- Ensure responsive layouts for mobile and desktop.
- Keep UI consistent with the established design system.

## Backend Guidelines
- Do not hardcode configuration values. Use `.env` and `backend/config/env.js`.
- Validate and sanitize inputs at the controller level.
- Return consistent error responses.

## Security
- Never commit secrets or credentials.
- Report vulnerabilities privately. See `SECURITY.md`.

## Review Checklist
- Builds and runs locally
- No lint or TypeScript errors
- API responses match frontend expectations
- No hardcoded config values
