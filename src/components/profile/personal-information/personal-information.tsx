import s from './personal-information.module.scss'

import { Edit } from '@/assets/icons'
import Logout from '@/assets/icons/logout.tsx'
import { Card, Typography } from '@/components/ui'
import Button from '@/components/ui/button/button.tsx'

type Props = {
  avatar: string
  name: string
  email: string
  onLogout: () => void
  onAvatarChange: (newAvatar: string) => void
  onNameChange: (newName: string) => void
}

const PersonalInformation = ({
  avatar,
  name,
  onAvatarChange,
  onNameChange,
  onLogout,
  email,
}: Props) => {
  const handleAvatarChanged = () => onAvatarChange('new Avatar')
  const handleNameChanged = () => onNameChange('new Name')
  const handleLogout = () => onLogout()

  return (
    <>
      <Card className={s.card}>
        <Typography variant={'large'} className={s.title}>
          Personal Information
        </Typography>
        <div>
          <div className={s.avatarContainer}>
            <div>
              <img className={s.avatarImg} src={avatar} alt="Avatar" />
              <button className={s.editAvatarButton} onChange={handleAvatarChanged}>
                <Edit />
              </button>
            </div>
          </div>
        </div>
        <div className={s.nameWithEditButtonContainer}>
          <Typography variant={'h1'}>{name || 'Your Name'}</Typography>
          <button className={s.editNameButton} onChange={handleNameChanged}>
            <Edit />
          </button>
        </div>
        <Typography variant={'body2'}>{email}</Typography>
        <div className={s.logoutButtonContainer}>
          <Button className={s.logoutButton} variant={'secondary'} onClick={handleLogout}>
            <Logout />
            Logout
          </Button>
        </div>
      </Card>
    </>
  )
}

export default PersonalInformation
