# nostr-build
[![NPM](https://img.shields.io/npm/v/lnurl-zap.svg)](https://www.npmjs.com/package/lnurl-zap)

Generate LNURLs for Nostr events.

## Installation

Install the package with:

```bash
npm i lnurl-zap
# or
yarn add lnurl-zap
```

## Usage

### encodeLnurl

Allows you to create LNULs for Nostr events.

```
id: string; // Any Nostr ID e.g. note ID, npub, nevent, etc.
lnurlZapServerBaseUrl?: string // Base URL for LNURL server endpoint that broadcasts anonymous zaps when LNURLs are paid. Defaults to https://lnurlzap.com. 

@returns string // e.g. LNURL1DP68GURN8GHJ7MRWW4EXC7NPWQH8VETJVDJKCTNPWPCZ7CTSDYHH5CTS9AH8QATZX9M8QWRXV33HJET2VS68QUT209EX56EEWDNH5D3CWE6KSUFHWPUHVMN6DVUX5VR9DPKXC6NKWANHQWRWXEJHZUMJDEC8XACJW3JE6
```

Example:

```js
import { encodeLnurl } from "lnurl-zap";

console.log(encodeLnurl('npub1vp8fdcyejd4pqjyrjk9sgz68vuhq7pyvnzk8j0ehlljvwgp8n6eqsrnpsw'))
```

