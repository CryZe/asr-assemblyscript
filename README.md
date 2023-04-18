# asr-assemblyscript

A library for writing auto splitters for LiveSplit One's auto splitting runtime
with AssemblyScript.

## Writing an auto splitter

Create your auto splitter folder and go into it:
```bash
mkdir my-auto-splitter
cd my-auto-splitter
```

Initialize the npm project and install AssemblyScript and this library:
```bash
npm init
npm install --save-dev assemblyscript
npm i --save https://github.com/CryZe/asr-assemblyscript
```

Create an initial AssemblyScript project:
```
npx asinit .
```

Open `package.json` and change the following two scripts to use our custom abort
implementation:
```json
    "asbuild:debug": "asc assembly/index.ts --target debug --use abort=~lib/asr-assemblyscript/runtime/abort",
    "asbuild:release": "asc assembly/index.ts --target release --use abort=~lib/asr-assemblyscript/runtime/abort",
```

Open `assembly/index.ts` and change it to the following:
```ts
import "asr-assemblyscript/runtime";
import * as Timer from "asr-assemblyscript/timer";

export function update(): void {
  Timer.start();
}
```

Run the following to compile your auto splitter:
```bash
npm run asbuild:release
```

Congrats, your auto splitter is now available at `build/release.wasm`.
