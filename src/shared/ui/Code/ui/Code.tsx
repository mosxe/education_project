import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { Icon } from 'shared/ui/Icon';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Icon Svg={CopyIcon} clickable onClick={onCopy} className={cls.copyBtn} />
      <code>{text}</code>
    </pre>
  );
});
