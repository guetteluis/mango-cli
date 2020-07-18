mango-cli
=========

Mango Automation CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mango-cli.svg)](https://npmjs.org/package/mango-cli)
[![Downloads/week](https://img.shields.io/npm/dw/mango-cli.svg)](https://npmjs.org/package/mango-cli)
[![License](https://img.shields.io/npm/l/mango-cli.svg)](https://github.com/guetteluis/mango-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mango-cli
$ mango COMMAND
running command...
$ mango (-v|--version|version)
mango-cli/0.0.1 darwin-x64 node-v12.16.3
$ mango --help [COMMAND]
USAGE
  $ mango COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mango config:local-filestore PATH`](#mango-configlocal-filestore-path)
* [`mango help [COMMAND]`](#mango-help-command)
* [`mango watch`](#mango-watch)

## `mango config:local-filestore PATH`

Define local filestore directory location for testing

```
USAGE
  $ mango config:local-filestore PATH

ARGUMENTS
  PATH  Filestore directory path

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ mango config:local-filestore /mango-for-testing/filestore/public
  Local filestore location added
```

_See code: [src/commands/config/local-filestore.ts](https://github.com/guetteluis/mango-cli/blob/v0.0.1/src/commands/config/local-filestore.ts)_

## `mango help [COMMAND]`

display help for mango

```
USAGE
  $ mango help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `mango watch`

Watch for file changes and automatically copy the project into filestore/public directory

```
USAGE
  $ mango watch

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/watch.ts](https://github.com/guetteluis/mango-cli/blob/v0.0.1/src/commands/watch.ts)_
<!-- commandsstop -->
