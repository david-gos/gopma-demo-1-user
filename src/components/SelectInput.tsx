import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import * as React from 'react'

interface ItemSelect {
  value: string
  title: string
}

interface SelectVariantsProps {
  listItem: Array<ItemSelect>
  title: string
}

export function SelectVariants(_props: SelectVariantsProps) {
  const { listItem, title } = _props

  const [selected, setSelected] = React.useState('MALE')

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value)
  }

  return (
    <FormControl variant='filled' sx={{ minWidth: 130, my: 1 }}>
      <InputLabel id='demo-simple-select-filled-label'>{title}</InputLabel>
      <Select
        labelId='demo-simple-select-filled-label'
        id='demo-simple-select-filled'
        value={selected}
        onChange={handleChange}
      >
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
