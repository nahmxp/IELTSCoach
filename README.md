# IELTS Coach - Installation & Running Guide

## How to Install and Run Locally

### 1. Install dependencies
Open your terminal in the project root and run:
```sh
npm install
```

### 2. Set up environment variables
Create a `.env` file in the root directory with your database connection string:
```
DATABASE_URL=your_postgres_or_neon_connection_string
```

### 3. Start the development server
Run:
```sh
PORT=5001 npm run dev
```
The app will be available at [http://localhost:5001](http://localhost:5001).

### 4. Build for production
To build the frontend and backend for production:
```sh
npm run build
```
Then start the server:
```sh
npm run start
```

### 5. Database setup (if needed)
Make sure your PostgreSQL/Neon database is running and migrations are applied. See `drizzle.config.ts` and `shared/schema.ts` for details.

---
...existing code...

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server components:

### Frontend Architecture
- **Primary Framework**: React with TypeScript
- **Build System**: Vite for fast development and optimized production builds
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for 10 Minute School branding
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions using connect-pg-simple

### Legacy Structure
The application contains remnants of a Next.js application in the `app/` directory, suggesting a migration from Next.js to the current Vite + Express setup.

## Key Components

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` contains the database schema definitions
- **Migrations**: Located in the `migrations/` directory (referenced in drizzle.config.ts)
- **Connection**: Uses Neon Database serverless PostgreSQL

### Authentication & Sessions
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple
- **User Schema**: Basic user table with username/password authentication

### Frontend Components
- **UI Components**: Comprehensive Shadcn/ui component library in `client/src/components/ui/`
- **Course Components**: Specialized React components for course display (CourseTitle, CourseDescription, Instructors, etc.)
- **Language Support**: Built-in internationalization with English and Bengali language support

### API Layer
- **External Integration**: Fetches course data from 10 Minute School's API
- **Error Handling**: Comprehensive error handling for API failures
- **Caching**: No-store caching policy for fresh data

## Data Flow

1. **Course Data**: Fetched from external API (`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course`)
2. **User Authentication**: Handled through Express sessions stored in PostgreSQL
3. **Frontend State**: Managed using TanStack Query for server state and React hooks for local state
4. **Language Switching**: Client-side language switching with localStorage persistence

## External Dependencies

### Primary Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **External API**: 10 Minute School course API
- **CDN**: Uses 10 Minute School's CDN for images and assets
- **UI Library**: Radix UI primitives for accessible components

### Development Tools
- **Replit Integration**: Configured with Replit-specific development tools and error handling
- **Hot Module Replacement**: Vite HMR for fast development
- **TypeScript**: Full TypeScript support across the entire stack

## Deployment Strategy

### Development Environment
- **Replit-Optimized**: Configured specifically for Replit development environment
- **Development Server**: Vite dev server with Express backend proxy
- **Environment Variables**: Uses DATABASE_URL for database connection

### Production Build
- **Frontend**: Vite builds to `dist/public/` directory
- **Backend**: ESBuild compiles server to `dist/` directory
- **Static Assets**: Served from Express with frontend build artifacts

### Configuration Files
- **Vite Config**: Custom configuration with Replit-specific plugins
- **TypeScript**: Shared TypeScript configuration across client, server, and shared code
- **Tailwind**: Dual configuration supporting both legacy and modern setups

The application demonstrates a thoughtful migration strategy from Next.js to a more flexible client-server architecture while maintaining backward compatibility and providing a rich, interactive course landing page experience.