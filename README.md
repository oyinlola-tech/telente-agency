# Telente Technologies

Enterprise-grade website and admin platform for Telente Technologies. This repository includes a modern React/Vite frontend for the public site and a Node.js/Express + MySQL backend that powers content and admin workflows.

Maintainer: Oluwayemi Oyinlola Michael  
Portfolio: oyinlola.site

## SEO Summary
Telente Technologies is a software development agency in Okitipupa, Nigeria, specializing in web development, mobile app development, UI/UX design, and cloud solutions. This project delivers an SEO-ready website and a secure admin portal to manage services, projects, blogs, team profiles, careers, testimonials, and contact submissions.

Keywords: Telente Technologies, software development agency, web development, mobile app development, UI/UX design, cloud solutions, Nigeria, Okitipupa, digital agency

## Project Goals
- Provide a high-performance marketing website for Telente Technologies.
- Offer a secure admin panel for managing dynamic content.
- Enforce configuration through environment variables for secure deployments.
- Keep the system easy to run locally and deploy to production.

## Architecture Overview
**Frontend**
- Vite + React + TypeScript + Tailwind CSS
- Public pages: Home, Services, Projects, About, Blogs, Careers, Contact
- Admin pages: Login (email + OTP), OTP verification, Admin dashboard
- All dynamic lists are fetched from the backend API

**Backend**
- Node.js + Express
- MySQL persistence with structured tables for content entities
- Auth with email + OTP
- CORS and rate-limiting enabled

## Key Features
- **Admin Content Management** for services, projects, blogs, team, testimonials, and careers
- **OTP-based Admin Login** with email delivery
- **Settings API** for site-level configuration
- **Contact Submissions** storage and retrieval
- **SEO-ready HTML head** with configurable meta tags via `.env`
- **Environment-First Configuration** with explicit required variables

## Repository Structure
```
/
  src/                 Frontend app
  backend/             Backend API
  public/              Static assets
  index.html           SEO meta tags
  .env.example         Frontend env template
```

## Environment Configuration
Frontend `.env` (see `.env.example`):
- `VITE_API_URL`
- `VITE_COMPANY_NAME`
- `VITE_PORTFOLIO_URL`
- `VITE_SITE_TITLE`
- `VITE_SITE_DESCRIPTION`
- `VITE_SITE_KEYWORDS`
- `VITE_SITE_AUTHOR`
- `VITE_SITE_URL`
- `VITE_OG_IMAGE_URL`
- `VITE_SITE_LOCALE`
- `VITE_TWITTER_HANDLE`
- `VITE_SITE_ROBOTS`

Backend `.env` (see `backend/.env.example`):
- `PORT`, `NODE_ENV`
- Database: `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_POOL_SIZE`
- Auth: `JWT_SECRET`, `JWT_EXPIRES_IN`, `OTP_TTL_MINUTES`
- SMTP: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `SMTP_TO`
- Contact: `CONTACT_TO_EMAIL`
- Admin seed: `DEFAULT_ADMIN_EMAIL`, `DEFAULT_ADMIN_USER`, `DEFAULT_ADMIN_PASS`
- `CORS_ORIGINS`

## Local Development
Frontend:
```
npm install
npm run dev
```

Backend:
```
cd backend
npm install
npm run seed
npm run dev
```

## API Summary
Base URL: `http://localhost:3000/api`

Auth:
- `POST /auth/login`
- `POST /auth/verify-otp`
- `POST /auth/resend-otp`
- `GET /auth/verify`

Content:
- `/services`
- `/projects`
- `/blogs`
- `/team`
- `/testimonials`
- `/careers`
- `/contact`
- `/settings`

## Data Model (High-Level)
- **services**: title, description, icon, features
- **projects**: title, client, category, description, technologies, image, testimonial, results
- **blogs**: title, excerpt, content, author, author_role, date, category, read_time, image, tags
- **team**: name, role, bio, image, linkedin, twitter
- **testimonials**: name, role, company, content, rating, image
- **careers**: title, department, location, type, description, requirements, responsibilities
- **contact_submissions**: name, email, phone, subject, message
- **settings**: JSON blob

## Security
See `SECURITY.md` for vulnerability reporting and response guidelines.

## Code of Conduct
See `CODE_OF_CONDUCT.md` for community standards.

## Contributing
See `CONTRIBUTING.md` for workflow, reviews, and quality standards.

## License
This project is proprietary and not free to use. See `LICENSE`.
