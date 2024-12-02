import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import "semantic-ui-css/semantic.min.css"
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(

    <QueryClientProvider client={queryClient}>
      <App/>
      <ToastContainer/>
    </QueryClientProvider>
  ,
)
