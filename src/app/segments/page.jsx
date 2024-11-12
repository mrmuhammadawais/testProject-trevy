"use client";
import {
  Card,
  Row,
  Col,
  Button,
  Tag,
  Table,
  Typography,
  Space,
  Divider,
  Modal,
  Input,
} from "antd";

import {
  CalculatorOutlined,
  MailOutlined,
  PhoneOutlined,
  CalendarOutlined,
  EyeOutlined,
  DeleteOutlined,
  HistoryOutlined,
  LeftSquareFilled,
  RightOutlined,
  ClockCircleOutlined,
  LeftOutlined,
} from "@ant-design/icons";

import MainLayout from "@/components/app-components/Layout/MainLayout";
import React from "react";
import { useState } from "react";
// import ReactQuill from "react-quill";
import dynamic from 'next/dynamic';

import "react-quill/dist/quill.snow.css";
const { Title, Text } = Typography;

const tags = [
  "Logistics",
  "Cargo",
  "Cargo",
  "Transportation and Logistics  ",
  "Logistics",
  "Cargo",
  "Cargo",
  "Transportation and Logistics",
];

const emailData = [
  {
    sender: "Henry Paul",
    subject: "Automate your system with trevy.io",
    preview: "Dear Henry Paul, We are introducing",
    date: "19 Mar",
  },
  {
    sender: "Henry Paul",
    subject: "Automate your system with trevy.io",
    preview: "Dear Henry Paul, We are introducing",
    date: "19 Mar",
  },
  {
    sender: "Henry Paul",
    subject: "Automate your system with trevy.io",
    preview: "Dear Henry Paul, We are introducing",
    date: "19 Mar",
  },
  {
    sender: "Henry Paul",
    subject: "Automate your system with trevy.io",
    preview: "Dear Henry Paul, We are introducing",
    date: "19 Mar",
  },
  {
    sender: "Henry Paul",
    subject: "Automate your system with trevy.io",
    preview: "Dear Henry Paul, We are introducing",
    date: "19 Mar",
  },
];
const toolbarOptions = [
  [{ font: [] }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ align: [] }],
  ["bold", "italic", "underline", "strike"],
  [{ list: "ordered" }, { list: "bullet" }],
  ["link", "image"],
  [{ color: [] }, { background: [] }],
];
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const activityData = [
  {
    date: "November 7, 2023",
    description: "Sales - Property Deals Blog.com",
    time: "6:33pm",
    repeat: 3,
  },
  {
    date: "November 8, 2023",
    description: "Sales - Property Deals Blog.com",
    time: "6:33pm",
    repeat: 3,
  },
  {
    date: "November 17, 2023",
    description: "Sales - Property Deals Blog.com",
    time: "6:33pm",
    repeat: 1,
  },
  {
    date: "November 18, 2023",
    description: "Marketing - Property Deals Blog.com",
    time: "2:20pm",
    repeat: 3,
  },
  {
    date: "November 19, 2023",
    description: "Support - Property Deals Blog.com",
    time: "1:15pm",
    repeat: 3,
  },
  {
    date: "November 20, 2023",
    description: "Sales - Property Deals Blog.com",
    time: "5:50pm",
    repeat: 1,
  },
];

