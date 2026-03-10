# Telente Backend (Node.js + MySQL)

Backend API for Telente Technologies. Provides authentication, content management, contact handling, settings, and media uploads for the public website and admin panel.

## Production URLs
- API: https://www.api.telente.site/api
- Uploads: https://www.api.telente.site/uploads

## Requirements
- Node.js 18+
- MySQL 8+

## Setup
1. Configure environment variables:
   - Copy `backend/.env.example` to `backend/.env`.
   - Fill in all required values (no defaults are used).

2. Install dependencies:
```
npm install
```

3. Start the API (auto-creates database tables and seeds admin if missing):
```
npm run dev
```

## API Base
https://www.api.telente.site/api

## Auth Flow (Email + OTP)
1. `POST /api/auth/login` with `{ "email": "...", "password": "..." }`
2. `POST /api/auth/verify-otp` with `{ "otpId": "...", "code": "123456" }`
3. `POST /api/auth/resend-otp` with `{ "otpId": "..." }`
4. `GET /api/auth/verify` to validate the JWT

## Content Endpoints
Services:
- `GET /api/services`
- `POST /api/services`
- `PUT /api/services/:id`
- `DELETE /api/services/:id`

Projects:
- `GET /api/projects`
- `POST /api/projects`
- `PUT /api/projects/:id`
- `DELETE /api/projects/:id`

Blogs:
- `GET /api/blogs`
- `POST /api/blogs`
- `PUT /api/blogs/:id`
- `DELETE /api/blogs/:id`

Team:
- `GET /api/team`
- `POST /api/team`
- `PUT /api/team/:id`
- `DELETE /api/team/:id`

Testimonials:
- `GET /api/testimonials`
- `POST /api/testimonials`
- `PUT /api/testimonials/:id`
- `DELETE /api/testimonials/:id`

Careers:
- `GET /api/careers`
- `POST /api/careers`
- `PUT /api/careers/:id`
- `DELETE /api/careers/:id`

Contact:
- `POST /api/contact`
- `GET /api/contact`
- `DELETE /api/contact/:id`

Settings:
- `GET /api/settings`
- `PUT /api/settings`

Uploads:
- `POST /api/uploads/images`

## Environment Variables
All values are required and must be set in `backend/.env`:
- `PORT`, `NODE_ENV`
- `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_POOL_SIZE`
- `JWT_SECRET`, `JWT_EXPIRES_IN`
- `OTP_TTL_MINUTES`
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`
- `SMTP_TO` (optional)
- `CONTACT_TO_EMAIL`
- `DEFAULT_ADMIN_EMAIL`, `DEFAULT_ADMIN_USER`, `DEFAULT_ADMIN_PASS`
- `CORS_ORIGINS`

## Storage Notes
Uploads are stored on disk under `backend/uploads` and served at `/uploads`.
In production, use durable storage or a shared volume if running multiple API instances.

## Notes
- SMTP is required for OTP delivery.
- All write routes require a valid JWT.
- Rate limiting is enabled globally.
