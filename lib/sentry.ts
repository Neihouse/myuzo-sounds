import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

const SENTRY_DSN = process.env.SENTRY_DSN || '';

Sentry.init({
  dsn: SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

export default Sentry;
