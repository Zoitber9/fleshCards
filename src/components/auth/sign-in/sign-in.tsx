import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './sign-in.module.scss'

import { Button, Card, Typography } from '@/components/ui'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox.tsx'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field.tsx'

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email('Invalid email address')
    .nonempty('Enter email')
    .min(3, 'Login must be at least 3 characters'),
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional(),
})

type FormType = z.infer<typeof loginSchema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const SignIn = (props: Props) => {
  const { control, handleSubmit } = useForm<FormType>({
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const handleFormSubmit = handleSubmit(props.onSubmit)

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography variant={'large'}>Sign In</Typography>
        <form className={s.form} onSubmit={handleFormSubmit}>
          <ControlledTextField
            placeholder={'Email'}
            name={'email'}
            control={control}
            label={'Email'}
          />
          <ControlledTextField
            placeholder={'Password'}
            type={'password'}
            name={'password'}
            control={control}
            label={'Password'}
          />
          <ControlledCheckbox name={'rememberMe'} control={control} label={'Remember me'} />
          <Typography className={s.linkRecoverPassword} variant={'body2'} as={'a'} href={'/'}>
            Forgot Password?
          </Typography>
          <Button fullWidth={true} type="submit">
            Sign In
          </Button>
          <Typography className={s.caption} variant="body2">
            Don`t have an account?
          </Typography>
          <Typography variant="link1" as={'a'} href="/sign-up" className={s.linkSignUp}>
            Sign Up
          </Typography>
        </form>
      </Card>
    </>
  )
}
