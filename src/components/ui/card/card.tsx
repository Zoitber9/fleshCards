import { ReactNode } from 'react'

import clsx from 'clsx'

import styles from './card.module.scss'

const { card } = styles

type PropsType = {
  className?: string
  children?: ReactNode
}

export const Card = ({ className, ...rest }: PropsType) => {
  return <div className={clsx(card, className)} {...rest} />
}
