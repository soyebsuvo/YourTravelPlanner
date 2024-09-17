import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './Routes/Router.jsx';

import Context from './Components/Context/Context.jsx';

import './styles/global.css';
import { AuthContextProvider } from './context/AuthContextProvider.jsx';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthContextProvider>
                <Context>
                    <RouterProvider router={router} />
                </Context>
            </AuthContextProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
