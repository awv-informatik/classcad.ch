If you want to host the WASM binaries by yourself, you can download the WASM binaries archive to your local machine and extract it to the public folder of your web application.

[Click here to download](%URL%)

#### Install packages

```sh
npm i @classcad/api-js@%VERSION%
npm i @buerli.io/classcad
```

#### Use it in TypeScript

```ts
import { init, WASMClient } from '@buerli.io/classcad'

init((id) => {
  const classcadKey = 'Get the classcad key from classcad.ch/user'
  const wasmUrl = `/` // The public folder you have extracted the WASM binaries into.
  return new WASMClient(wasmUrl, id, { cclasses: { type: 'appkey', key: classcadKey } })
})
```
