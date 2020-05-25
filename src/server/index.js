import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../App';
import Html from '../Html';

const express = require('express');

const port = 3000;
const server = express();

server.get('/', (req, res) => {
  const body = renderToString(<App />); 
  const title = 'Hacker News';


  res.send(
    Html({
      body,
      title,
    }),
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
