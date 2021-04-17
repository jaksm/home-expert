import fs from 'fs'
import glob from 'glob'

export const getTypeDefs = (callback) => {
  glob(`${__dirname}/**/*.graphql`, (error, paths) => {
    if (error) throw error
    const typeDefs = paths
      .map((filePath) => {
        return fs.readFileSync(filePath).toString('utf-8')
      })
      .join('\n')
    callback(typeDefs)
  })
}
