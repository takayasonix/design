import { useState, type ReactNode } from 'react'

interface AccordionProps {
  children: ReactNode
  className?: string
}

export function Accordion({ children, className = '' }: AccordionProps) {
  return (
    <div className={`divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

interface AccordionItemProps {
  title: ReactNode
  children: ReactNode
  defaultOpen?: boolean
  className?: string
}

export function AccordionItem({ title, children, defaultOpen = false, className = '' }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={className}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 text-gray-600 text-sm bg-white">
          {children}
        </div>
      )}
    </div>
  )
}
