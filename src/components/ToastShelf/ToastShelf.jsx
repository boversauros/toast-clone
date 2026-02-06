import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf({ toasts, onCloseToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts &&
        toasts.map((toast, index) => (
          <li className={styles.toastWrapper} key={index}>
            <Toast
              variant={toast.variant}
              onCloseToast={onCloseToast}
              index={index}
            >
              {toast.message}
            </Toast>
          </li>
        ))}
    </ol>
  )
}

export default ToastShelf
