// src/lib/env.ts
import { z } from 'zod';

// Define your environment schema
const envSchema = z.object({
  // Core
  NODE_ENV: z.enum(['development', 'production', 'test']),

  // Database
  // DATABASE_URL: z.string().url('Invalid database URL'),

  // Authentication (Clerk)
  // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1, 'Clerk publishable key is required'),
  // CLERK_SECRET_KEY: z.string().min(1, 'Clerk secret key is required'),

  // Optional with defaults
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),

  // Add more as needed
  // STRIPE_SECRET_KEY: z.string().optional(),
  // SMTP_HOST: z.string().optional(),
});

// Validate and export environment variables
function validateEnv() {
  try {
    const env = envSchema.parse(process.env);
    console.log('✅ Environment validation passed');
    return env;
  } catch (error) {
    console.error('❌ Environment validation failed:');
    if (error instanceof z.ZodError) {
      error.issues.forEach(issue => {
        console.error(`  • ${issue.path.join('.')}: ${issue.message}`);
      });
    }
    console.error('\nPlease check your .env file and try again.\n');
    process.exit(1);
  }
}

// Export validated environment variables
export const env = validateEnv();

// Export the schema type for TypeScript
export type Env = z.infer<typeof envSchema>;
