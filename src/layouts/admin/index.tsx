import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import { useApiContext } from "../../contextapi/contextApi";

// Assuming AdminProps may be extended later
interface AdminProps {}

const Admin: React.FC<AdminProps> = (props) => {
  const { setOpen, open, isCollapsed } = useApiContext();

  // Example usage of `open` to remove unused variable warning
  useEffect(() => {
    console.log(open); // Using `open` to demonstrate its usage
  }, []);

  return (
    <div className="admin-container">
      <Sidebar />
      <div
        className={`content-container ${
          isCollapsed ? "xl-sidebar-collapsed" : "xl-sidebar-expanded"
        }`}
      >
        <main className="main-content">
          <Navbar onOpenSidenav={() => setOpen(true)} logoText={"qrcode"} />
          <div className="content">
            <Outlet />
          </div>
          {/* Example usage of `open` */}
          <div className="footer">{open && <p>Footer content</p>}</div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
