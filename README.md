# Wht's this?

Polymer meetup#1 Polymer with TypeScript examples.


## Install

```bash
npm install polymer-cli -g
```

## v2

```bash
cd polymer-typescript-example

npm run debug
```

## v3

```bash
cd ver3.0

npm run debug
```

### CAUTION

v3 will crash because typescript not append js extension to imported module.
So you need to add `.js` extentions to an import declaration of `src/ver-3/my-app.js`.

#### BEFORE

```
import './my-app'
```

#### AFTER

```
import './my-app.js'
```

Now working expectedly.