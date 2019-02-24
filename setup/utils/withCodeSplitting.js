import { ChunkExtractor } from '@loadable/server'
import path from 'path'

export default (jsx) => {
  const extractor = new ChunkExtractor({
    entrypoints: ['app'],
    statsFile: path.resolve(__dirname, '../build/public/loadable-stats.json'),
  })

  return [extractor.collectChunks(jsx), extractor]

}
