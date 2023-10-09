import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import {
  DashboardOutlined,
  FolderOpenOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

const AppSidebar = ({collapsed}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (e) => {
    navigate(e.key)
  }
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical">App Logo</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        onClick={handleMenuClick}
        items={[
          {
            key: "/",
            icon: <DashboardOutlined />,
            label: "Dashboard",
          },
          {
            key: "/profile",
            icon: <FolderOpenOutlined />,
            label: "Category",
          },
          {
            key: "/services",
            icon: <CustomerServiceOutlined />,
            label: "Services",
          },
          {
            key: "/salons",
            icon: <HomeOutlined />,
            label: "Salons",
          },
          {
            key: "/customers",
            icon: <UsergroupAddOutlined />,
            label: "Customers",
          },
        ]}
      />
    </Sider>
  );
};

export default AppSidebar;
