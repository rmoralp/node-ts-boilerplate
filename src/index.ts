import {createServer} from 'node:http'

const requestListener = (req, res): void => {
  res.writeHead(200)
  res.end('Hello, World! 3')
}

const server = createServer(requestListener)

server.listen(3000, function (): void {
  console.log(`Server is running on http://localhost:${server.address().port}`)
})
