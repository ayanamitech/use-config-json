import * as process from 'process';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();

interface AnyObject {
  [name: string]: any
}

function filterProperties(object1: AnyObject, object2: AnyObject): AnyObject {
  const result: AnyObject = {};
  Object.keys(object2).filter(key => key in object1).forEach(key => result[key] = object2[key]);
  return result;
}

/**
  Config module for Node.js services / cli tools

  Written by AyanamiTech @ May 20th, 2022
**/

function readConfig(configFile:string): object | undefined {
  const configPath = fs.existsSync(configFile) ? configFile : path.join(process.cwd(), configFile);
  if (!fs.existsSync(configPath)) {
    console.log(`${configFile} not available on path ${configPath}, will either use environment variables or fallback to default value`);
    return;
  }
  try {
    const config = fs.readFileSync(configPath, { encoding: 'utf8' });
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
  const configObj = filterProperties(defaultConfig, configFile || {});
  const processObj = filterProperties(defaultConfig, process.env);
  const result = Object.assign(Object.assign(defaultConfig, processObj), configObj);
  return result;
}

export function loadConfig(defaultConfig:object, configFile?:string): object {
  const configPath = configFile ? configFile : './config.json';
  const config = loadValue(defaultConfig, readConfig(configPath));
  return config;
}

export function saveConfig(defaultConfig:object, configFile?:string) {
  const configPath = configFile ? configFile : './config.json';
  const config = loadConfig(defaultConfig, configPath);
  fs.writeFileSync(path.join(process.cwd(), configPath), JSON.stringify(config, null, 2));
  console.log(`Exported config as ./${configPath}`);
}

export default loadConfig;
