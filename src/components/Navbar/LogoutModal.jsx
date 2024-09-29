import React, { useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const modalRef = useRef(null)

  const handleLogout = useCallback(() => {
    localStorage.removeItem('token')
    navigate('/login')
  }, [navigate])

  const handleEscape = useCallback((event) => {
    if (event.key === 'Escape') {
      onClose()
    }
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      modalRef.current?.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, handleEscape])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50' role='dialog' aria-modal='true' aria-labelledby='modal-title'>
      <div className='fixed inset-0 bg-black bg-opacity-50 transition-opacity' onClick={onClose}></div>
      <div
        ref={modalRef}
        className='bg-white rounded-lg shadow-lg z-10 p-6 w-11/12 max-w-md mx-auto focus:outline-none relative'
        tabIndex='-1'
      >
        <button
          onClick={onClose}
          className='absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition-colors'
          aria-label='Cerrar'
        >
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
        <h1 id='modal-title' className='text-lg font-semibold font-workSans mb-3 text-center text-black'>Cerrar Sesión</h1>
        <p className='text-3-center text-black font-sans sm:text-xl mb-6 '>¿Estás seguro de que deseas cerrar sesión?</p>
        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center'>
          <button
            className='border-2 border-primary-50 text-primary-500 text-lg font-workSans p-2 w-full sm:w-auto rounded-full hover:bg-primary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50'
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className='bg-primary-500 text-white text-lg font-workSans p-2 w-full sm:w-auto rounded-full hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50'
            onClick={handleLogout}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  )
}

export default LogoutModal
