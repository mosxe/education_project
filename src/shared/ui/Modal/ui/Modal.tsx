import React, { FC, ReactNode, useCallback, useEffect } from 'react';
import { Portal } from 'shared/ui/Portal';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props;
  const { theme } = useTheme();

  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  };

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls[theme]]: true
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <Portal>
      <div className={classNames(cls.Modal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};