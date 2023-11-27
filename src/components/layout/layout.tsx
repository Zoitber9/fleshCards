import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header/header'

export const Layout = () => {
  // const navigate = useNavigate()
  //
  // const login = () => {
  //   navigate('/login')
  // }
  //
  // const profilePage = () => {
  //   navigate('/profile')
  // }
  // const defaultPage = () => {
  //   navigate('/decks')
  // }

  return (
    <>
      <Header isAuth={true} user={{ name: 'Andrey', email: 'sdas@sxx.sdasd' }} />
      <Outlet />
    </>
  )
}
