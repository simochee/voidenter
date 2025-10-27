#!/usr/bin/env node
import os from "node:os";
import consola from "consola";
import pty from "node-pty";
import pkg from "../package.json" with { type: "json" };

const args = process.argv.slice(2);
const separatorIndex = args.indexOf("--");

if (separatorIndex === -1) {
	consola.info(`${pkg.name}@${pkg.version} - ${pkg.description}`);
	consola.log("");
	consola.log("Usage: voidenter -- <command> [args...]");
	process.exit(0);
}

const commandArgs = args.slice(separatorIndex + 1);
const command = commandArgs[0];
const commandRestArgs = commandArgs.slice(1);

if (!command) {
	consola.error("No command specified after --");
	process.exit(1);
}

const ptyProcess = pty.spawn(command, commandRestArgs, {
	name: "xterm-color",
	cols: process.stdout.columns,
	rows: process.stdout.rows,
	cwd: process.cwd(),
	env: process.env,
	useConpty: os.platform() === "win32",
});

process.stdout.on("resize", () => {
	ptyProcess.resize(process.stdout.columns, process.stdout.rows);
});

ptyProcess.onData((data) => process.stdout.write(data));

ptyProcess.onExit(({ exitCode }) => {
	if (process.stdin.isTTY) {
		process.stdin.setRawMode(false);
	}
	process.stdin.pause();
	process.exit(exitCode);
});

if (process.stdin.isTTY) {
	process.stdin.setRawMode(true);
}
process.stdin.resume();
process.stdin.setEncoding("utf8");

let timestamp = Date.now();

process.stdin.on("data", (keyBuffer) => {
	const key = keyBuffer.toString("utf8");

	switch (key) {
		case "\r": {
			const now = Date.now();

			if (now - timestamp < 300) {
				ptyProcess.write(key);
			}

			timestamp = now;

			break;
		}
		case "\x03":
			ptyProcess.kill("SIGINT");
			break;
		default:
			ptyProcess.write(key);
			break;
	}
});
