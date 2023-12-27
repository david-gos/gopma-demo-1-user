import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'

interface DatePickerProps {
  labelInput: string
}

export function BasicDatePicker(_props: DatePickerProps) {
  const { labelInput } = _props
  return (
    <DemoContainer components={['DatePicker']}>
      <DatePicker
        label={labelInput}
        slotProps={{
          textField: {
            variant: 'filled',
            sx: {
              width: '100%'
            }
          }
        }}
      />
    </DemoContainer>
  )
}
