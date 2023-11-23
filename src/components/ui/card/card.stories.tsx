import { Meta, StoryObj } from '@storybook/react'

import { Typography } from '../typography'

import { Card } from './card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleCard: Story = {
  args: {
    children: <Typography variant={'h1'}>Card</Typography>,
  },
}
