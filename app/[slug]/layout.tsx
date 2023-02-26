import {
  fetchStuff,
  thisOneWithGetMethodIsFineToCallFromLayout,
} from "./fetch";

export interface LayoutProps {
  children: React.ReactNode;
}

async function PortfolioLayout({ children }: LayoutProps) {
  const response = await fetchStuff();
  // const response = await thisOneWithGetMethodIsFineToCallFromLayout();

  return (
    <div>
      {JSON.stringify(response)}
      {children}
    </div>
  );
}

export default PortfolioLayout;
