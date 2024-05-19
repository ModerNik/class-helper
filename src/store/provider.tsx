'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SnackbarProvider } from 'notistack'
import auth from './authStore'

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [authChecked, setAuthChecked] = useState<boolean>(false)

  // Auth user if posible
  async function checkAuth() {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/token/refresh`, {}, { withCredentials: true })
      localStorage.setItem('accessToken', response.data.access_token)
      localStorage.setItem('tokenType', response.data.token_type)
      auth.setAuth(true)
    } catch (error) {
      console.log(error)
    }
    finally {
      setAuthChecked(true);
    }
  }

  useEffect(() => {
    checkAuth();
  }, [])

  // tanstack query provider
  const queryClient = new QueryClient()

  if (!authChecked)
    return null;
  return (
    <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </SnackbarProvider>
  )
}