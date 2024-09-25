import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { Link } from "react-router-dom";
const items = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: <Link to={"/"}>Home</Link>,
  },
  {
    key: "2",
    icon: <DesktopOutlined />,
    label: "Option 2",
  },
  {
    key: "3",
    icon: <ContainerOutlined />,
    label: "Option 3",
  },
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined />,
    children: [
      {
        key: "5",
        label: "Option 5",
      },
      {
        key: "6",
        label: "Option 6",
      },
      {
        key: "7",
        label: "Option 7",
      },
      {
        key: "8",
        label: "Option 8",
      },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "9",
        label: "Option 9",
      },
      {
        key: "10",
        label: "Option 10",
      },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          {
            key: "11",
            label: "Option 11",
          },
          {
            key: "12",
            label: "Option 12",
          },
        ],
      },
    ],
  },
];
const SideBarAnt = () => {
  const [collapsed, setCollapsed] = useState(true);
  //   const toggleCollapsed = () => {
  //     setCollapsed(!collapsed);
  //   };
  return (
    <div
      style={{
        backgroundColor: "gray",
        width: `${collapsed ? "250px" : "80px"}`,
        transition: "width 0.3s",
      }}
      className="flex flex-col justify-center "
      onMouseEnter={() => setCollapsed(true)}
      onMouseLeave={() => setCollapsed(false)}
    >
      {/* <Button
        type="primary"
        // onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme=""
        inlineCollapsed={!collapsed}
        items={items}
        className="overflow-y-auto no-scrollbar"
      />
    </div>
  );
};
export default SideBarAnt;
