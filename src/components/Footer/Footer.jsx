import React from 'react'

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <p>
        This project is inspired by Josh Comeau's exercise from The Joy of React
        course.
      </p>
    </footer>
  )
}

export default Footer
