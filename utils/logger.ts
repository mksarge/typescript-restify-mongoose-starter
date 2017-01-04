import * as bunyan from 'bunyan';
import * as stream from 'stream';
import { config } from '../config/env';

interface LoggerSettings {
  name: string;
  streams: Array<Object>;
}

const infoStream = new stream.Writable();
infoStream.writable = true;
infoStream.write = (info: any): boolean => {
  console.log(JSON.parse(info).msg);
  return true;
};

let settings: LoggerSettings = {
  name: config.env,
  streams: [{ level: 'error', path: `error.log` }]
};

if (config.env === 'dev') {
  settings.streams.push({ level: 'info', stream: infoStream });
}

if (config.debug) {
  settings.streams.push({ level: 'trace', stream: infoStream });
  settings.streams.push({ level: 'debug', path: 'debug.log' });
}

const logger = bunyan.createLogger(settings);
console.log(`Logger setting: ${settings.name}`);

export { logger };
