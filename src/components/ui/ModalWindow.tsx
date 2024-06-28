import { FC, ReactNode } from "react";
import {
  CloseButton,
  ModalBackdrop,
  ModalContent,
} from "../../styles/ModalWindowStyles";

interface ModalWindowProps {
  children: ReactNode;
  onClose: () => void;
}

const ModalWindow: FC<ModalWindowProps> = ({ children, onClose }) => {
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </ModalContent>
    </ModalBackdrop>
  );
};

export default ModalWindow;
