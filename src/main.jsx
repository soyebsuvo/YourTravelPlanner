import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router.jsx'
import Context from './Components/Context/Context.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraBaseProvider } from '@chakra-ui/react'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider disableGlobalStyle >
    <QueryClientProvider client={queryClient}>
        <Context>
          <RouterProvider router={router} />
        </Context>
    </QueryClientProvider>
    </ChakraBaseProvider>
  </React.StrictMode>,
)
