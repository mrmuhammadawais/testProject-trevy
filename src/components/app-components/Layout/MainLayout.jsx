"use client";
import React, { useState } from "react";
import { Avatar, Menu } from "antd";
import {
  BellOutlined,
  CloseOutlined,
  DashboardOutlined,
  AppstoreOutlined,
  MenuOutlined,
  ArrowLeftOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import Logo from "../../../assets/icons/logo.png";
import Link from "next/link";


const MainLayout = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="layout-container">
      <header className="fixed-header flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <div className="md:hidden" onClick={toggleSidebar}>
            <MenuOutlined className="text-white text-lg cursor-pointer" />
          </div>
          <img src={Logo.src}  alt="Trevy Logo" className="h-[30px] w-auto"/>
        </div>

        <div className="avatar-gap flex items-center" style={{ gap: "15px" }}>
          <div className="responsive-avatar flex items-center space-x-2 responsive-avatar-container">
            <Avatar
              size={25}
              src="https://randomuser.me/api/portraits/women/44.jpg"
            />
            <span className=" username text-white">Adrian Nadar</span>
          </div>
          <div className="w-[30px] h-[30px] bg-white flex items-center justify-center rounded-full">
            <BellOutlined style={{ fontSize: "13px", color: "#C3CAD9" }} />
          </div>
          <div className="w-[30px] h-[30px] bg-white flex items-center justify-center rounded-full">
            <CloseOutlined style={{ fontSize: "13px", color: "#C3CAD9" }} />
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <div
          className={`bg-[#F9F9F9] transition-transform duration-300 ease-in-out ${
            isSidebarVisible ? "w-[250px]" : "w-0 overflow-hidden"
          } md:w-[250px] md:block h-screen`}
        >
          <SidebarContent
            isSidebarVisible={isSidebarVisible}
            toggleSidebar={toggleSidebar}
          />
        </div>

        <div className="flex-1 !bg-[#F2F4F7] p-3">{children}</div>
      </div>
    </div>
  );
};

const SidebarContent = ({ isSidebarVisible, toggleSidebar }) => {
  const items = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: <Link href="/dashboardContent">Dashboard</Link>,
    },
    {
      key: "templates",
      icon: <AppstoreOutlined />,
      label: "Templates",
      children: [
        {
          key: "template1",
          label: <Link href="/newTemplate">Create New Template</Link>,
        },
        {
          key: "template2",
          label: <Link href="/allTemplate">All Templates</Link>,
        },
      ],
    },
    {
      key: "audience",
      icon: <UsergroupAddOutlined />,
      label: "Audience",
      children: [
        {
          key: "Contact1",
          label: <Link href="/contacts">All Contact</Link>,
        },
        {
          key: "segment",
          label: <Link href="/segments">Segments</Link>,
        },
        {
          key: "Tags",
          label: <Link href="/tags">Tags</Link>,
        },
       
      ],
    },
  ];

  return (
    <div className="w-[247px] flex flex-col justify-between p-[30px] pl-[7px] bg-[#F9F9F9]">
      {isSidebarVisible && (
        <div
          className="flex items-center justify-end mb-4 md:hidden"
          onClick={toggleSidebar}
        >
          <ArrowLeftOutlined
            className="text-lg cursor-pointer"
            style={{ color: "#7D8FB3" }}
          />
        </div>
      )}

      <Menu
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        items={items}
        className="flex-1 custom-sidebar-menu"
        style={{
          backgroundColor: "!#F9F9F9",
          color: "#6B7A99",
          border: "none",
        }}
      />
    </div>
  );
};

export default MainLayout;
