import { ComponentPropsWithoutRef, ElementType, ForwardedRef, forwardRef, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

export interface ButtonProps<T extends ElementType = 'button'> {
  as?: T
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  className?: string
}

const Button = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
  ref: ForwardedRef<any>
) => {
  const {
    as: Component = 'button',
    variant = 'primary',
    fullWidth,
    className,
    ...otherProps
  } = props

  const classNames = {
    root: clsx(s[variant], fullWidth && s.fullWidth, className),
  }

  return <Component ref={ref} className={classNames.root} {...otherProps} />
}

export default forwardRef(Button)
