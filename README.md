# nextjs-auth-starter

Next.js 16 + Auth.js v5 + Prisma authentication starter with GitHub/Google OAuth, email/password login, and protected routes.

## Features

- **Auth.js v5** (NextAuth.js) — JWT sessions, multiple providers
- **OAuth** — GitHub and Google sign-in out of the box
- **Credentials** — Email/password registration with bcrypt hashing
- **Prisma ORM** — PostgreSQL adapter with User, Account, Session models
- **Protected routes** — Proxy-based auth guard on `/dashboard`
- **Server Actions** — Form handling with Zod validation
- **React 19** — `useActionState` for form state management
- **Tailwind CSS v4** — Clean, responsive UI

## Quick Start

```bash
git clone https://github.com/omitsu-dev/nextjs-auth-starter.git
cd nextjs-auth-starter
npm install
```

### 1. Set up environment variables

```bash
cp .env.example .env
```

Edit `.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
AUTH_SECRET="generate-with-npx-auth-secret"
AUTH_GITHUB_ID="your-github-oauth-app-id"
AUTH_GITHUB_SECRET="your-github-oauth-app-secret"
AUTH_GOOGLE_ID="your-google-client-id"
AUTH_GOOGLE_SECRET="your-google-client-secret"
```

Generate `AUTH_SECRET`:

```bash
npx auth secret
```

### 2. Set up database

```bash
npx prisma db push
```

### 3. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Landing page
│   ├── (auth)/
│   │   ├── login/page.tsx            # Login page
│   │   └── register/page.tsx         # Registration page
│   ├── dashboard/page.tsx            # Protected dashboard
│   └── api/auth/[...nextauth]/
│       └── route.ts                  # Auth.js API route
├── components/
│   ├── LoginForm.tsx                 # Email/password login form
│   ├── RegisterForm.tsx              # Registration form
│   └── OAuthButtons.tsx              # GitHub/Google OAuth buttons
├── lib/
│   ├── auth.ts                       # Auth.js configuration
│   ├── actions.ts                    # Server Actions (login, register)
│   └── db.ts                         # Prisma client singleton
├── prisma/
│   └── schema.prisma                 # Database schema
└── proxy.ts                         # Route protection (Next.js 16)
```

## Auth Flow

```
Unauthenticated → /login or /register
  ├── OAuth (GitHub/Google) → Auth.js callback → /dashboard
  └── Credentials (email/password) → Server Action → /dashboard

/dashboard (protected)
  └── Requires session → redirects to /login if not authenticated
```

## OAuth Setup

### GitHub

1. Go to [github.com/settings/developers](https://github.com/settings/developers)
2. New OAuth App
3. Set callback URL: `http://localhost:3000/api/auth/callback/github`
4. Copy Client ID and Client Secret to `.env`

### Google

1. Go to [console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)
2. Create OAuth 2.0 Client ID (Web application)
3. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
4. Copy Client ID and Client Secret to `.env`

## Adding a New Provider

1. Import the provider in `lib/auth.ts`:

```typescript
import Discord from "next-auth/providers/discord";
```

2. Add it to the `providers` array:

```typescript
providers: [GitHub, Google, Discord, Credentials({...})],
```

3. Add env variables: `AUTH_DISCORD_ID`, `AUTH_DISCORD_SECRET`

## Tech Stack

| Package | Version |
|---------|---------|
| Next.js | 16.x |
| Auth.js (next-auth) | 5.x beta |
| Prisma | 6.x |
| React | 19.x |
| Tailwind CSS | 4.x |
| Zod | 3.x |
| bcryptjs | 2.x |

## License

[MIT](LICENSE)
