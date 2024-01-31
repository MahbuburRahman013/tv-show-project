import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routers/Routes';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'
import  { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster/>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
