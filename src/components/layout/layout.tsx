import { Outlet, useNavigate } from 'react-router-dom'
import s from 'src/components/layout/layout.module.scss'

import { Header } from '../../ReactProj/DecksProject/JS-Cards/src/components/header'
import { Loader } from '../../ReactProj/DecksProject/JS-Cards/src/components/ui/loader'
import { ScrollToTopButton } from '../../ReactProj/DecksProject/JS-Cards/src/components/ui/scroll-to-top-button/scroll-to-top-button.tsx'
import {
  useGetAuthUserMeDataQuery,
  useLogoutUserMutation,
} from '../../ReactProj/DecksProject/JS-Cards/src/service'

export const Layout = () => {
  const classNames = {
    container: s.container,
  }

  const { isSuccess: isAuthenticated, isLoading, data } = useGetAuthUserMeDataQuery()

  const [getLogOut] = useLogoutUserMutation()

  const navigate = useNavigate()

  const logOut = () => {
    getLogOut()
    navigate('/greeting')
  }

  // console.log('layout', isAuthenticated, 'isLoading', isLoading, 'data', data)

  return (
    <>
      <div className={classNames.container}>
        {isLoading && <Loader />}
        <Header
          isAuth={isAuthenticated}
          user={data === null ? undefined : data}
          onSignOut={logOut}
        />
        <Outlet />
        <ScrollToTopButton />
      </div>
    </>
  )
}
