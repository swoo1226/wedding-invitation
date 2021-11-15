import styles from './popup.module.css'
import cn from 'classnames'

export default function Popup({ children, type }) {
    return (
      <div
        className={cn({
          [styles.success]: type === 'success',
          [styles.error]: type === 'error'
        })}
      >
        {children}
      </div>
    )
  }