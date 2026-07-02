import clsx from 'clsx'

const headingStyles = {
  h1: 'text-4xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-5xl lg:text-6xl',
  h2: 'text-3xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-4xl',
  h3: 'text-2xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-3xl',
  h4: 'text-xl font-semibold tracking-[-0.02em] text-slate-900 sm:text-2xl',
  h5: 'text-lg font-semibold tracking-[-0.02em] text-slate-900 sm:text-xl',
  h6: 'text-base font-semibold tracking-[-0.02em] text-slate-900 sm:text-lg',
}

function Heading({
  as = 'h2',
  children,
  subtitle,
  centered = false,
  className = '',
  ...props
}) {
  const Component = as

  return (
    <div className={clsx('space-y-3', centered && 'mx-auto max-w-3xl text-center', className)}>
      <Component className={clsx(headingStyles[as] || headingStyles.h2)} {...props}>
        {children}
      </Component>
      {subtitle ? (
        <p className="text-base leading-7 text-slate-600 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  )
}

export default Heading
