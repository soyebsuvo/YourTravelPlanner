import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './Routes/Router.jsx';

import Context from './Components/Context/Context.jsx';

import './index.css';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Context>
                <RouterProvider router={router} />
            </Context>
        </QueryClientProvider>
    </React.StrictMode>,
)
