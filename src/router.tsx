import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Layout } from '@/components/layout/layout'
import Error404 from '@/pages/error404/error404'

const publicRoutes: RouteObject[] = [
  {
    path: '/sign-in',
    element: <div>sign in</div>,
  },
  {
    path: '/sign-up',
    element: <div>sign up</div>,
  },
  {
    path: '/check-email',
    element: <div>check email</div>,
  },
  {
    path: '/create-password',
    element: <div>create password</div>,
  },
  {
    path: '/forgot-password',
    element: <div>forgot password</div>,
  },
  { path: '*', element: <Error404 /> },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/personal-information',
    element: <div>personal-information</div>,
  },
  {
    path: '/cards',
    element: <div>decks</div>,
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
    ],
  },
])

function PrivateRoutes() {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />
}

export const Router = () => {
  return <RouterProvider router={router} />
}
