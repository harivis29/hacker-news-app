import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../App';
import Html from '../Html';

const port = 3001;
const server = express();


// Creating a single index route to server our React application from.
server.get('/', (req, res) => {
  /**
   * This is where all the magic happens with Styled Components and
   * rendering our React application to string so we can insert it
   * into our HTML template to send to the client.
   */

  const body = renderToString(<App />); // <-- collecting styles
  const title = 'Server side Rendering with Styled Components';


  res.send(
    Html({
      body,
      title,
    }),
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
