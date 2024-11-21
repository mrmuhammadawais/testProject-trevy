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
} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import MainLayout from "@/components/app-components/Layout/MainLayout";
import TemplateHeader from "@/components/functional-components/TemplateHeader";
import { useDispatch, useSelector } from "react-redux";
import { toggleSelectTemplate, deleteSelectedTemplates } from "../../redux/taskSlice";

const initialData = [
  {
    key: "1",
    name: (
      <span style={{ color: "#686DE0", fontSize: "12px", fontWeight: 700 }}>
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
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        Appreciation 😄
      </span>
    ),
  },
  {
    key: "2",
    name: (
      <span style={{ color: "#686DE0", fontSize: "12px", fontWeight: 700 }}>
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
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        Formal 😄
      </span>
    ),
  },
  {
    key: "3",
    name: (
      <span style={{ color: "#686DE0", fontSize: "12px", fontWeight: 700 }}>
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
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        Cool 😄
      </span>
    ),
  },
  {
    key: "4",
    name: (
      <span style={{ color: "#686DE0", fontSize: "12px", fontWeight: 700 }}>
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
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        Cool 😄
      </span>
    ),
  },
  {
    key: "5",
    name: (
      <span style={{ color: "#686DE0", fontSize: "12px", fontWeight: 700 }}>
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
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        Help 😄
      </span>
    ),
  },
];

const TemplatePage = () => {
  const dispatch = useDispatch();
  const selectedTemplates =
    useSelector((state) => state.prompt.selectedTemplates) || [];
  const [dataSource, setDataSource] = useState(initialData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editTemplate, setEditTemplate] = useState(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [form] = Form.useForm();

  const handleSelectTemplate = (key) => {
    dispatch(toggleSelectTemplate(key));
  };

  const handleDeselectTemplate = (key) => {
    dispatch(toggleSelectTemplate(key));
  };

  const handleDelete = (key) => {
    setDataSource((prevData) => prevData.filter((item) => item.key !== key));
  };

  const handleDeleteSelected = () => {
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
        <span style={{ color: "#686DE0", fontSize: "12px", fontWeight: 700 }}>
          {values.name}
        </span>
      ),
      prompt: (
        <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
          {values.prompt}
        </span>
      ),
      tone: (
        <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
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
    } else {
      setDataSource((prevData) =>
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
    console.log("handleModalCancel called");
    setIsModalVisible(false);
    setEditTemplate(null);
    form.resetFields();
  };

  const columns = [
    {
      title: (
        <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
          Template Title
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
          Input Prompt
        </span>
      ),
      dataIndex: "prompt",
      key: "prompt",
    },
    {
      title: (
        <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
          Tone
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
              <EditOutlined
                style={{
                  color: "#3361FF",
                  width: "18.75px",
                  height: "18.75px",
                }}
              />
            }
            style={{ border: "none", borderRadius: "0", padding: "0" }}
            onClick={() => handleEdit(record)}
          />
          <AntButton
            icon={<DeleteOutlined style={{ color: "#FF7979" }} />}
            style={{ border: "none", borderRadius: "0" }}
            onClick={() => handleDelete(record.key)}
          />
        </Space>
      ),
    },
  ];

  const handleCancelSelected = () => {
    console.log("handleCancelSelected called");
    selectedTemplates.forEach((key) => {
      handleDeselectTemplate(key);
    });
  };

  return (
    <MainLayout>
      <div className="firstContainer">
        <div className="p-0">
          <TemplateHeader title="All Templates" description="Create contact for your users to leverage GPT to email systems to keep your data secure" />
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0">
            <Input.Search
              placeholder="Search by template name"
              className="w-full max-w-[180px] sm:w-auto text-sm"
              style={{
                border: "2px",
                borderRadius: "5px",
              }}
            />
            <button
              className="bg-[#1565C0] text-white py-2 px-4 rounded-full w-full max-w-[180px] sm:w-auto text-sm"
              onClick={handleCreateNewTemplate}
            >
              + Create New Template
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
              dataSource={dataSource}
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
        >
          <Form.Item
            label="Template Title"
            name="name"
            rules={[{ required: true, message: "Please enter the title" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Input Prompt"
            name="prompt"
            rules={[{ required: true, message: "Please enter the prompt" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tone"
            name="tone"
            rules={[{ required: true, message: "Please enter the tone" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Space>
              <AntButton style={{ background: '#1565C0', color: '#fff' }} htmlType="submit">
                {isCreatingNew ? "Create" : "Save"}
              </AntButton>
              <AntButton onClick={handleModalCancel}>
                Cancel
              </AntButton>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </MainLayout>
  );
};

export default TemplatePage;