import s from './check-email.module.scss'

import { CheckEmailSvg } from '@/assets/icons/checkEmail'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

export type CheckEmailType = {
  email: string
  backToLogin: () => void
}

export const CheckEmail = ({ email, backToLogin }: CheckEmailType) => {
  const classNames = {
    root: s.root,
    title: s.title,
    img: s.img,
    email: s.email,
    button: s.button,
  }

  return (
    <Card className={classNames.root}>
      <Typography variant="large" className={classNames.title}>
        Check Email
      </Typography>
      <CheckEmailSvg className={classNames.img} />
      <Typography variant="body2" color="inherit" className={classNames.email}>
        We’ve sent an Email with instructions to <br />
        {email}
      </Typography>
      <Button
        onClick={backToLogin}
        as="a"
        variant="primary"
        fullWidth
        className={classNames.button}
      >
        Back to Sign In
      </Button>
    </Card>
  )
}
