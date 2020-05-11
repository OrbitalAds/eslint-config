# [@orbitalads/eslint-config](https://github.com/OrbitalAds/eslint-config) &middot;

ESLint configuration for React+TypeScript projects.

## Usage

```
npm i --save-dev git+ssh://git@github.com:OrbitalAds/eslint-config.git
```

or if you want to specify a version

```
npm i --save-dev git+ssh://git@github.com:OrbitalAds/eslint-config.git#<version>
```

Then create a _.eslintrc_ file on the root of your project and add:

```json
{
  "extends": [
    "@orbitalads/eslint-config"
  ]
}
```