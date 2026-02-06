import React from 'react'

export const ToastContext = React.createContext({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
})

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const addToast = (message, variant) => {
    const newToast = { id: crypto.randomUUID(), message, variant }
    setToasts(prevToasts => [...prevToasts, newToast])
  }

  const removeToast = id => {
    setToasts(toasts.filter(toast => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
