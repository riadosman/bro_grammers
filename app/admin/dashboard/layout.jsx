import Header from "./../../admin/components/Header";
import "./globals.css";

function layout({ children }) {
  return (
    <div className="bg-[#131517] relative">
      <Header />
      {children}
    </div>
  );
}

export default layout;
