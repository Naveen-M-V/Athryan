import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import server from './dist/server/server.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

// Serve static files from dist/client
app.use(express.static(join(__dirname, 'dist/client')))

// All other requests go to the TanStack Start server
app.all('*', async (req, res) => {
  try {
    const response = await server.fetch(
      new Request(
        `http://${req.get('host')}${req.originalUrl}`,
        {
          method: req.method,
          headers: req.headers as HeadersInit,
          body: ['GET', 'HEAD'].includes(req.method) ? undefined : req.body,
        }
      )
    )
    
    // Convert Fetch Response to Express response
    res.status(response.status)
    response.headers.forEach((value, key) => {
      res.setHeader(key, value)
    })
    
    if (response.body) {
      res.send(await response.text())
    } else {
      res.end()
    }
  } catch (error) {
    console.error('Server error:', error)
    res.status(500).send('Internal Server Error')
  }
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})


