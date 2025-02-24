import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
  const isLoggedIn = true // Replace with actual logic to check if user is logged in
    return isLoggedIn ? <Outlet /> :<Navigate to="/login" />
}

export default ProtectedRoute