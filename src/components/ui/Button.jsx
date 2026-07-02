import clsx from 'clsx'

function Button({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  variant = 'primary',
  leftIcon,
  rightIcon,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60 sm:px-6 sm:py-3.5'

  const variants = {
    primary:
      'border-blue-600 bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md focus-visible:border-blue-700 focus-visible:bg-blue-700 active:bg-blue-800',
    secondary:
      'border-slate-300 bg-white text-slate-700 shadow-sm hover:border-slate-400 hover:bg-slate-50 hover:shadow-md focus-visible:border-blue-500 focus-visible:bg-slate-50 active:border-slate-500 active:bg-slate-100',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseClasses, variants[variant], className)}
      {...props}
    >
      {leftIcon ? <span aria-hidden="true">{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span aria-hidden="true">{rightIcon}</span> : null}
    </button>
  )
}

export default Button
