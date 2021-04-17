## COMPLETE GRAPHQL-CODEGEN + GRAND STACK SETUP

This document describes how to fully setup:

- [x] code generation of apollo react query hooks + types
- [x] apollo graphql extension with intellisense

---

### 1. Setup `graphql-codegen`

Add dependencies inside `./api` folder

Using npm

```shell
npm i graphql
```

```shell
npm i --save-dev @graphql-codegen/cli
```

Using yarn

```shell
yarn add graphql
```

```shell
yarn add --D @graphql-codegen/cli
```

Run graphql codegen wizard

Using yarn

```shell
yarn graphql-codegen init
```

Using npm

```shell
npx graphql-codegen init
```

**Answer wizard questions like this**

- > What type of application are you building? `Application built with React`
- > Where is your schema?: (path or url) `http://localhost:4001`
- > Where are your operations and fragments?: `../web-react-ts/**/*.graphql`
- > Pick plugins: `TypeScript`, `TypescriptOperations`, `Typescript React Apollo`
- > Where to write the output: `../web-react-ts/src/API.ts`
- > Do you want to generate an introspection file? `Yes`
- > How to name the config file? `codegen.yml`
- > What script in package.json should run the codegen? `codegen`

This should add all needed dependencies, but in case something goes wrong you can always use these commands to install the right ones.

Add dependencies inside `./api` folder

Using npm

```shell
npm i graphql
```

```shell
npm i --save-dev @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @graphql-codegen/introspection
```

Using yarn

```shell
yarn add graphql
```

```shell
yarn add --D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo @graphql-codegen/introspection
```

Add additional config to `codegen.yml`

```yml
overwrite: true
schema: 'http://localhost:4001/graphql'
documents: '../web-react-ts/**/*.graphql'
generates:
  ../web-react-ts/src/API.ts:
    plugins:
      - 'typescript'
      - 'typescript-operations'
      - 'typescript-react-apollo'
    config:
      avoidOptionals: true
      flattenGeneratedTypes: true
  ./graphql.schema.json:
    plugins:
      - 'introspection'
    config:
      schemaDescription: true
      minify: true
```

To test if everything is configured properly try creating some dummy `.graphql` files (you can copy & paste queries from components) inside `./web-react-ts`, make sure that api is running, and inside `./api` folder run specified codegen command:

```shell
npm run codegen
```

or

```shell
yarn codegen
```

You should be able to see `/web-react-ts/src/API.ts` file with all types and hooks auto-generated.

### 1. Setup Apollo GraphQL extension (VSCode)

This extension makes VSCode TS Server **really slow** so think about do you really need it?
Basically it gives you great autocomplete + syntax highlighting + comments when writing `.graphql` files but all of this is present in graphiql at `http://localhost:4001/graphql` or Apollo Client Devtools extension so installing it might be an overkill.

All we need to do here is to create `apollo.config.js` file inside project root folder and paste this config in:

```js
module.exports = {
  client: {
    service: {
      name: 'home-expert', // name of your app
      localSchemaFile: './api/graphql.schema.json', // path to generated introspection schema
    },
    includes: ['./web-react-ts/**/*.{tsx,graphql}'], // apollo graphql extension makes TS server slow af, this is a workaround
  },
}
```

You will maybe have to restart VSCode to see the extension load config properly. After restarting, try typing something in any `.graphql` file!
