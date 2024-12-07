"use client"
import React, { useState } from "react";
import {
  Table,
  Checkbox,
  Input,
  Space,
  Button as AntButton,
  Modal,
  Form,
  Switch,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  SearchOutlined,
  CloseOutlined,
  MailOutlined,
  ArrowsAltOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "@/components/app-components/Layout/MainLayout";
import TemplateHeader from "@/components/functional-components/TemplateHeader";
import { toggleSelectTemplate, deleteSelectedTemplates } from "../../redux/taskSlice";
import "../../../src/CustomModalStyles.css";

const initialData = [
  {
    key: "1",
    name: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
       Automation 1
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        2
      </span>
    ),
    tone: (
      <span
        style={{
          color: "#7D8FB3",
          fontSize: "12px",
          fontWeight: 700,
        }}
      >
       23-12-24
      </span>
    ),
    enabled: (
      <span
        style={{
          color: "#7D8FB3", 
          fontSize: "12px",
          fontWeight: 700,
        }}
      >
       <Switch/>
      </span>
    ),
  
  },
  {
    key: "2",
    name: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
       Automation 2
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        2
      </span>
    ),
    tone: (
      <span
        style={{
          color: "#7D8FB3",
          fontSize: "12px",
          fontWeight: 700,
        }}
      >
       23-12-24
      </span>
    ),
    enabled: (
      <span
        style={{
          color: "#7D8FB3", 
          fontSize: "12px",
          fontWeight: 700,
        }}
      >
       <Switch/>
      </span>
    ),
  
  },
  {
    key: "3",
    name: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
       Automation 3
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        2
      </span>
    ),
    tone: (
      <span
        style={{
          color: "#7D8FB3",
          fontSize: "12px",
          fontWeight: 700,
        }}
      >
       23-12-24
      </span>
    ),
    enabled: (
      <span
        style={{
          color: "#7D8FB3", 
          fontSize: "12px",
          fontWeight: 700,
        }}
      >
       <Switch/>
      </span>
    ),
  
  },
  {
    key: "4",
    name: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
       Automation 4
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        2
      </span>
    ),
    tone: (
      <span
        style={{
          color: "#7D8FB3",
          fontSize: "12px",
          fontWeight: 700,
        }}
      >
       23-12-24
      </span>
    ),
    enabled: (
      <span
        style={{
          color: "#7D8FB3", 
          fontSize: "12px",
          fontWeight: 700,
        }}
      >
       <Switch/>
      </span>
    ),
  
  },
  {
    key: "5",
    name: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
       Automation 5
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        2
      </span>
    ),
    tone: (
      <span
        style={{
          color: "#7D8FB3",
          fontSize: "12px",
          fontWeight: 700,
        }}
      >
       23-12-24
      </span>
    ),
    enabled: (
      <span
        style={{
          color: "#7D8FB3", 
          fontSize: "12px",
          fontWeight: 700,
        }}
      >
       <Switch/>
      </span>
    ),
  
  },
  {
    key: "6",
    name: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
       Automation 6
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        2
      </span>
    ),
    tone: (
      <span
        style={{
          color: "#7D8FB3",
          fontSize: "12px",
          fontWeight: 700,
        }}
      >
       23-12-24
      </span>
    ),
    enabled: (
      <span
        style={{
          color: "#7D8FB3", 
          fontSize: "12px",
          fontWeight: 700,
        }}
      >
       <Switch/>
      </span>
    ),
  
  },
  
 
];

