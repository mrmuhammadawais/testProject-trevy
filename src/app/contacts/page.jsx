"use client";
import React, { useState } from "react";
import {
  Table,
  Checkbox,
  Input,
  Space,
  Button as AntButton,
  Modal,
  Form,
  Select,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  FilterOutlined,
  MailOutlined,
  SearchOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "@/components/app-components/Layout/MainLayout";
import People from "../../assets/icons/people.png";
import TemplateHeader from "@/components/functional-components/TemplateHeader";
import {
  toggleSelectTemplate,
  deleteSelectedTemplates,
} from "../../redux/taskSlice";

const initialData = [
  {
    key: "1",
    name: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        Zachary Gomez
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        i.e. I would like to generate a follow up regarding our last week
        discussion of a property visit...
      </span>
    ),
    tone: (
      <span
        style={{
          color: "#7D8FB3",
          fontSize: "12px",
          fontWeight: 700,
          background: "#ECF0F1",
          border: "2px solid #ECF0F1",
          borderRadius: "15px",
          borderWidth: "thick",
        }}
      >
        BADGE
      </span>
    ),
    toneValue: "BADGE",
  },
  {
    key: "2",
    name: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        Amanda Montgomery
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        i.e. I would like to generate a follow up regarding our last week
        discussion of a property visit...
      </span>
    ),
    tone: (
      <span
        style={{
          color: "#7D8FB3",
          fontSize: "12px",
          fontWeight: 700,
          background: "#ECF0F1",
          border: "2px solid #ECF0F1",
          borderRadius: "15px",
          borderWidth: "thick",
        }}
      >
        BADGE
      </span>
    ),
    toneValue: "BADGE",
  },
  {
    key: "3",
    name: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        Lester Holland
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        i.e. I would like to generate a follow up regarding our last week
        discussion of a property visit...
      </span>
    ),
    tone: (
      <span
        style={{
          color: "#7D8FB3",
          fontSize: "12px",
          fontWeight: 700,
          background: "#ECF0F1",
          border: "2px solid #ECF0F1",
          borderRadius: "15px",
          borderWidth: "thick",
        }}
      >
        BADGE
      </span>
    ),
    toneValue: "BADGE",
  },
  {
    key: "4",
    name: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        Max Allison
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        i.e. I would like to generate a follow up regarding our last week
        discussion of a property visit...
      </span>
    ),
    tone: (
      <span
        style={{
          color: "#7D8FB3",
          fontSize: "12px",
          fontWeight: 700,
          background: "#ECF0F1",
          border: "2px solid #ECF0F1",
          borderRadius: "15px",
          borderWidth: "thick",
        }}
      >
        BADGE
      </span>
    ),
    toneValue: "BADGE",
  },
  {
    key: "5",
    name: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        Richard Gregory
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        i.e. I would like to generate a follow up regarding our last week
        discussion of a property visit...
      </span>
    ),
    tone: (
      <span>
        <span
          style={{
            color: "#7D8FB3",
            fontSize: "12px",
            fontWeight: 700,
            background: "#ECF0F1",
            border: "2px solid #ECF0F1",
            borderRadius: "15px",
            borderWidth: "thick",
            marginRight: "8px",
          }}
        >
          BADGE
        </span>
        <span
          style={{
            color: "#7D8FB3",
            fontSize: "12px",
            fontWeight: 700,
            background: "#ECF0F1",
            border: "2px solid #ECF0F1",
            borderRadius: "15px",
            borderWidth: "thick",
          }}
        >
          BADGE
        </span>
      </span>
    ),
    toneValue: "BADGE, BADGE",
  },
];

