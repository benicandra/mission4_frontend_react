import Navbar from "../components/Navbar";

const NoFooterLayout = ({ children }) => {
  return (
    <div>
      <Navbar showLinks={false} />
      <main>{children}</main>
    </div>
  );
};

export default NoFooterLayout;
