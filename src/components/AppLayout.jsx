import { useState } from "react";
import { Layout} from "antd";
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";

const AppLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Layout style={{ height: '100vh'}}>
      <AppSidebar collapsed={collapsed} />
      <Layout>
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <AppContent>
          {children}
        </AppContent>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
