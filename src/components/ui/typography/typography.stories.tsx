import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta: Meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    options: [
      'large',
      'h1',
      'h2',
      'h3',
      'body1',
      'body2',
      'subtitle1',
      'subtitle2',
      'link1',
      'link2',
    ],
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'large Typography',
  },
}

export const H1: Story = {
  args: {
    variant: 'H1',
    children: 'H1 Typography',
  },
}

export const H2: Story = {
  args: {
    variant: 'H2',
    children: 'H2 Typography',
  },
}

export const H3: Story = {
  args: {
    variant: 'H3',
    children: 'H3 Typography',
  },
}

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body1 Typography',
  },
}

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Body2 Typography',
  },
}

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Subtitle1 Typography',
  },
}

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'Subtitle2 Typography',
  },
}

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption Typography',
  },
}

export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'Overline Typography',
  },
}

export const Link1: Story = {
  args: {
    variant: 'link1',
    children: 'Link1 Typography',
  },
}

export const Link2: Story = {
  args: {
    variant: 'link2',
    children: 'Link2 Typography',
  },
}
