import fs from 'fs'
import glob from 'glob'
import path from 'path'

const schemaPath =
  process.env.GRAPHQL_SCHEMA || path.join(__dirname, 'schema.graphql')
const readFile = (path) => fs.readFileSync(path).toString('utf-8')

export const getTypeDefs = (callback) => {
  glob(`${__dirname}/**/*.graphql`, (error, paths) => {
    if (error) throw error
    const schema = readFile(schemaPath)
    const extensions = paths
      .filter((filePath) => filePath !== schemaPath)
      .map(readFile)
    const typeDefs = [schema, ...extensions].join('\n')
    console.log(typeDefs)
    callback(typeDefs)
  })
}
