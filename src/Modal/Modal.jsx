import React, { useRef, useEffect, useState, useCallback } from 'react'
import styles from './styles.module.css'

const Modal = ({ isOpen, hasCloseBtn = false, onClose, children }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen)
  const modalRef = useRef(null)

  const handleCloseModal = useCallback(() => {
    if (onClose) {
      onClose()
    }
    setModalOpen(false)
  }, [onClose])

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      handleCloseModal()
    }
  }

  useEffect(() => {
    setModalOpen(isOpen)
  }, [isOpen])

  useEffect(() => {
    const modalElement = modalRef.current

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal()
      } else {
        modalElement.close()
      }
    }
  }, [isModalOpen])

  // click outside

  useEffect(() => {
    const modalElement = modalRef.current

    const handleClickOutside = (e) => {
      const dialogDimensions = modalElement.getBoundingClientRect()
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        handleCloseModal()
      }
    }

    if (modalElement && isModalOpen) {
      modalElement.addEventListener('click', handleClickOutside)
    }

    return () => {
      if (modalElement) {
        modalElement.removeEventListener('click', handleClickOutside)
      }
    }
  }, [isModalOpen, handleCloseModal])

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} className={styles.modal}>
      {hasCloseBtn && (
        <button className={styles.modalCloseBtn} onClick={handleCloseModal}>
          Close {hasCloseBtn}
        </button>
      )}
      {children}
    </dialog>
  )
}

export default Modal
