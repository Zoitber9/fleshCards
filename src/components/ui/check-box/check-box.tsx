import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import s from './check-box.module.scss'

import { Check } from '@/assets/icons'

export type CheckboxProps = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
  className?: string
}

export const Checkbox = (props: CheckboxProps) => {
  const { checked, onChange, disabled, required, label, id } = props

  const classNames = {
    container: s.container,
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    root: s.root,
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <div className={classNames.container}>
      <LabelRadix.Root className={classNames.label}>
        <div className={classNames.buttonWrapper}>
          <CheckboxRadix.Root
            className={classNames.root}
            checked={checked}
            onCheckedChange={onChange}
            disabled={disabled}
            required={required}
            id={id}
          >
            <AnimatePresence initial={false}>
              {checked && (
                <CheckboxRadix.Indicator className={classNames.indicator} asChild forceMount>
                  <motion.div
                    variants={{
                      unchecked: { scale: 0.5 },
                      checked: { scale: 1 },
                    }}
                    initial="unchecked"
                    animate="checked"
                    exit="unchecked"
                  >
                    <motion.div
                      variants={{
                        unchecked: { opacity: 0, transition: { duration: 0.1 } },
                        checked: {
                          opacity: 1,
                          strokeDashoffset: 0,
                          transition: { duration: 0.1 },
                        },
                      }}
                    >
                      <Check />
                    </motion.div>
                  </motion.div>
                </CheckboxRadix.Indicator>
              )}
            </AnimatePresence>
          </CheckboxRadix.Root>
        </div>
        {label}
      </LabelRadix.Root>
    </div>
  )
}
