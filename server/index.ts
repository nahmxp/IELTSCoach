import { spawn } from "child_process";

// Start Next.js development server directly
const port = parseInt(process.env.PORT || '5001', 10);

console.log(`[server] Starting Next.js on port ${port}`);

// Spawn Next.js process
const nextProcess = spawn('npx', ['next', 'dev', '-p', port.toString(), '--hostname', '0.0.0.0', '--turbo'], {
  stdio: 'inherit',
  cwd: process.cwd()
});

nextProcess.on('error', (error) => {
  console.error(`[server] Failed to start Next.js: ${error}`);
  process.exit(1);
});

nextProcess.on('exit', (code) => {
  console.log(`[server] Next.js process exited with code ${code}`);
  process.exit(code || 0);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('[server] Received SIGTERM, shutting down gracefully');
  nextProcess.kill('SIGTERM');
});

process.on('SIGINT', () => {
  console.log('[server] Received SIGINT, shutting down gracefully');
  nextProcess.kill('SIGINT');
});
