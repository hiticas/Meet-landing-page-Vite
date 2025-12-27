import './Typography.scss'

function Typography({
  as: Component = 'p',
  type = 'preset-5',
  color,
  className = '',
  children,
}) {
  const classes = [
    `text-${type}`,
    color && `text-${color}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <Component className={classes}>{children}</Component>
}

export default Typography
