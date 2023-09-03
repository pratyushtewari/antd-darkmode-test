import MaterialSymbol from "./MaterialSymbol";
import bbosLogo from "../assets/BBS_logo_small.svg";
import React, { useState } from "react";
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Space } from "antd";
import { theme } from "antd";

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
      <a href="#" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
];

const Navbar: React.FC = () => {
  const [current, setCurrent] = useState("home");
  const { token } = theme.useToken();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div
      style={{
        // width: "100%",
        paddingInline: token.sizeXS,
        background: token.colorBgContainer,
        borderColor: token.colorBorder,
        borderBottomWidth: 1,
        borderStyle: "solid",
      }}
    >
      <Space align="center">
        <img
          style={{
            height: 24,
            width: 24,
            verticalAlign: "text-top",
          }}
          src={bbosLogo}
        ></img>
        <span
          style={{
            color: token.colorPrimary,
            /* Light/LG/LG Strong */
            fontSize: 16,
            fontWeight: 600,
            lineHeight: "24px",
            whiteSpace: "nowrap",
          }}
        >
          Blue Book Services
        </span>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </Space>
    </div>
  );
};

export default Navbar;
