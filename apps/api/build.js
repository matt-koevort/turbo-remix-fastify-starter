const { build } = require("esbuild");
const { spawn } = require('child_process')

let server;
const isDev = process.env.NODE_ENV !== "production";
const onRebuild = () => {
  if (isDev) {
    if (server) server.kill("SIGINT");
    server = spawn("node", ["dist/index.js"], { stdio: "inherit" });
  }
}

build({
  entryPoints: ["./index.ts"],
  outdir: "dist",
  bundle: true,
  platform: "node",
  watch: isDev && { onRebuild },
}).finally(onRebuild);
