import { Link, useNavigate } from 'react-router-dom'

import s from './header.module.scss'

import { Logo, LogoutSvg as Logout } from '@/assets/icons'
import ProfileOutline from '@/assets/icons/profile-outline'
import ProfileAvatarTest from '@/assets/images/profileAvatarTest.png'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dropdown, DropdownItem, DropdownItemWithIcon } from '@/components/ui/dropDown/dropdown'
import { Typography } from '@/components/ui/typography'

type User = {
  avatar?: string
  email: string
  name: string
}

type HeaderProps = {
  isAuth: boolean
  user?: User
  onSignOut?: () => void
}
export const Header = ({ isAuth, user, onSignOut }: HeaderProps) => {
  return (
    <Card className={s.header}>
      <Link to={'/'}>
        <Logo />
      </Link>
      {isAuth && user ? (
        <div className={s.userContainer}>
          <Typography className={s.userName} variant={'body1'}>
            {user.name}
          </Typography>
          <UserMenu
            avatar={user.avatar}
            name={user.name}
            email={user.email}
            onSignOut={onSignOut}
          />
        </div>
      ) : (
        <Link to={'/login'}>
          <Button>Sing in</Button>
        </Link>
      )}
    </Card>
  )
}

const UserMenu = ({ avatar, name, email, onSignOut }: User & Pick<HeaderProps, 'onSignOut'>) => {
  const navigate = useNavigate()

  return (
    <Dropdown
      align={'end'}
      trigger={<img className={s.avatar} src={avatar || ProfileAvatarTest} alt={'avatar'} />}
    >
      <DropdownItem className={s.profileInfo}>
        <img src={avatar || ProfileAvatarTest} alt={'icon'} className={s.image} />
        <div className={s.info}>
          <Typography variant={'caption'}>{name}</Typography>
          <Typography variant={'caption'} className={s.email}>
            {email}
          </Typography>
        </div>
      </DropdownItem>
      <DropdownItemWithIcon
        onSelect={() => navigate('/profile')}
        text={'My Profile'}
        icon={<ProfileOutline />}
      />
      <DropdownItemWithIcon onSelect={onSignOut} text={'Sign out'} icon={<Logout />} />
    </Dropdown>
  )
}
