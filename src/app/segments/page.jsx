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
} from "antd";
import {
  CalculatorOutlined,
  MailOutlined,
  PhoneOutlined,
  CalendarOutlined,
  EyeOutlined,
  DeleteOutlined,
  HistoryOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import MainLayout from "@/components/app-components/Layout/MainLayout";
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
    preview: "Dear Henry Paul, We are introducing..",
    date: "19 Mar",
  },
  {
    sender: "Henry Paul",
    subject: "Automate your system with trevy.io",
    preview: "Dear Henry Paul, We are introducing..",
    date: "19 Mar",
  },
  {
    sender: "Henry Paul",
    subject: "Automate your system with trevy.io",
    preview: "Dear Henry Paul, We are introducing..",
    date: "19 Mar",
  },
  {
    sender: "Henry Paul",
    subject: "Automate your system with trevy.io",
    preview: "Dear Henry Paul, We are introducing..",
    date: "19 Mar",
  },
  {
    sender: "Henry Paul",
    subject: "Automate your system with trevy.io",
    preview: "Dear Henry Paul, We are introducing..",
    date: "19 Mar",
  },
];

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
  },
];

export default function Segments() {
  const emailColumns = [
    {
      title: "",
      dataIndex: "checkbox",
      key: "checkbox",
      render: () => (
        <input
          type="checkbox"
          className="border-2 border-gray-300 rounded-sm"
          // style={{ padding: "10px" }}
          style={{
            color: "#fff",
            borderColor: "#F2F3F5",
            borderWidth: "2px",
            borderStyle: "solid",
            borderRadius: "5px",
            padding: "10px",
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
            marginLeft: "-24px",
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
            marginLeft: "-59px",
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
              style={{ fontSize: "12px", color: "#FF6B6B" }}
            />
            <MailOutlined
              className="text-blue-700"
              style={{ fontSize: "12px", color: "#1E4D8E" }}
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <MainLayout>
      <div className="bg-gray-100 p-6 min-h-screen flex justify-center">
        <Row gutter={16} className="w-full max-w-6xl space-y-4 lg:space-y-0">
          <Col xs={24} lg={16} className="space-y-2">
            <Card className="card1 shadow-md rounded-lg">
              <Row className="flex-wrap lg:flex-nowrap" justify="space-between">
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
                  <button className="bg-[#1565C0] text-white py-1 px-4 rounded-full mt-3">
                    Write an out-reach email
                  </button>
                </Col>

                <Col className="hidden lg:block">
                  <div className="h-24 border-r-2 border-gray-300 mx-4"></div>
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

              <Row gutter={16} className="text-gray-600 mt-4 text-xs flex-wrap">
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
              <Row gutter={16} className="text-gray-600 mt-4 text-xs flex-wrap">
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
              <Row gutter={16} className="text-gray-600 mt-4 text-xs flex-wrap">
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

              <div className="flex flex-wrap gap-2 mt-4 lg-w-[465px]">
                {tags.map((tag, index) => (
                  <Tag
                    key={index}
                    className="bg-gray-200 text-gray-700 rounded-lg px-3 py-1 text-sm"
                    style={{
                      color: "#7D8FB3",
                      fontSize: "12px",
                      fontWeight: 700,
                      background: "#ECF0F1",
                      border: "7px solid #ECF0F1",
                      borderRadius: "15px",
                    }}
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
            </Card>

            <Card className="card1 rounded-lg p-0 ml-[-10px] overflow-hidden bg-white shadow-md overflow-x-auto sm:ml-0">
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
              {activityData.map((activity, index) => (
                <div key={index} className="py-2">
                  <Text className="text-gray-500 flex items-center">
                    <span className="bg-[#686DE0] text-white w-6 h-6 flex items-center justify-center rounded-full">
                      <CalendarOutlined
                        style={{ color: "white", fontSize: "14px" }}
                      />{" "}
                    </span>
                    <span
                      className="ml-2 text-[#1565C0]"
                      style={{ fontWeight: "700" }}
                    >
                      {activity.date}
                    </span>
                  </Text>

                  {[...Array(activity.repeat)].map((_, i) => (
                    <div key={i} className="mt-2">
                      <div className="flex items-center">
                        <EyeOutlined
                          className="bg-[#fff] text-white w-6 h-6 flex items-center justify-center rounded-full border-2 "
                          style={{ borderColor: "#F5F6F7", color: "#29CC39" }}
                        />

                        <Text
                          className="text-xs text-white truncate"
                          style={{ color: "#3361FF " }}
                        >
                          {activity.description}
                        </Text>
                      </div>
                      <Text
                        className="text-xs text-[#1565C0] ml-6 "
                        style={{ color: "#1565C0" }}
                      >
                        {activity.time}
                      </Text>
                    </div>
                  ))}
                </div>
              ))}
            </Card>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
}