export default function Segments() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [emailContent, setEmailContent] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const handleSendEmail = () => {
    console.log("Sending email with content:", emailContent);
    setIsModalVisible(false);
  };

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 3;

  const paginatedData = activityData.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const handleForward = () => {
    if ((currentPage + 1) * pageSize < activityData.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const emailColumns = [
    {
      title: "",
      dataIndex: "checkbox",
      key: "checkbox",
      render: () => (
        <input
          type="checkbox"
          className="border-2 border-gray-300 rounded-sm"
          style={{
            color: "#fff",
            borderColor: "#F2F3F5",
            borderWidth: "2px",
            borderStyle: "solid",
            borderRadius: "5px",
            padding: "10px",
            marginLeft: "-14px",
          }}
        />
      ),
      width: 50,
    },
    {
      title: "Sender",
      dataIndex: "sender",
      key: "sender",
      width: 100,
      render: (text) => (
        <Text
          className="mab text-gray-600 text-xs font-semibold truncate"
          style={{
            fontSize: "12px",
            marginLeft: "-47px",
            color: "#65728C",
            fontSize: "12px",
          }}
        >
          {text}
        </Text>
      ),
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      render: (text) => (
        <Text
          className="mab text-gray-600 text-xs font-semibold truncate "
          style={{
            fontSize: "12px",
            marginLeft: "-77px",
            color: "#65728C",
            fontSize: "12px",
          }}
        >
          {text}
        </Text>
      ),
    },
    {
      title: "Preview",
      dataIndex: "preview",
      key: "preview",
      render: (text) => (
        <Text
          className="mab text-gray text-xs truncate"
          style={{ fontSize: "12px", color: "#65728C", fontSize: "12px" }}
        >
          {text}
        </Text>
      ),
    },
    {
      title: "Date and Actions",
      key: "dateActions",
      render: (text, record) => (
        <div
          className=" mab flex justify-between items-center gap-2 truncate"
          style={{ marginLeft: "-6px" }}
        >
          <Text
            className=" mab text-gray-600 text-xs truncate"
            style={{ fontSize: "12px", color: "#65728C", marginLleft: "-4px" }}
          >
            {record.date}
          </Text>
          <div className="flex gap-2 truncate">
            <DeleteOutlined
              className="text-red-500"
              style={{ fontSize: "13px", color: "#FF6B6B" }}
            />
            <MailOutlined
              className="text-blue-700"
              style={{ fontSize: "13px", color: "#1E4D8E" }}
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <MainLayout>
      <div className="bg-gray-100 min-h-screen flex justify-center overflow-hidden">
        <div className="bg-gray-100 p-6 min-h-screen flex justify-center">
          <Row gutter={16} className="w-full max-w-6xl space-y-4 lg:space-y-0">
            <Col xs={24} lg={16} className="space-y-2">
              <Card className="card1 shadow-md rounded-lg">
                <Row
                  className="flex-wrap lg:flex-nowrap"
                  justify="space-between"
                >
                  <Col className="mb-4 lg:mb-0">
                    <Title
                      level={4}
                      className="mb-1"
                      style={{ color: "#000000", fontSize: "18px" }}
                    >
                      Elizabeth Turner Smith
                    </Title>
                    <Text
                      className="text-gray-500 block"
                      style={{ color: "#8D8D8D", fontSize: "12px" }}
                    >
                      Street 17, D-block, Citi Housing Society, Jhelum, PK
                    </Text>
                    <button
                      className="bg-[#1565C0] text-white py-1 px-4 rounded-full mt-3"
                      onClick={handleOpenModal}
                    >
                      Write an out-reach email
                    </button>
                  </Col>
                  <Modal
                    title="New Email"
                    visible={isModalVisible}
                    onCancel={handleCloseModal}
                    footer={[
                      <Button
                        key="send"
                        type="primary"
                        onClick={handleSendEmail}
                      >
                        Send Email
                      </Button>,
                    ]}
                    width={800}
                  >
                    <Space direction="vertical" style={{ width: "100%" }}>
                      <Input
                        placeholder="To"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                        style={{ marginBottom: 10 }}
                      />
                      <Input
                        placeholder="From"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                        style={{ marginBottom: 10 }}
                      />
                      <Input
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        style={{ marginBottom: 10 }}
                      />
                    </Space>

                    <ReactQuill
                      value={emailContent}
                      onChange={setEmailContent}
                      modules={{ toolbar: toolbarOptions }}
                      placeholder="Write your email content here... "
                      style={{ marginTop: 20, minHeight: 200 }}
                    />
                  </Modal>
                  <Col className="flex items-center justify-center">
                    <div
                      className="borderLine absolute border-l border-gray-300"
                      style={{
                        height: "304px",
                        left: "47px",
                        top: "-5px",
                        transform: "translateX(-50%)",
                      }}
                    ></div>
                  </Col>
                  <Col className="flex flex-col space-y-1">
                    <Text
                      className="flex items-center text-gray-600"
                      style={{ color: "#1565C0" }}
                    >
                      <MailOutlined
                        className="mr-2 text-red-500"
                        style={{ color: "#E62E2E" }}
                      />
                      Henry33@glyad.info
                    </Text>
                    <Text
                      className="flex items-center text-gray-600"
                      style={{ color: "#1565C0" }}
                    >
                      <PhoneOutlined
                        className="mr-2 text-blue-600"
                        style={{ color: "#555ACC" }}
                      />
                      +1 7654348954
                    </Text>
                  </Col>
                </Row>

                <Row
                  gutter={16}
                  className="text-gray-600 mt-4 text-xs flex-wrap"
                >
                  <Col xs={12} lg={6} className="mb-2">
                    <Text style={{ color: "#65728C" }} strong>
                      Assigned to
                    </Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }}>Pete Carigia</Text>
                  </Col>
                  <Col xs={12} lg={6} className="mb-2">
                    <Text style={{ color: "#65728C" }} strong>
                      Source
                    </Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }}>Ylopo</Text>
                  </Col>
                </Row>
                <Row
                  gutter={16}
                  className="text-gray-600 mt-4 text-xs flex-wrap"
                >
                  <Col xs={12} lg={6} className="mb-2">
                    <Text style={{ color: "#65728C" }} strong>
                      Collaborator’s name
                    </Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }}>Pete Carigia</Text>
                  </Col>
                  <Col xs={12} lg={6} className="mb-2">
                    <Text style={{ color: "#65728C" }} strong>
                      Collaborator’s role
                    </Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }}>Broker</Text>
                  </Col>
                </Row>
                <Row
                  gutter={16}
                  className="text-gray-600 mt-4 text-xs flex-wrap"
                >
                  <Col xs={12} lg={6} className="mb-2">
                    <Text style={{ color: "#65728C" }} strong>
                      Created at
                    </Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }}>1 Nov, 2023</Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }} italic>
                      6:16 pm
                    </Text>
                  </Col>
                  <Col xs={12} lg={6} className="mb-2">
                    <Text style={{ color: "#65728C" }} strong>
                      Last Update
                    </Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }}>4 Dec, 2023</Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }} italic>
                      6:20 pm
                    </Text>
                  </Col>
                  <Col xs={12} lg={6} className="mb-2">
                    <Text style={{ color: "#65728C" }} strong>
                      Last Activity
                    </Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }}>1 Nov, 2023</Text>
                    <br />
                    <Text style={{ color: "#7D8FB3" }} italic>
                      6:20 pm
                    </Text>
                  </Col>
                </Row>

                <h3 className="mt-4 font-bold text-black">Tags</h3>

                <div
                  className="flex flex-wrap gap-2 mt-4 lg-w-[465px]"
                  style={{ gap: "15px" }}
                >
                  {tags.map((tag, index) => (
                    <Tag
                      key={index}
                      className="bg-gray-200 text-gray-700 rounded-lg px-3 py-1 text-sm"
                      style={{
                        color: "#7D8FB3",
                        fontSize: "12px",
                        fontWeight: 700,
                        background: "#ECF0F1",
                        border: "2px solid #ECF0F1",
                        borderRadius: "15px",
                      }}
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
              </Card>
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
                bodyStyle={{ backgroundColor: "white" }}
              >
                <Table
                  columns={emailColumns.map((col) => ({
                    ...col,
                    onCell: () => ({
                      style: { padding: "1px 1px", fontSize: "10px" },
                    }),
                  }))}
                  dataSource={emailData.map((item, index) => ({
                    ...item,
                    key: index,
                  }))}
                  pagination={false}
                  bordered={false}
                  showHeader={false}
                  rowClassName="compact-row"
                  className="text-xs"
                  style={{ backgroundColor: "white", fontSize: "10px" }}
                />
              </Card>
            </Col>

            <Col xs={16} lg={8}>
              <Card
                className="card1 rounded-lg bg-blue-700 text-white shadow-md overflow-x-auto sm:ml-0"
                title={
                  <span>
                    <HistoryOutlined
                      style={{ color: "#fff", marginRight: "8px" }}
                    />
                    <Text className="text-white" style={{ color: "#fff" }}>
                      Recent Activities
                    </Text>
                  </span>
                }
                headStyle={{
                  backgroundColor: "#1565C0",
                }}
                bodyStyle={{ backgroundColor: "white" }}
              >
                {paginatedData.map((activity, index) => (
                  <div key={index} className="py-2">
                    <Text className="text-gray-500 flex items-center">
                      <span className="bg-[#686DE0] text-white w-6 h-6 flex items-center justify-center rounded-full">
                        <CalendarOutlined
                          style={{ color: "white", fontSize: "14px" }}
                        />
                      </span>
                      <span
                        className="ml-2 text-[#1565C0]"
                        style={{ fontWeight: "700" }}
                      >
                        {activity.date}
                      </span>
                    </Text>

                    {[...Array(activity.repeat || 1)].map((_, i) => (
                      <div key={i} className="relative mt-2 flex items-start">
                        <div className="relative flex flex-col items-center">
                          <EyeOutlined
                            className="bg-[#fff] text-white w-6 h-6 flex items-center justify-center rounded-full border-2"
                            style={{ borderColor: "#F5F6F7", color: "#29CC39" }}
                          />
                          {i < (activity.repeat || 1) - 1 && (
                            <div
                              className="absolute top-full w-[2px] bg-[#F5F6F7]"
                              style={{
                                height: "30px",
                                display:
                                  i < (activity.repeat || 1) - 1
                                    ? "block"
                                    : "none",
                              }}
                            />
                          )}
                        </div>

                        <div className="ml-2 flex flex-col">
                          <Text
                            className="text-xs text-[#3361FF] truncate"
                            style={{ color: "#3361FF" }}
                          >
                            {activity.description}
                          </Text>
                          <Text
                            className="text-xs text-[#1565C0] mt-1"
                            style={{ color: "#1565C0" }}
                          >
                            {activity.time}
                          </Text>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}

                <div className="flex justify-between items-center mt-4">
                  <LeftOutlined
                    onClick={handleBack}
                    style={{
                      fontSize: "20px",
                      color: currentPage === 0 ? "#ddd" : "#1565C0",
                      cursor: currentPage === 0 ? "not-allowed" : "pointer",
                    }}
                  />
                  <RightOutlined
                    onClick={handleForward}
                    style={{
                      fontSize: "20px",
                      color:
                        (currentPage + 1) * pageSize >= activityData.length
                          ? "#ddd"
                          : "#1565C0",
                      cursor:
                        (currentPage + 1) * pageSize >= activityData.length
                          ? "not-allowed"
                          : "pointer",
                    }}
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </MainLayout>
  );
}


