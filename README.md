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
mango-cli/0.0.0 darwin-x64 node-v12.16.3
$ mango --help [COMMAND]
USAGE
  $ mango COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mango config:local-filestore PATH`](#mango-configlocal-filestore-path)
* [`mango hello [FILE]`](#mango-hello-file)
* [`mango help [COMMAND]`](#mango-help-command)
* [`mango watch [FILE]`](#mango-watch-file)

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

_See code: [src/commands/config/local-filestore.ts](https://github.com/guetteluis/mango-cli/blob/v0.0.0/src/commands/config/local-filestore.ts)_

## `mango hello [FILE]`

describe the command here

```
USAGE
  $ mango hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ mango hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/guetteluis/mango-cli/blob/v0.0.0/src/commands/hello.ts)_

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

## `mango watch [FILE]`

describe the command here

```
USAGE
  $ mango watch [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/watch.ts](https://github.com/guetteluis/mango-cli/blob/v0.0.0/src/commands/watch.ts)_
<!-- commandsstop -->