const AllAutomation = () => {
  const dispatch = useDispatch();
  const selectedTemplates =
    useSelector((state) => state.prompt.selectedTemplates) || [];
  const [dataSource, setDataSource] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editTemplate, setEditTemplate] = useState(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [form] = Form.useForm();
  const [isEnabled, setIsEnabled] = useState(false);
  const [viewedTemplate, setViewedTemplate] = useState(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const handleToggle = (checked) => {
    setIsEnabled(checked);
  };

  const handleReset = () => {
    setFilteredData(dataSource);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setEditTemplate(null);
    form.resetFields();
  };

  const handleSelectTemplate = (key) => {
    dispatch(toggleSelectTemplate(key));
  };

  const handleDelete = (key) => {
    Modal.confirm({
      title: "Are You Sure?",
      content: (
        <div style={{ color: "#6B7A99", fontSize: "14px" }}>
          <p>
            Deleting Specific Automations will also delete all associated data.{" "}
          </p>
        </div>
      ),
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      okButtonProps: {
        style: {
          backgroundColor: "#1565C0",
          color: "#fff",
          border: "none",
          borderRadius: "20px",
        },
        icon: null,
      },
      cancelButtonProps: {
        style: {
          background: "#F5F6F7",
          border: "none",
          borderRadius: "20px",
          color: "#6B7A99",
        },
      },
      onOk() {
        setFilteredData((prevData) =>
          prevData.filter((item) => item.key !== key)
        );
        setDataSource((prevData) =>
          prevData.filter((item) => item.key !== key)
        );
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleDeleteSelected = () => {
    Modal.confirm({
      title: "Are You Sure?",
      content: (
        <div style={{marginTop:'23px'}}>
          <p>
            Deleting selected automations will also delete all associated data
          </p>
        </div>
      ),
      okText: "Delete",
      cancelText: "Cancel",
      onOk() {
        setFilteredData((prevData) =>
          prevData.filter((item) => !selectedTemplates.includes(item.key))
        );
        setDataSource((prevData) =>
          prevData.filter((item) => !selectedTemplates.includes(item.key))
        );
        dispatch(deleteSelectedTemplates());
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleDeselectTemplate = (key) => {
    dispatch(toggleSelectTemplate(key));
  };

  const handleEdit = (record) => {
    setEditTemplate(record);
    form.setFieldsValue({
      name: record.name.props.children,
      prompt: record.prompt.props.children,
      tone: record.tone.props.children,
    });
    setIsCreatingNew(false);
    setIsModalVisible(true);
  };

  const handleCreateNewTemplate = () => {
    setIsCreatingNew(true);
    setEditTemplate(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleModalOk = (values) => {
    const styledValues = {
      name: (
        <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
          {values.name}
        </span>
      ),
      prompt: (
        <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
          {values.prompt}
        </span>
      ),
      tone: (
        <span
          style={{
            color: "#7D8FB3",
            fontSize: "12px",
            fontWeight: 700,
           
          }}
        >
          {values.tone}
        </span>
      ),
      enabled: (
        <span
          style={{
            color: "#7D8FB3",
            fontSize: "12px",
            fontWeight: 700,
           
          }}
        >
          <Switch/>
        </span>
      ),
    
    };
    if (isCreatingNew) {
      const newTemplate = {
        key: `${dataSource.length + 1}`,
        ...styledValues,
      };
      setDataSource((prevData) => [...prevData, newTemplate]);
      setFilteredData((prevData) => [...prevData, newTemplate]);
    } else {
      setDataSource((prevData) =>
        prevData.map((item) =>
          item.key === editTemplate.key ? { ...item, ...styledValues } : item
        )
      );
      setFilteredData((prevData) =>
        prevData.map((item) =>
          item.key === editTemplate.key ? { ...item, ...styledValues } : item
        )
      );
    }

    setIsModalVisible(false);
    setEditTemplate(null);
    form.resetFields();
  };

  const handleViewDetails = (record, event) => {
    setViewedTemplate(record);
    setModalPosition({ x: event.clientX - 50, y: event.clientY - 93 });
  };

  const closeModal = () => {
    setViewedTemplate(null);
  };

  const columns = [
    {
      title: (
        <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
          Automation Name
        </span>
      ),
      dataIndex: "name",
      key: "name",
      width: 400,
      render: (text, record) => (
        <Checkbox
          onChange={() => handleSelectTemplate(record.key)}
          checked={selectedTemplates.includes(record.key)}
        >
          {text}
        </Checkbox>
      ),
    },
    {
      title: (
        <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
          Created Date
        </span>
      ),
      dataIndex: "prompt",
      key: "prompt",
      width: 500,
    },
    {
      title: (
        <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
          Time Runs
        </span>
      ),
      dataIndex: "tone",
      key: "tone",
      width: 500,
    },
    {
      title: (
        <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
          Enable/Disable Toggle
        </span>
      ),
      dataIndex: "enabled",
      key: "prompt",
      width: 500,
    },
    {
      title: (
        <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
          Actions
        </span>
      ),
      key: "actions",
      render: (text, record) => (
        <Space>
          <AntButton
            icon={<EditOutlined style={{ color: "#3361FF" }} />}
            style={{ border: "none", padding: "0" }}
            onClick={() => handleEdit(record)}
          />
          <AntButton
            icon={<DeleteOutlined style={{ color: "#FF7979" }} />}
            style={{ border: "none" }}
            onClick={() => handleDelete(record.key)}
          />
          <EyeOutlined
            style={{ color: "#29CC3980", cursor: "pointer" }}
            onClick={(event) => handleViewDetails(record, event)}
          />
        </Space>
      ),
    },
  ];

  const handleCancelSelected = () => {
    selectedTemplates.forEach((key) => {
      handleDeselectTemplate(key);
    });
  };

  return (
    <MainLayout>
      <div className="firstContainer " style={{height:'1000px'}}>
        <div className="p-0">
          <TemplateHeader
            title="Automation Journeys"
            description="Create contact for your users to leverage GPT to email systems to keep your data secure"
          showImage={false}
          marginTop={30}

          />
          <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0 gap-[7px]">
            <Input
              placeholder="Search by automation name"
              suffix={<SearchOutlined style={{ color: "#BFBFBF" }} />}
              className="w-full max-w-[220px] md:max-w-[200px] lg:max-w-[220px] text-sm"
              style={{
                border: "2px solid #F5F6F7",
                borderRadius: "5px",
                height: "40px",
              }}
            />
            <button
              className="bg-[#1565C0] text-white py-2 px-4 rounded-full w-full max-w-[200px] md:w-auto lg:w-auto text-sm mt-2 md:mt-0 lg:mt-0"
              onClick={handleCreateNewTemplate}
            >
              + Create New Automation
            </button>
          </div>
          {selectedTemplates.length > 0 && (
            <div
              className="flex items-center justify-between p-2"
              style={{
                backgroundColor: "#1565C0",
                color: "#ffffff",
                borderRadius: "5px",
                width: "100%",
                height: "40px",
                marginBottom: "12px",
                border: "none",
              }}
            >
              <span className="text-sm">
                {selectedTemplates.length} item
                {selectedTemplates.length > 1 ? "s" : ""} selected
              </span>
              <div className="flex items-center">
                <AntButton
                  type="text"
                  icon={<DeleteOutlined style={{ marginTop: "-6px !important" }} />}
                  className="mr-2"
                  style={{
                    color: "#ffffff",
                    borderRadius: "5px",
                    padding: "0 10px",
                  }}
                  onClick={handleDeleteSelected}
                >
                  Delete
                </AntButton>
                <AntButton
                  type="text"
                  className="mr-2"
                  style={{
                    color: "#ffffff",
                    borderRadius: "5px",
                    padding: "0 10px",
                  }}
                  onClick={handleCancelSelected}
                >
                  Cancel
                </AntButton>
              </div>
            </div>
          )}
          <div className="responsive-width bg-white shadow-md rounded-md lg:px-4">
            <Table
              dataSource={filteredData}
              columns={columns}
              pagination={false}
              className="responsive-width"
              scroll={{ x: "100%" }}
              rowClassName={(record) =>
                selectedTemplates.includes(record.key) ? "selected-row" : ""
              }
            />
          </div>
        </div>
      </div>
      <Modal
        title={isCreatingNew ? "Create New Template" : "Edit Template"}
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleModalOk}
          initialValues={{
            name: editTemplate?.name?.props?.children,
            prompt: editTemplate?.prompt?.props?.children,
            tone: editTemplate?.toneValue,
            enabled: editTemplate?.enabled,
            
          }}
        >
          <Form.Item
            label="Automation"
            name="name"
            rules={[{ required: true, message: "Please enter the Automation" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Created Date"
            name="prompt"
            rules={[{ required: true, message: "Please enter the Created Date" }]}
            >
            <Input />
          </Form.Item>
          <Form.Item
            label="Time Runs"
            name="tone"
            rules={[{ required: true, message: "Please enter the Time Runs" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="enabled"
            name="enabled"
            rules={[{ required: true, message: "Please enter the Time Runs" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item style={{ display: "flex", justifyContent: "flex-end" }}>
            <AntButton
              style={{ background: "#1565C0", color: "#fff" }}
              htmlType="submit"
            >
              {isCreatingNew ? "Create" : "Save"}
            </AntButton>
          </Form.Item>
        </Form>
      </Modal>

      {viewedTemplate && (
        <Modal
          visible={!!viewedTemplate}
          onCancel={closeModal}
          footer={null}
          width="55%"
          height="594px"
          left="70px"
          bodyStyle={{ padding: 0, margin: 0 }}
          style={{
            borderRadius:'0px',
            height: "100vh",
            position: "fixed",
            top: modalPosition.y + "px",
            left: modalPosition.x + "px",
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            transform: "translate(-100%, 0)", 
            zIndex: 1000, 
          }}
          className="custom-modal"
        >
          <div
            style={{
              backgroundColor: "#1565C0",
              padding: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px',
            }}
          >
            <span style={{ fontSize: "16px", fontWeight: 600, color: '#FFFFFF' }}>
              <MailOutlined style={{ marginRight: "6px", transform: "rotate(82deg)" }} />
              Marketing our product to customer
            </span>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AntButton
                type="text"
                icon={<ArrowsAltOutlined />}
                style={{
                  color: "#363DD8",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0,
                  marginRight: "10px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
                }}
              />
              <AntButton
                type="text"
                icon={<CloseOutlined />}
                style={{
                  color: "#363DD8",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 0,
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", 
                }}
                onClick={closeModal}
              />
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#fff",
              border: '1px solid #EBEBEB',
              position: 'relative',
            }}
          >
            <div style={{
              borderBottom: "1px solid #ccc",
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -1,
            }} />
            <div style={{
              padding: "16px",
              position: 'relative',
              zIndex: 1,
            }}>
              <div style={{ marginBottom: "16px", padding: "8px 0", color: '#4D5E80', borderBottom: "1px solid #EBEBEB", fontWeight: '500' }}>
                To: Lee Jordan
              </div>
              <div style={{ marginBottom: "16px", padding: "8px 0", color: '#4D5E80', borderBottom: "1px solid #EBEBEB", fontWeight: '500' }}>
                Marketing our products to Customer
              </div>
              <div style={{ color: "#65728C", fontSize: '12px', fontWeight: '500' }}>
                <p>Dear [Gorge],</p>
                <br/>
                <p>
                  I hope this email finds you well. We wanted to express our sincere gratitude for choosing to visit our property recently. We value your patronage and trust that your experience was enjoyable.
                </p>
                <br/>
                <p>
                  We would love to hear more about your visit and any feedback you might have. Your insights are essential to us in enhancing our services and ensuring that every guest has a memorable experience.
                </p>
                <br/>
                <p>
                  Thank you once again for choosing us, and we look forward to welcoming you back soon.
                </p>
                <p>
                  Best Regards, <br />
                  [Your Name]
                </p>
              </div>
            </div>
          </div>
        </Modal>
      )} 

    </MainLayout>
  );
};

export default AllAutomation;