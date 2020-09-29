# [@orbitalads/eslint-config](https://github.com/OrbitalAds/eslint-config) &middot;

ESLint configuration for React+TypeScript projects.

## Usage

```
npm i --save-dev @orbitalads/eslint-config
```

Please make sure to be logged on the OA's Gemfury registry:

```
npm config set registry https://npm.fury.io/orbitalads/
npm login
```

Then create a _.eslintrc_ file on the root of your project and add:

```json
{
  "extends": [
    "@orbitalads/eslint-config"
  ]
}
```
