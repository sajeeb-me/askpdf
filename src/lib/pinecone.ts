import { Pinecone } from '@pinecone-database/pinecone'

export const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
  // environment: 'us-east1-gcp',
  environment: 'us-east-1',
})

// export const getPineconeClient = async () => {
//   const client = new PineconeClient()

//   await client.init({
//     apiKey: process.env.PINECONE_API_KEY!,
//     environment: 'us-east1-gcp',
//   })

//   return client
// }