const AudiencePage = () => {
  const dispatch = useDispatch();
  const selectedTemplates =
    useSelector((state) => state.prompt.selectedTemplates) || [];
  const [dataSource, setDataSource] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editTemplate, setEditTemplate] = useState(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [form] = Form.useForm();
  const [selectedTag, setSelectedTag] = useState(null);

  const handleReset = () => {
    setSelectedTag(null);
    setFilteredData(dataSource);
  };
  const handleSelectTemplate = (key) => {
    dispatch(toggleSelectTemplate(key));
  };

  const handleDelete = (key) => {
    setFilteredData((prevData) => prevData.filter((item) => item.key !== key));
    setDataSource((prevData) => prevData.filter((item) => item.key !== key));
  };

  const handleDeleteSelected = () => {
    setFilteredData((prevData) =>
      prevData.filter((item) => !selectedTemplates.includes(item.key))
    );
    setDataSource((prevData) =>
      prevData.filter((item) => !selectedTemplates.includes(item.key))
    );
    dispatch(deleteSelectedTemplates());
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
            background: "#ECF0F1",
            border: "2px solid #ECF0F1",
            borderRadius: "15px",
            borderWidth: "thick",
          }}
        >
          {values.tone}
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

  const handleModalCancel = () => {
    setIsModalVisible(false);
    setEditTemplate(null);
    form.resetFields();
  };
  const handleTagFilterChange = (value) => {
    setSelectedTag(value);
    if (value) {
      setFilteredData(dataSource.filter((item) => item.toneValue === value));
    } else {
      setFilteredData(dataSource);
    }
  };

  const columns = [
    {
      title: (
        <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
          Full Name
        </span>
      ),
      dataIndex: "name",
      key: "name",
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
          Email Address
        </span>
      ),
      dataIndex: "prompt",
      key: "prompt",
      width: 500,
    },
    {
      title: (
        <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
          Tags
        </span>
      ),
      dataIndex: "tone",
      key: "tone",
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
            icon={
              <MailOutlined
                style={{
                  color: "#E62E2E",
                  width: "18.75px",
                  height: "18.75px",
                }}
              />
            }
            style={{ border: "none", borderRadius: "0", padding: "0" }}
            onClick={() => handleEdit(record)}
          />
          <AntButton
            icon={<EyeOutlined style={{ color: " #29CC3980" }} />}
            style={{ border: "none", borderRadius: "0" }}
            // onClick={() => handleDelete(record.key)}
          />
        </Space>
      ),
    },
  ];

  return (
    <MainLayout>
      <div className="firstContainer">
        <div className="p-0">
          <TemplateHeader
            title="All Contacts"
            description="Create contact for your users to leverage GPT to  email systems to keep your data secure"
          />
          <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0 gap-[7px]">
            <Input
              placeholder="Search by template name"
              suffix={<SearchOutlined style={{ color: "#BFBFBF" }} />}
              className="w-full max-w-[220px] md:max-w-[200px] lg:max-w-[220px] text-sm"
              style={{
                border: "2px solid #F5F6F7",
                borderRadius: "5px",
                height: "40px",
              }}
            />

            <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center md:justify-start lg:justify-start text-sm gap-2 md:gap-1 lg:gap-1 mt-2 md:mt-0 md:mr-0 xl:mr-[296px]">
              <div className="flex items-center gap-1">
                <FilterOutlined />
                <h3 className="text-[#4D5E80] w-[50px]">Filter by</h3>
              </div>

              <Select
                value={selectedTag}
                placeholder="Tags"
                className="w-[100px] max-w-[220px] md:max-w-[200px] lg:max-w-[220px] text-sm"
                style={{
                  border: "2px solid #F5F6F7",
                  borderRadius: "5px",
                }}
                onChange={handleTagFilterChange}
                options={[
                  { value: "BADGE", label: "BADGE" },
                  { value: "AnotherTag", label: "Another Tag" },
                ]}
              />

              <Select
                placeholder="Stage"
                className="w-[100px] max-w-[220px] md:max-w-[200px] lg:max-w-[220px] text-sm"
                style={{
                  border: "2px solid #F5F6F7",
                  borderRadius: "5px",
                }}
                options={[
                  { value: "stage1", label: "Stage 1" },
                  { value: "stage2", label: "Stage 2" },
                ]}
              />
              <button
                onClick={() => {
                  setFilteredData(dataSource);
                  setSelectedTag(null);
                  {
                    handleReset;
                  }
                }}
                style={{ color: "#686DE0" }}
              >
                Reset
              </button>
            </div>

            <button
              className="bg-[#1565C0] text-white py-2 px-4 rounded-full w-full max-w-[180px] md:w-auto lg:w-auto text-sm mt-2 md:mt-0 lg:mt-0"
              onClick={handleCreateNewTemplate}
            >
              + Add Contacts
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
                  icon={
                    <DeleteOutlined style={{ marginTop: "-6px !important" }} />
                  }
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
                  icon={
                    <TagsOutlined style={{ marginTop: "-6px !important" }} />
                  }
                  className="mr-2"
                  style={{
                    color: "#ffffff",
                    borderRadius: "5px",
                    padding: "0 10px",
                  }}
                  onClick={handleDeleteSelected}
                >
                  Assign Tags
                </AntButton>
                <AntButton
                  type="text"
                  className="mr-2"
                  style={{
                    color: "#ffffff",
                    borderRadius: "5px",
                    padding: "0 10px",
                  }}
                  onClick={handleDeleteSelected}
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
        title={isCreatingNew ? "Create New Contacts" : "Edit Contacts"}
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
            tone: editTemplate?.tone?.props?.children,
          }}
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter the Full Name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email Address"
            name="prompt"
            rules={[{ required: true, message: "Please enter the Email Address" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tags"
            name="tone"
            rules={[{ required: true, message: "Please enter the Tags" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <AntButton
              style={{ background: "#1565C0", color: "#fff" }}
              htmlType="submit"
            >
              {isCreatingNew ? "Create" : "Save"}
            </AntButton>
          </Form.Item>
        </Form>
      </Modal>
    </MainLayout>
  );
};

export default AudiencePage;







