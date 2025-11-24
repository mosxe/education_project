import { ImgHTMLAttributes, ReactNode, useLayoutEffect, useState } from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactNode;
  errorFallback?: ReactNode;
}

export const AppImage = (props: AppImageProps) => {
  const { className, src, alt = 'image', fallback, errorFallback, ...otherProps } = props;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsLoading(false);
      setIsError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return <>{fallback}</>;
  }

  if (isError && errorFallback) {
    return <>{errorFallback}</>;
  }

  return (
    <img className={className} src={src} alt={alt} {...otherProps} />
  );
};