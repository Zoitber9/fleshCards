import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

export type CardType = {
  className?: string
  children?: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Card = ({ className, ...restProps }: CardType) => {
  const classNames = {
    root: clsx(s.card, className),
  }

  return <div className={classNames.root} {...restProps}></div>
}
