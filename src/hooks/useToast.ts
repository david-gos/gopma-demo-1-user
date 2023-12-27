import { useContext } from 'react'

import { ToastContext, ToastContextProps } from '~/components'

export function useToast(): ToastContextProps {
  return useContext(ToastContext)
}
