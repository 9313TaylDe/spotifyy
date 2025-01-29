import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <main className="container_main">
      <Header />
      {children}
    </main>
  );
};

export default Layout;
