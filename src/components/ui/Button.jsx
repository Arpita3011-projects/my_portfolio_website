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
  href,
  target,
  rel,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60 sm:px-6 sm:py-3.5'

  const variants = {
    primary:
      'border border-blue-600 bg-blue-600 text-white shadow-[0_10px_30px_rgba(37,99,235,0.16)] hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_14px_32px_rgba(37,99,235,0.22)] focus-visible:border-blue-700 focus-visible:bg-blue-700 active:bg-blue-800',
    secondary:
      'border border-slate-200 bg-white text-slate-700 shadow-sm hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md focus-visible:border-blue-500 focus-visible:bg-slate-50 active:border-slate-500 active:bg-slate-100',
  }

  const content = (
    <>
      {leftIcon ? <span aria-hidden="true">{leftIcon}</span> : null}
      <span>{children}</span>
      {rightIcon ? <span aria-hidden="true">{rightIcon}</span> : null}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={clsx(baseClasses, variants[variant], className)}
        onClick={onClick}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(baseClasses, variants[variant], className)}
      {...props}
    >
      {content}
    </button>
  )
}

export default Button
