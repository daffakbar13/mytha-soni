import type MainLayoutProps from "./types";

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children } = props;
  return (
    <main className="fixed top-0 bottom-0 left-0 right-0 flex justify-center w-full h-full max-w-md m-auto overflow-hidden">
      {children}
    </main>
  );
};

export default MainLayout;
