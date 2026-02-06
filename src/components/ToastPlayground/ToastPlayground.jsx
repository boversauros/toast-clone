import React from 'react'
import ToastShelf from '../ToastShelf'
import Button from '../Button'
import toastImage from '../../assets/toast.png'

import styles from './ToastPlayground.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastPlayground() {
  const [message, setMessage] = React.useState('')
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0])
  const [toasts, setToasts] = React.useState([])

  const onCloseToast = index => {
    setToasts(toasts.filter((_, i) => i !== index))
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src={toastImage} />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} onCloseToast={onCloseToast} />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map(option => (
              <label htmlFor={`variant-${option}`} key={option}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={variant === option}
                  onChange={e => setVariant(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button
              onClick={() => setToasts([...toasts, { message, variant }])}
            >
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToastPlayground
