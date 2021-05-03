# rollup-plugin-dna
Rollup-plugin to load DNA files as modules returning a string with base64 encoded binary data.

## Usage
```javascript
import dna from './hc-dna/languages.dna'

export const DNA = Buffer.from(dna, 'base64')
export const DNA_NICK = "languages"
```

## Installation
```
npm i @perspect3vism/rollup-plugin-dna -D
```

## Config
In your `rollup.config.js`:

```javascript
import dna from '@perspect3vism/rollup-plugin-dna`

export default {
    ...
    plugins: [
        dna()
    ]
}
```