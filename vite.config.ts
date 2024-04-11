import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // resolve: {
  //   alias: {
  //     api: '/src/shared/api/',
  //     assets: '/src/shared/assets/',
  //     components: '/src/shared/components/',
  //     constants: '/src/shared/constants/',
  //     layout: '/src/shared/layout/',
  //     hooks: '/src/shared/hooks/',
  //     util: '/src/shared/util/',
  //     modules: '/src/shared/modules/',
  //     queries: '/src/shared/queries/',
  //     types: '/src/shared/types/',
  //     styles: '/src/styles/',
  //   },
  // },
});
