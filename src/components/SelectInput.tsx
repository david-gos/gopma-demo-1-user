import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { CreateUserInput } from '~/utils'

interface ItemSelect {
  value: string
  title: string
}

interface SelectVariantsProps {
  listItem: Array<ItemSelect>
  title: string
  nameField: any
  register: UseFormRegister<CreateUserInput>
}

export function SelectVariants(_props: SelectVariantsProps) {
  const { listItem, title, nameField, register } = _props

  const [selected, setSelected] = useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value)
  }

  return (
    <FormControl variant='filled' sx={{ minWidth: 130, my: 1 }}>
      <InputLabel id='demo-simple-select-filled-label'>{title}</InputLabel>
      <Select
        value={selected}
        labelId='demo-simple-select-filled-label'
        id='demo-simple-select-filled'
        {...register(nameField)}
        onChange={handleChange}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {listItem.map((item) => {
          return (
            <MenuItem key={item.value} value={item.value}>
              {item.title}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}
