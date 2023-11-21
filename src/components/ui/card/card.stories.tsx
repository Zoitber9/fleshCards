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
  args: { children: 'child elements in a card' },
  render: args => (
    <Card className={'top'} {...args}>
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'center',
          gap: '1rem',
          width: '80%',
          height: '552px',
          margin: '1rem 0',
        }}
      >
        <Typography variant={'h2'}>Card</Typography>
      </div>
    </Card>
  ),
}
