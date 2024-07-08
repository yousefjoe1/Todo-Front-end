'use client'
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const CustomModal = ({ children,btnName,btnIcon }: { children: React.ReactNode,btnName: string,btnIcon: React.ReactNode }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <div>
      <button className="flex items-center justify-center gap-2" onClick={onOpen}>
        {btnName}
        {btnIcon}
    </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalCloseButton background={'teal'} />
          <ModalBody>
          {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CustomModal;
