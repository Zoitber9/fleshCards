import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/components/ui/checkBox'

type Props<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'rules' | 'defaultValue' | 'disabled'
> &
  Omit<CheckboxProps, 'onChange' | 'checked'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  name,
  shouldUnregister,
  disabled,
  ...rest
}: Props<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    shouldUnregister,
    disabled,
  })

  const handelChange = onChange as (value: boolean) => void

  return (
    <div>
      <Checkbox {...rest} disabled={disabled} onChange={handelChange} checked={value} />
    </div>
  )
}
