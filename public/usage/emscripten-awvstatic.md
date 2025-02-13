If you don't want to host the WASM binaries by yourself, please follow these instructions.

#### Install packages

```sh
npm i @classcad/api-js@%VERSION%
npm i @buerli.io/classcad
```

#### Use it in TypeScript

```ts
import { CLASSCAD_VERSION, CLASSCAD_VERSION_QUALITY } from '@buerli.io/classcad'
import { init, WASMClient } from '@buerli.io/classcad'

init((id) => {
  const classcadKey = 'Get the classcad key from classcad.ch/user'
  const wasmUrl = `https://awvstatic.com/classcad/download/${CLASSCAD_VERSION_QUALITY}/${CLASSCAD_VERSION}/wasm`
  return new WASMClient(wasmUrl, id, { cclasses: { type: 'appkey', key: classcadKey } })
})
```

#### Examples

// TODO: Add a few links to codesandbox.io projects
