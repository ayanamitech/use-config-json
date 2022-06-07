import fs from 'fs';
import esbuild from 'rollup-plugin-esbuild';
const license = fs.readFileSync("LICENSE", {encoding: "utf-8"});

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
import pkg from './package.json';
const deps = pkg.dependencies || {};
const peerDeps = pkg.peerDependencies || {};

const banner = [
  "/*!",
  ...license.split("\n").map(o => ` * ${o}`),
  " */",
].join("\n");
const external = Object.keys(deps).concat(Object.keys(peerDeps)).concat(["events"]);

fs.mkdirSync('dist');
fs.mkdirSync('dist/cjs');
fs.mkdirSync('dist/mjs');

// main
const main = {
  input: 'src/index.ts',
  plugins: [
    esbuild({
      include: /\.[jt]sx?$/,
      exclude: /node_modules/,
      minify: true,
      sourceMap: false,
      target: 'node12',
      tsconfig: 'tsconfig.json'
    }),
  ],
  external,
  output: [
    {
      banner,
      file: 'dist/cjs/index.js',
      format: "cjs",
      esModule: false,
      exports: 'named',
    },
    {
      banner,
      file: 'dist/mjs/index.js',
      format: "es",
      exports: 'named',
    },
  ],
};

export default [
  main
];
