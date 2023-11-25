import { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from '@/components/auth/check-email/check-email'

const meta = {
  title: 'Auth/CheckEmail',
  component: CheckEmail,
  tags: ['autodocs'],
  argTypes: {
    email: { control: 'text' },
  },
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailCard: Story = {
  args: {
    email: 'hhhahhd@gmail.com',
  },
}
