import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

interface WeboModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: JSX.Element | JSX.Element[];
  footer: JSX.Element | JSX.Element[];
}
const WeboModal = ({
  open,
  title,
  content,
  footer,
  onClose,
}: WeboModalProps) => {
  return (
    <Modal isOpen={open} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{content}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default WeboModal;
