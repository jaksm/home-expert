module.exports = {
  client: {
    service: {
      name: 'home-expert',
      localSchemaFile: './api/graphql.schema.json',
    },
    includes: ['./web-react-ts/**/*.{tsx,graphql}'],
  },
}
