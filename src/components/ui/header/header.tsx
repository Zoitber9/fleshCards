import { ReactNode } from 'react'

import s from './header.module.scss'

import { Logo, LogoutSvg } from '@/assets/icons'
import { Person } from '@/assets/icons/person'
import { Button } from '@/components/ui/button'
import { Dropdown, DropdownItem, DropdownItemWithIcon } from '@/components/ui/dropDown/dropdown'
import { Avatars as Avatar } from '@/components/ui/userAvatar/avatar'
import defaultAva from 'assets/icons/defaultAva.png'

export type User = {
  name: string
  avatar?: string
  email: string
}

type HeaderProps = {
  user?: User | null
  onLogin: () => void
  onLogout: () => void
  profilePage: () => void
  defualtPage: () => void
  isLogin?: boolean
  children?: ReactNode
}

export const Header = ({
  user,
  onLogin,
  children,
  isLogin,
  onLogout,
  profilePage,
  defualtPage,
}: HeaderProps) => {
  const hasAvatar = user?.avatar || defaultAva

  return (
    <div className={s.header}>
      <Logo className={s.logo} onClick={defualtPage} style={{ cursor: 'pointer' }} />
      {isLogin ? (
        <div className={s.userContainer}>
          <Dropdown
            align={'end'}
            trigger={
              <button className={s.button}>
                <div className={s.userName}>{user?.name}</div>
                <Avatar src={hasAvatar}>{children}</Avatar>
              </button>
            }
          >
            <DropdownItem>
              <DropdownItemWithIcon
                className={s.containerParagraph}
                icon={<Avatar src={hasAvatar}>{children}</Avatar>}
                text={user?.name || ''}
                textForEmail={user?.email}
              />
            </DropdownItem>
            <DropdownItemWithIcon onClick={profilePage} icon={<Person />} text="My ProfilePage" />
            <DropdownItemWithIcon onClick={onLogout} icon={<LogoutSvg />} text="Sign Out" />
          </Dropdown>
        </div>
      ) : (
        <Button variant={'primary'} onClick={onLogin}>
          Sign In
        </Button>
      )}
    </div>
  )
}
