import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './create-password.module.scss'

import { Card, Typography } from '@/components/ui'
import Button from '@/components/ui/button/button'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field'

const CreatePasswordSchema = z.object({
  password: z
    .string()
    .trim()
    .nonempty('Enter password')
    .min(8, 'Password must be at least 8 characters'),
})

type FormType = z.infer<typeof CreatePasswordSchema>

type Props = {
  onSubmit: (data: FormType) => void
}

export const CreatePassword = (props: Props) => {
  const { control, handleSubmit } = useForm<FormType>({
    mode: 'onSubmit',
    resolver: zodResolver(CreatePasswordSchema),
    defaultValues: {
      password: '',
    },
  })

  const handleFormSubmit = handleSubmit(props.onSubmit)

  return (
    <>
      <DevTool control={control} />
      <Card className={s.card}>
        <Typography variant="large" as={'h1'} className={s.title}>
          Create new password
        </Typography>
        <form className={s.form} onSubmit={handleFormSubmit}>
          <ControlledTextField
            type={'password'}
            label={'Password'}
            placeholder={'Password'}
            name={'password'}
            control={control}
          />
          <Typography variant="body2" className={s.instructions}>
            Create new password and we will send you further instructions to email
          </Typography>
          <Button className={s.buttonCreatePassword} fullWidth type={'submit'}>
            Create New Password
          </Button>
        </form>
      </Card>
    </>
  )
}
