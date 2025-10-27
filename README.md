# voidenter

[![npm version](https://badge.fury.io/js/voidenter.svg)](https://www.npmjs.com/package/voidenter)
[![npm downloads](https://img.shields.io/npm/dm/voidenter.svg)](https://www.npmjs.com/package/voidenter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A CLI wrapper that prevents accidental Enter key submission when using IME (Input Method Editor).

## What it does

When you press Enter twice in quick succession (within 300ms), only the second Enter is sent to the command. This prevents IME confirmation Enter from accidentally submitting your input in interactive CLI tools.

## Installation

```bash
npm install -g voidenter
```

## Usage

```bash
voidenter -- <command> [args...]
```

### Examples

```bash
voidenter -- claude
voidenter -- node
voidenter -- python
```

## License

MIT