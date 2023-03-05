import {FC, ReactNode} from 'react';
import {Footer} from "@/components/common/footer/Footer";

interface ILayoutProps {
  children: ReactNode
}

export const Layout: FC<ILayoutProps> = ({children, ...props}) => {
  return (
    <div>
      <div {...props}>{children}</div>
      <Footer />
    </div>
  );
};