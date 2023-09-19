import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './forgot-password.module.scss'

import { Button, Card, Typography } from '@/components/ui'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'

const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .email('Invalid email address')
    .nonempty('Enter email')
    .min(3, 'Login must be at least 3 characters'),
})

type FormType = z.infer<typeof ForgotPasswordSchema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const ForgotPassword = (props: Props) => {
  const { control, handleSubmit } = useForm<FormType>({
    mode: 'onSubmit',
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  const handleFormSubmit = handleSubmit(props.onSubmit)

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography variant="large" className={s.title}>
          Forgot your password?
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <div className={s.form}>
            <ControlledTextField placeholder={'Email'} name={'email'} control={control} />
          </div>
          <Typography variant="body2" className={s.instructions}>
            Enter your email address and we will send you further instructions
          </Typography>
          <Button className={s.button} fullWidth type={'submit'}>
            Send Instructions
          </Button>
        </form>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Typography variant="body2" className={s.caption}>
          Did you remember your password?
        </Typography>
        <Typography variant="link1" as={'a'} href="/sign-in" className={s.loginLink}>
          Try logging in
        </Typography>
      </Card>
    </>
  )
}
