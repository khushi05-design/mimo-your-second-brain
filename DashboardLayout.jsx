import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;