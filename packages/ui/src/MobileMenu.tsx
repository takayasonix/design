import { useEffect, type ReactNode } from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

export function MobileMenu({ isOpen, onClose, children, className = '' }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-modal">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gray-900/50" onClick={onClose} />

      {/* Menu Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl ${className}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className="font-bold text-gray-900">Menu</span>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-4">{children}</nav>
      </div>
    </div>
  )
}

interface HamburgerButtonProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export function HamburgerButton({ isOpen, onClick, className = '' }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 flex flex-col items-center justify-center gap-1.5 ${className}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <span
        className={`block w-6 h-0.5 bg-gray-900 transition-all duration-200 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-gray-900 transition-all duration-200 ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`block w-6 h-0.5 bg-gray-900 transition-all duration-200 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      />
    </button>
  )
}

interface MobileMenuItemProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
}

export function MobileMenuItem({ href, onClick, children, className = '' }: MobileMenuItemProps) {
  const baseClasses = `block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors ${className}`

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`w-full text-left ${baseClasses}`}>
      {children}
    </button>
  )
}
