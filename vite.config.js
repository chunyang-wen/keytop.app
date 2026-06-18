import { defineConfig } from 'vite';

export default defineConfig({
  base: '/keytop.app/',
  plugins: [
    {
      name: 'add-trailing-slash-dev',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/keytop.app') {
            res.statusCode = 301;
            res.setHeader('Location', '/keytop.app/');
            res.end();
            return;
          }
          next();
        });
      }
    }
  ]
});
