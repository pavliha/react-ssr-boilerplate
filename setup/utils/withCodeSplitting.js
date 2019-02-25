import { ChunkExtractor } from '@loadable/server'

export default (jsx) => {
  const extractor = new ChunkExtractor({
    entrypoints: ['app'],
    statsFile: '../build/public/loadable-stats.json',
  })

  return [extractor.collectChunks(jsx), extractor]

}
