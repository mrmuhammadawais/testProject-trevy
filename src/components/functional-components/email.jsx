"use client";
import {
  Card,
  Row,
  Col,
  Table,
  Typography,
  Space,
} from "antd";

import {
  MailOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import MainLayout from "@/components/app-components/Layout/MainLayout";
import React, { useState } from "react";
const { Text } = Typography;

const initialEmailData = [
  {
    key: 1,
    sender: "Henry Paul",
    subject: "Automate your system with trevy.io",
    preview: "Dear Henry Paul, We are introducing",
    date: "19 Mar",
  },
  {
    key: 2,
    sender: "Henry Paul",
    subject: "Automate your system with trevy.io",
    preview: "Dear Henry Paul, We are introducing",
    date: "19 Mar",
  },
  {
    key: 3,
    sender: "Henry Paul",
    subject: "Automate your system with trevy.io",
    preview: "Dear Henry Paul, We are introducing",
    date: "19 Mar",
  },
  {
    key: 4,
    sender: "Henry Paul",
    subject: "Automate your system with trevy.io",
    preview: "Dear Henry Paul, We are introducing",
    date: "19 Mar",
  },
  {
    key: 5,
    sender: "Henry Paul",
    subject: "Automate your system with trevy.io",
    preview: "Dear Henry Paul, We are introducing",
    date: "19 Mar",
  },
];

export default function Segments() {
  const [filteredData, setFilteredData] = useState(initialEmailData);

  const handleDelete = (key) => {
    setFilteredData((prevData) => prevData.filter((item) => item.key !== key));
  };

  const emailColumns = [
    {
      title: "Sender",
      dataIndex: "sender",
      key: "sender",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Preview",
      dataIndex: "preview",
      key: "preview",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <DeleteOutlined
          onClick={() => handleDelete(record.key)}
          style={{ color: "red", cursor: "pointer" }}
        />
      ),
    },
  ];

  return (
    <MainLayout>
      <div className="bg-gray-100 min-h-screen flex justify-center overflow-hidden">
        <div className="bg-gray-100 p-6 min-h-screen flex justify-center">
          <Row gutter={16} className="w-full max-w-6xl space-y-4 lg:space-y-0">
            <Col xs={24} lg={16} className="space-y-2">
              <Card
                style={{ marginTop: "23px" }}
                className="card1 rounded-lg shadow-md overflow-x-auto sm:ml-0"
                title={
                  <div
                    className="flex items-center"
                    style={{
                      backgroundColor: "#1565C0",
                      height: "40px",
                      padding: "0 16px",
                    }}
                  >
                    <MailOutlined
                      style={{
                        color: "#fff",
                        fontSize: "16px",
                        marginRight: "8px",
                      }}
                    />
                    <Text
                      className="text-white"
                      style={{ color: "#fff", fontSize: "16px" }}
                    >
                      Emails
                    </Text>
                  </div>
                }
                headStyle={{
                  backgroundColor: "#1565C0",
                  height: "40px",
                  padding: "0",
                  color: "white",
                }}
                bodyStyle={{ backgroundColor: "white", marginTop: "-25px" }}
              >
                <Table
                  columns={emailColumns.map((col) => ({
                    ...col,
                    onCell: () => ({
                      style: { padding: "1px 1px", fontSize: "10px" },
                    }),
                  }))}
                  dataSource={filteredData}
                  pagination={false}
                  bordered={false}
                  showHeader={false}
                  rowClassName="compact-row"
                  className="text-xs"
                  style={{ backgroundColor: "white", fontSize: "10px" }}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </MainLayout>
  );
}
