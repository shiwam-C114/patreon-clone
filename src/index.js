import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
<<<<<<< HEAD
import { store } from './redux/store';
=======
import { SidebarProvider } from './context/SidebarContext';
>>>>>>> master

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
      <SidebarProvider>
    <App />
      </SidebarProvider>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);
