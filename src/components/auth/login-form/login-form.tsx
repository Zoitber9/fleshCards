import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Button from '@/components/ui/button/button.tsx'
import { ControlledCheckbox } from '@/components/ui/controlled/controlled-checkbox/controlled-checkbox.tsx'
import { ControlledTextField } from '@/components/ui/controlled/controlled-text-field/controlled-text-field.tsx'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  rememberMe: z.boolean().optional(),
})

type FormValues = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          placeholder={'Email'}
          name={'email'}
          control={control}
          label={'email'}
          errorMessage={errors.email?.message}
        />
        <ControlledTextField
          placeholder={'Password'}
          name={'password'}
          control={control}
          label={'password'}
          errorMessage={errors.email?.message}
        />
        <ControlledCheckbox name={'rememberMe'} control={control} label={'remember me'} />
        <Button type="submit">Submit</Button>
      </form>
    </>
  )
}
