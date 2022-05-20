import * as process from 'node:process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as dotenv from 'dotenv';
dotenv.config();

/**
  Config module for Node.js services / cli tools

  Written by AyanamiTech @ May 20th, 2022
**/

function readConfig(configFile:string): object | undefined {
  const configPath = path.join(process.cwd(), configFile);
  if (!fs.existsSync(configPath)) {
    console.log(`${configFile} not available on path ${configPath}, will either use environment variables or fallback to default value`);
    return;
  }
  try {
    const config = fs.readFileSync(path.join(process.cwd(), configFile), { encoding: 'utf8' });
    return JSON.parse(config);
  } catch (e) {
    // Catch error while parsing JSON from string (Since filesystem parses as string by default)
    console.log(`Invalid ${configFile} file detected, will fallback to environment variable or use default value'`);
    return;
  }
}

/**
  1. Will use value from config.json file first
  2. Will fallback to environment value if possible
  3. Will use default value as a final fallback
**/
function loadValue(defaultConfig:object, configFile?:object): object {
  const getKeyValue = (key: string) => (obj: Record<string, any>) => obj[key];
  const keyValue = Object.keys(defaultConfig).map((k:string) => {
    const value = configFile ? getKeyValue(k)(configFile) : getKeyValue(k)(process.env) ? getKeyValue(k)(process.env) : getKeyValue(k)(defaultConfig);
    return {
      key: k,
      value
    };
  });
  return keyValue.reduce<Record<string, any>>((acc, {key,value}) => (acc[key] = value, acc), {});
}

export default function loadConfig(defaultConfig:object, configFile?:string): object {
  const configPath = configFile ? configFile : './config.json';
  const config = loadValue(defaultConfig, readConfig(configPath));
  return config;
}
