import React, { FC, ReactNode } from 'react';
import { Portal } from '../../Portal';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../../Overlay';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const { theme } = useTheme();
  const { close } = useModal({ isOpen, onClose });

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const mods: Mods = {
    [cls.opened]: isOpen
  };

  if (!lazy) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className, theme])}>
        <Overlay onClick={close} />
        <div className={cls.content} onClick={onContentClick}>
          {children}
        </div>
      </div>
    </Portal>
  );
};