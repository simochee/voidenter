# voidenter

[![npm version](https://badge.fury.io/js/voidenter.svg)](https://www.npmjs.com/package/voidenter)
[![npm downloads](https://img.shields.io/npm/dm/voidenter.svg)](https://www.npmjs.com/package/voidenter)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A CLI wrapper that prevents accidental Enter key submission when using IME (Input Method Editor).

## What it does

When you press Enter twice in quick succession (within 300ms), only the second Enter is sent to the command. This prevents IME confirmation Enter from accidentally submitting your input in interactive CLI tools.

## Installation

### Prerequisites

This package uses `node-pty` which requires native compilation. You need to have the following tools installed:

**macOS:**
- Xcode Command Line Tools: `xcode-select --install`

**Linux:**
- Python (v3.6 or later)
- `make`
- C/C++ compiler toolchain (e.g., GCC)
  ```bash
  # Debian/Ubuntu
  sudo apt-get install -y make python3 build-essential

  # Fedora/RHEL/CentOS
  sudo yum install -y make python3 gcc-c++
  ```

**Windows:**
- [windows-build-tools](https://www.npmjs.com/package/windows-build-tools)
  ```bash
  npm install --global windows-build-tools
  ```

### Install

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