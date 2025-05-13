import app from './app';

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  console.log('  Health check:', `http://localhost:${port}/health`);
  console.log('  API base URL:', `http://localhost:${port}/api/v1`);
});
