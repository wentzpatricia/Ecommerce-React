import React from 'react';
import { ModalOverlay, ModalBox } from './ModalStyle';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export const Modal = (modal: ModalProps) => {
  return (
    <>
      {modal.isOpen && (
        <ModalOverlay onClick={modal.toggle}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            {modal.children}
          </ModalBox>
        </ModalOverlay>
      )}
    </>
  );
};
