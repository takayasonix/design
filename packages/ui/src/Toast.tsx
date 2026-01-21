import { useEffect, type ReactNode } from 'react'

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastProps {
  type?: ToastType
  children: ReactNode
  isVisible: boolean
  onClose: () => void
  duration?: number
  className?: string
}

const styles: Record<ToastType, string> = {
  success: 'bg-green-50 border-green-200 text-green-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
}

const icons: Record<ToastType, ReactNode> = {
  success: (
    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  error: (
    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  warning: (
    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  ),
  info: (
    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

export function Toast({
  type = 'info',
  children,
  isVisible,
  onClose,
  duration = 5000,
  className = '',
}: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  if (!isVisible) return null

  return (
    <div
      className={`fixed bottom-4 right-4 z-toast flex items-center gap-3 px-4 py-3 border rounded-xl shadow-lg ${styles[type]} ${className}`}
    >
      {icons[type]}
      <span className="text-sm font-medium">{children}</span>
      <button
        onClick={onClose}
        className="ml-2 opacity-60 hover:opacity-100 transition-opacity"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

// Hook for managing toasts
import { useState, useCallback } from 'react'

interface ToastState {
  isVisible: boolean
  type: ToastType
  message: string
}

export function useToast() {
  const [toast, setToast] = useState<ToastState>({
    isVisible: false,
    type: 'info',
    message: '',
  })

  const show = useCallback((message: string, type: ToastType = 'info') => {
    setToast({ isVisible: true, type, message })
  }, [])

  const hide = useCallback(() => {
    setToast((prev) => ({ ...prev, isVisible: false }))
  }, [])

  return {
    ...toast,
    show,
    hide,
    success: (msg: string) => show(msg, 'success'),
    error: (msg: string) => show(msg, 'error'),
    warning: (msg: string) => show(msg, 'warning'),
    info: (msg: string) => show(msg, 'info'),
  }
}
