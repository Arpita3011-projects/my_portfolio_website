import Container from './Container'

function Section({ id, className = '', children, eyebrow, title, ...props }) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`.trim()} {...props}>
      <Container>
        {(eyebrow || title) && (
          <div className="mb-10 space-y-2 sm:mb-12">
            {eyebrow ? <p className="text-sm font-medium uppercase tracking-[0.24em] text-blue-600">{eyebrow}</p> : null}
            {title ? <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem]">{title}</h2> : null}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}

export default Section
