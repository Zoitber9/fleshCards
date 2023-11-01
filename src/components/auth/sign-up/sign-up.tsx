import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './sign-up.module.scss'

import { Card, Typography } from '@/components/ui'
import Button from '@/components/ui/button/button.tsx'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field.tsx'

const loginSchema = z
  .object({
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
    passwordConfirmation: z.string().trim().nonempty('Enter password'),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirmation) {
      ctx.addIssue({
        message: 'Passwords do not match',
        code: z.ZodIssueCode.custom,
        path: ['passwordConfirmation'],
      })
    }

    return data
  })

type FormType = z.infer<typeof loginSchema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const SignUp = (props: Props) => {
  const { control, handleSubmit } = useForm<FormType>({
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
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
          <ControlledTextField
            placeholder={'Confirm password'}
            type={'password'}
            name={'passwordConfirmation'}
            control={control}
            label={'Confirm password'}
          />

          <Button fullWidth={true} type="submit">
            Sign In
          </Button>
          <Typography className={s.caption} variant="body2">
            Already have an account?
          </Typography>
          <Typography variant="link1" as={'a'} href="/" className={s.linkSignIn}>
            Sign In
          </Typography>
        </form>
      </Card>
    </>
  )
}
