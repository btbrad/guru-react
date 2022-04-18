import React from 'react'
import classnames from 'classnames'

export enum ButtonType {
  Default = 'default',
  Primary = 'primary',
  Danger = 'danger',
  Link = 'link'
}

export enum ButtonSize {
  Normal = 'normal',
  Small = 'small',
  Large = 'large'
}

interface BaseButtonProps {
  className?: string
  disabled?: boolean
  btnType?: ButtonType
  size?: ButtonSize
  children: React.ReactNode
  href?: string
}

const Button: React.FC<BaseButtonProps> = props => {
  const { btnType, size, children, disabled, href } = props
  const classes = classnames('btn', {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    disabled: btnType === ButtonType.Link && disabled
  })
  if (btnType === ButtonType.Link) {
    return (
      <a
        className={classes}
        href={href}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button
