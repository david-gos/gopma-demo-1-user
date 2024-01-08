import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '~/hooks'
import { selectAlert, setCloseAlert } from '~/store/reducers'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

export function AlertDialogSlide() {
  const select = useAppSelector(selectAlert)
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <Dialog
        open={select.isOpen}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{select.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>{select.content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              dispatch(setCloseAlert({ confirm: false }))
            }}
          >
            Disagree
          </Button>
          <Button
            onClick={() => {
              dispatch(setCloseAlert({ confirm: true, id: select.id }))
            }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
