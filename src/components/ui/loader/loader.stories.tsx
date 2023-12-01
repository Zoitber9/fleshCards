import { Meta, StoryObj } from '@storybook/react'

import { Loader } from './loader'

const meta = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Cards: Story = {
  render: () => <Loader />,
}
