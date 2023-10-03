import { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

interface WidthTypes {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper = ({ className, children }: WidthTypes) => {
  return (
    <div
      className={cn('mx-auto w-full max-w-screen-3xl p-2.5 md:p-3', className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
