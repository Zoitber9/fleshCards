import { Meta, StoryObj } from '@storybook/react'

import s from './dropdown.module.scss'

import { Avatars as Avatar, Person, LogoutSvg, ProfileAvatar } from '@/assets/icons'
import { Button } from '@/components/ui'
import { Dropdown, DropdownItem, DropdownItemWithIcon } from '@/components/ui/dropDown'

const meta = {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  component: Dropdown,
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Dropdown
        align={'end'}
        storybookMode={true}
        trigger={
          <button className={s.button}>
            <div className={s.userName}></div>
            <Avatar>
              <ProfileAvatar />
            </Avatar>
          </button>
        }
      >
        <DropdownItem>
          <DropdownItemWithIcon
            className={s.containerParagraph}
            icon={
              <Avatar>
                <ProfileAvatar />
              </Avatar>
            }
            text="Ivan"
            textForEmail=""
          />
        </DropdownItem>
        <DropdownItemWithIcon icon={<Person />} text="My Profile" />
        <DropdownItemWithIcon icon={<LogoutSvg />} text="Sign Out" />
      </Dropdown>
    </div>
  ),
  args: {
    children: <></>,
    trigger: <Button>open</Button>,
  },
}
