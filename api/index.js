import server from '../dist/server/server.js';

export default async function handler(req, res) {
  const host = req.headers.host || 'localhost';
  const url = `https://${host}${req.url}`;
  const request = new Request(url, {
    method: req.method,
    headers: req.headers,
    body: ['GET', 'HEAD'].includes(req.method) ? undefined : req,
  });

  const response = await server.fetch(request);

  res.statusCode = response.status;
  for (const [key, value] of response.headers) {
    res.setHeader(key, value);
  }

  if (response.body) {
    const buffer = Buffer.from(await response.arrayBuffer());
    res.end(buffer);
  } else {
    res.end();
  }
}
