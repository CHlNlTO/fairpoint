// src/lib/logger.ts
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogContext {
  userId?: string;
  action?: string;
  requestId?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

class Logger {
  private isDev = process.env.NODE_ENV === 'development';
  private logLevel: LogLevel = (process.env.LOG_LEVEL as LogLevel) || 'info';
  private service: string;

  constructor(service: string = 'app') {
    this.service = service;
  }

  private shouldLog(level: LogLevel): boolean {
    const levels = ['debug', 'info', 'warn', 'error'];
    return levels.indexOf(level) >= levels.indexOf(this.logLevel);
  }

  private formatMessage(
    level: LogLevel,
    message: string,
    context?: LogContext
  ) {
    const timestamp = new Date().toISOString();

    if (this.isDev) {
      // Human-readable format for development
      const contextStr = context ? ` | ${JSON.stringify(context)}` : '';
      return `[${timestamp}] [${this.service.toUpperCase()}] ${level.toUpperCase()}: ${message}${contextStr}`;
    } else {
      // Structured JSON for production
      return JSON.stringify({
        timestamp,
        level,
        service: this.service,
        message,
        ...context,
      });
    }
  }

  private log(level: LogLevel, message: string, context?: LogContext) {
    if (!this.shouldLog(level)) return;

    const formatted = this.formatMessage(level, message, context);

    switch (level) {
      case 'debug':
      case 'info':
        console.log(formatted);
        break;
      case 'warn':
        console.warn(formatted);
        break;
      case 'error':
        console.error(formatted);
        break;
    }
  }

  debug(message: string, context?: LogContext) {
    this.log('debug', message, context);
  }

  info(message: string, context?: LogContext) {
    this.log('info', message, context);
  }

  warn(message: string, context?: LogContext) {
    this.log('warn', message, context);
  }

  error(message: string, context?: LogContext) {
    this.log('error', message, context);
  }

  // Convenience method for errors with Error objects
  errorWithStack(message: string, error: Error, context?: LogContext) {
    this.error(message, {
      ...context,
      error: error.message,
      stack: this.isDev ? error.stack : undefined,
    });
  }
}

// Factory function to create service-specific loggers
export function createLogger(service: string): Logger {
  return new Logger(service);
}

// Default app logger
export const logger = new Logger('app');

// Export types for use in other files
export type { LogContext };
