import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ChatProvider from './context/ChatProvider';
import { ChakraProvider } from '@chakra-ui/react';
ReactDOM.render(
  <React.StrictMode>
    <ChatProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ChatProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
