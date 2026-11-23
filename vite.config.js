import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables for local development
  const env = loadEnv(mode, process.cwd(), '');
  for (const key of ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_RECEIVER']) {
    if (env[key]) {
      process.env[key] = env[key];
    }
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'vercel-api-dev-server',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (req, res, next) => {
            if (req.method === 'POST' || req.method === 'OPTIONS') {
              try {
                let rawBody = '';
                for await (const chunk of req) {
                  rawBody += chunk;
                }

                let parsedBody = {};
                if (rawBody) {
                  try {
                    parsedBody = JSON.parse(rawBody);
                  } catch {
                    parsedBody = rawBody;
                  }
                }

                req.body = parsedBody;

                if (!res.status) {
                  res.status = (code) => {
                    res.statusCode = code;
                    return res;
                  };
                }
                if (!res.json) {
                  res.json = (data) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data));
                    return res;
                  };
                }

                const { default: handler } = await import('./api/contact.js');
                await handler(req, res);
              } catch (err) {
                console.error('[Vite Local Dev API Handler Error]', err);
                if (!res.headersSent) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(
                    JSON.stringify({
                      success: false,
                      message: 'Internal local API error: ' + err.message
                    })
                  );
                }
              }
            } else {
              next();
            }
          });
        }
      }
    ]
  };
});
