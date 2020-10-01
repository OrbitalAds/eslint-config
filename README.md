# [@orbitalads/eslint-config](https://github.com/OrbitalAds/eslint-config) &middot;

ESLint configuration for React+TypeScript projects.

## Usage
```
npm i --save-dev @orbitalads/eslint-config
```

Make sure to have the Gemfury registry configured on your `~.npmrc`:
```
always-auth=true
registry=https://npm.fury.io/orbitalads/
//npm.fury.io/orbitalads/:_authToken=GEMFURY_TOKEN
```

Then create a _.eslintrc_ file on the root of your project and add:

```json
{
  "extends": [
    "@orbitalads/eslint-config"
  ]
}
```
