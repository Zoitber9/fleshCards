import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './login-form.module.scss'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field'
import { Typography } from '@/components/ui/typography'

const schema = z.object({
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(3, 'Password must be at least 3 characters')
    .max(30, 'Password must be at least 30 characters'),
  rememberMe: z.boolean().optional(),
  email: z
    .string()
    .trim()
    .email('Invalid email address')
    .nonempty('Enter email')
    .min(3, 'SignInPage must be at least 3 characters'),
})

export type LoginFormType = z.infer<typeof schema>

type Props = {
  forgotHref: string
  signUpHref: string
  onSubmit?: (data: LoginFormType) => void
}

export const LoginForm = ({ onSubmit, forgotHref, signUpHref }: Props) => {
  const { control, handleSubmit } = useForm<LoginFormType>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const handleFormSubmitted = handleSubmit(onSubmit!)

  return (
    <form onSubmit={handleFormSubmitted}>
      <Card className={s.signInContainer}>
        <Typography variant="large">Sign In</Typography>
        <div className={s.inputsContainer}>
          <div className={s.inputs}>
            <ControlledTextField
              placeholder={'Enter you email'}
              label={'Email'}
              name={'email'}
              control={control}
              type="text"
            />
            <ControlledTextField
              placeholder={'Enter you password'}
              label={'Password'}
              name={'password'}
              control={control}
              type="password"
            />
          </div>
          <div className={s.inputCheckboxContainer}>
            <label className={s.checkbox}>
              <ControlledCheckbox label={'Remember me'} name={'rememberMe'} control={control} />
            </label>
          </div>
        </div>
        <Typography className={s.forgotPassword} as={'a'} href={forgotHref} variant="body1">
          Forgot Password?
        </Typography>
        <Button className={s.signInButton} type="submit" fullWidth={true}>
          Sign In
        </Button>
        <Typography variant="caption" color="inherit" className={s.dontHaveAccount}>
          {"Don't have an account?"}
        </Typography>
        <Typography
          as={'a'}
          href={signUpHref}
          variant="link1"
          color="secondary"
          className={s.signUp}
        >
          Sign Up
        </Typography>
      </Card>
    </form>
  )
}
