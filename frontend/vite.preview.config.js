export default {
  preview: {
    allowedHosts: true,
    proxy: {
      '/api/ai': {
        target: 'http://ai-service:3005',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/ai/, ''),
      },
      '/api': {
        target: 'http://backend:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
};
