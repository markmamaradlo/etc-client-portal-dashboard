# ETC Client Portal Dashboard

A reference dashboard app inspired by the provided design, built with React on the frontend and PostgreSQL-backed Express API on the backend.

## Features

- Sidebar navigation and top-level filters
- KPI cards and trend summaries
- Attendance tracker section
- Daily running figures for the selected date
- Historical performance trends
- PostgreSQL data layer using a seeded dashboard snapshot

## Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: PostgreSQL

## Prerequisites

- Node.js 18+
- Docker Desktop or a local PostgreSQL instance
- npm

## Local setup

1. Start PostgreSQL:

   ```bash
   docker-compose up -d postgres
   ```

2. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

3. Install dependencies from the repository root:

   ```bash
   npm install
   ```

4. Start the app:

   ```bash
   npm run dev
   ```

5. Open the frontend in your browser:

   http://localhost:5173

The backend API will be available at:

http://localhost:5000/api/metrics

## Production build

```bash
npm run build
npm run start
```
