import AdminHeader from "../_components/adminHeader";
import Sidebar from "../_components/sidebar";
import "./style.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminHeader />
      <div className={`h-100 w-100 d-flex px-2`}>
        <div className="d-flex flex-column  sidebar">
          <Sidebar />
        </div>
        <div className="d-flex flex-column  w-100">{children}</div>
      </div>{" "}
    </>
  );
}
