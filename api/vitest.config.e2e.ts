import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    root: './',
    include: ['**/*.e2e-spec.ts'],
    env: {
      // The e2e suite registers many users per run from a single IP; keep the
      // real throttling behavior (don't disable it) but raise the ceiling so
      // normal test traffic doesn't trip it. A dedicated rate-limit e2e spec
      // covers the actual 429 behavior with its own tight, local override.
      AUTH_THROTTLE_LIMIT: '1000',
    },
  },
});
