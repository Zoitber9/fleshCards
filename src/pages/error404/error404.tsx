import { useNavigate } from 'react-router-dom'

import s from './error404.module.scss'

import error404 from '@/assets/images/error404.png'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

const Error404 = () => {
  const navigate = useNavigate()
  const backHomeHandler = () => {
    navigate('/')
  }

  return (
    <div className={s.container}>
      <img className={s.image} src={error404} alt="ERROR 404" />
      <Typography className={s.text} variant={'h3'}>
        Sorry! Page not found!
      </Typography>
      <Button className={s.btn} onClick={backHomeHandler}>
        Back to home page
      </Button>
    </div>
  )
}

export default Error404
