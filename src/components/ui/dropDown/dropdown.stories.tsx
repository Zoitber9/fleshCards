import { Meta, StoryObj } from '@storybook/react'

import s from './dropdown.module.scss'

import { Person, LogoutSvg, ProfileAvatar } from '@/assets/icons'
import { UserAvatar } from '@/components/ui'
import Button from '@/components/ui/button/button'
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
            <UserAvatar>
              <ProfileAvatar />
            </UserAvatar>
          </button>
        }
      >
        <DropdownItem>
          <DropdownItemWithIcon
            className={s.containerParagraph}
            icon={
              <UserAvatar>
                <ProfileAvatar />
              </UserAvatar>
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
