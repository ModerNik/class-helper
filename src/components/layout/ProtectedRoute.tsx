'use client'

import authStore from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react"
import { observer } from 'mobx-react-lite';


function ProtectedRoute({
  children
}: {
  children: React.ReactNode
}) {
  const isAuth = authStore.isAuth
  const router = useRouter()

  useEffect(() => {
    if (!isAuth)
      router.push('/login');
  }, [])

  if (!isAuth) {
    return null;
  }

  return <>{children}</>
}

export default observer(ProtectedRoute)