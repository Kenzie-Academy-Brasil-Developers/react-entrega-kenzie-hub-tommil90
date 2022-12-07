import React from 'react'
import { useOutClick } from '../../hooks/useOutClick'
import { Modal, ModalBox } from './style'



const ModalDefault = ({ children, setShowModal }) => {

  const modalRef = useOutClick(
    ()=> setShowModal(false)
  )


  return (
    <Modal>
        <ModalBox ref={modalRef}>
            { children }
        </ModalBox>
    </Modal>
  )
}

export default ModalDefault