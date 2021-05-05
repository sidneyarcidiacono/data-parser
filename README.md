# 📑 DataParser

[![NPM version](https://img.shields.io/npm/v/@sidarcidiacono/dataparser.svg?style=flat)](https://www.npmjs.com/package/@sidarcidiacono/dataparser) [![NPM downloads](https://img.shields.io/npm/dm/@sidarcidiacono/dataparser.svg?style=flat)](https://npmjs.org/package/@sidarcidiacono/dataparser) [![Build Status](https://img.shields.io/travis/sidarcidiacono/@sidarcidiacono/dataparser.svg?style=flat)](https://travis-ci.org/sidarcidiacono/@sidarcidiacono/dataparser)

An npm module that streams your data for you.

## Features

- Efficiently create a data stream by calling a single function.

- Let DataParser do all the heavy lifting!

## Installation

Install locally for any project:

```zsh
npm install @sidarcidiacono/dataparser --save
```

*Note: --save is the default behavior, and is provided simply for clarity.*

## Usage

DataParser provides the streamData method. To get started, you can require it:

```javascript
const { streamData } = require('dataparser')
```

Then, you just need to provide your:

- filePath as a string
- mode

Example:

```javascript
data = streamData('/path/to/data.txt', 'utf8')
```

And you're done! That's all there is to it!
