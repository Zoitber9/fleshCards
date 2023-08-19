import { ChangeEvent, KeyboardEvent, useState } from 'react'

import { Button } from '../../ui/button'
import { TextField } from '../../ui/textField'
import { Typography } from '../../ui/typography'

import s from './editable-span.module.scss'

type Props = {
  name: string
  email: string
  handleLogout: () => void
  onValueChange: (newName: string) => void
  onCancel?: () => void
}

export const EditableSpan = ({ name, onValueChange, email, handleLogout }: Props) => {
  let [editMode, setEditMode] = useState(false)
  let [title, setTitle] = useState(name)

  const activateEditMode = () => {
    setEditMode(true)
    setTitle(name)
  }
  const activateViewMode = () => {
    setEditMode(false)
    onValueChange(title)
  }
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'Enter') {
      event.currentTarget.blur()
    }
  }

  return editMode ? (
    <>
      <TextField
        type={'text'}
        value={title}
        onChange={changeTitle}
        onBlur={activateViewMode}
        onKeyDown={handleKeyPress}
        label={'Nickname'}
      />
      <Button variant={'primary'} fullWidth={true} onClick={activateViewMode}>
        Save Changes
      </Button>
    </>
  ) : (
    <>
      <Typography variant={'h1'} className={s.nameContainer} onDoubleClick={activateEditMode}>
        {name}
        <Button variant={'link'} className={s.editNameButton} onClick={activateEditMode}></Button>
      </Typography>
      <Typography variant="body2" className={s.email}>
        {email}
      </Typography>
      <div className={s.buttonContainer}>
        <Button variant={'secondary'} onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </>
  )
}
