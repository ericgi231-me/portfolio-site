const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
      <p className="text-2xl text-text-secondary mb-8">Page not found</p>
      <a 
        href="/" 
        className="text-primary hover:text-primary-dark underline text-xl transition-[color] px-6 py-3 border-2 border-primary hover:border-primary-dark rounded-md"
        style={{ transitionDuration: 'var(--transition-base)' }}
      >
        Go back to Home
      </a>
    </div>
  )
}

export default NotFoundPage;