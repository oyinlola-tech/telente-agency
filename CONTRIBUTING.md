# Contributing

Thank you for contributing to Telente Technologies. This document defines the expected workflow, quality standards, and security practices.

## Before You Start
- Ensure frontend and backend `.env` files are configured.
- Run the apps locally and verify your change in context.
- Keep changes scoped to a single purpose.

## Workflow
1. Create a feature branch from the default branch.
2. Make changes with clear, minimal commits.
3. Add or update tests where applicable.
4. Open a pull request with a concise summary and screenshots for UI changes.

## Commit Guidelines
- Use short, descriptive commit subjects.
- Keep unrelated changes in separate commits.
- Avoid committing generated files unless explicitly required.

## Code Quality
- Prefer explicit, readable code over cleverness.
- Avoid `any` in TypeScript. Use proper interfaces and types.
- Handle loading and error states for all API calls.
- Keep components small and cohesive.

## Frontend Guidelines
- Do not hardcode configuration values. Use `import.meta.env`.
- Ensure accessibility: labels, contrast, focus states, and keyboard navigation.
- Ensure responsive layouts for mobile and desktop.
- Keep UI consistent with the established design system.
- Validate and sanitize any content rendered as HTML.

## Backend Guidelines
- Do not hardcode configuration values. Use `.env` and `backend/config/env.js`.
- Validate and sanitize inputs at the controller level.
- Return consistent error responses.
- Use parameterized queries only.
- Ensure file uploads are validated for type and size.

## Security
- Never commit secrets or credentials.
- Report vulnerabilities privately. See `SECURITY.md`.
- Avoid logging sensitive data.

## Review Checklist
- Builds and runs locally
- No lint or TypeScript errors
- API responses match frontend expectations
- No hardcoded config values
- Updated docs for any behavior change
