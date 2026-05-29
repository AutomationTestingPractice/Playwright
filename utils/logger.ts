import fs from 'fs';
import path from 'path';
import { Page } from '@playwright/test';

export function attachLogger(page: Page, testName: string) {

  const logsDir = path.join(process.cwd(), 'logs');

  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }

  const sanitizedTestName = testName.replace(/\s+/g, '_');

  const logFile = path.join(
    logsDir,
    `${sanitizedTestName}.log`
  );

  const writeLog = (message: string) => {
    fs.appendFileSync(
      logFile,
      `${new Date().toISOString()} - ${message}\n`
    );
  };

  writeLog('===== TEST STARTED =====');

  page.on('console', msg => {
    writeLog(`BROWSER: ${msg.type()} - ${msg.text()}`);
  });

  page.on('request', request => {
    writeLog(`REQUEST: ${request.method()} ${request.url()}`);
  });

  page.on('response', response => {
    writeLog(`RESPONSE: ${response.status()} ${response.url()}`);
  });

  page.on('requestfailed', request => {
    writeLog(`FAILED: ${request.url()}`);
  });

  return writeLog;
}