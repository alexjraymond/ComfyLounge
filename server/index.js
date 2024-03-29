require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const getCatData = require('./dynamo-get-item');

const app = express();

app.use(staticMiddleware);

app.get('/api/cats', async (req, res) => {
  const imgUrl = await getCatData.getCatData();
  res.send({ imgUrl });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
