import { ReactNode } from "react";

interface IStoreLayoutProps {
  children: ReactNode;
}
export default function StoreLayout({ children }: IStoreLayoutProps) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 p-8">
      <header />
      {children}
    </div>
  );
}
