import MaterialSymbol from "./MaterialSymbol";

import React, { useState } from "react";
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
    icon: <MaterialSymbol name="home" />,
  },
  {
    label: "Advanced Search",
    key: "advanced_search",
    icon: <MaterialSymbol name="search" />,
    // disabled: true,
    children: [
      {
        label: "Search Companies",
        key: "setting:1",
      },
      {
        label: "Option 2",
        key: "setting:2",
      },
      {
        type: "group",
        label: "Item 1",
        children: [],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <MaterialSymbol name="search" />,

    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Navbar;
