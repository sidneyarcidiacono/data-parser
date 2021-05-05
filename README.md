# 📑 DataParser

[![NPM version](https://img.shields.io/npm/v/dataparser.svg?style=flat)](https://www.npmjs.com/package/dataparser) [![NPM downloads](https://img.shields.io/npm/dm/dataparser.svg?style=flat)](https://npmjs.org/package/dataparser) [![Build Status](https://img.shields.io/travis/sidarcidiacono/dataparser.svg?style=flat)](https://travis-ci.org/sidarcidiacono/dataparser)

An npm module that streams your data for you.

## Features

- Efficiently create a data stream by calling a single function.

- Let DataParser do all the heavy lifting!

## Installation

Install locally for any project:

```zsh
npm install dataparser --save
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
