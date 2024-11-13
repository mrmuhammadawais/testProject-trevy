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
  Row,
  Col,
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
import tagsImg from "../../assets/icons/tagsImg.png";
import newtagImg from "../../assets/icons/newtagImg.png"
import TemplateHeader from "@/components/functional-components/TemplateHeader";
import {
  toggleSelectTemplate,
  deleteSelectedTemplates,
} from "../../redux/taskSlice";

const initialData = [
  {
    key: "1",
    name: (
      <span style={{ color: "#686DE0", fontSize: "12px", fontWeight: 700 }}>
       11-2-2024
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
       10
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
      <span style={{ color: "#686DE0", fontSize: "12px", fontWeight: 700 }}>
        11-2-2024
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
       10
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
      <span style={{ color: "#686DE0", fontSize: "12px", fontWeight: 700 }}>
      11-2-2024
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
       10
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
      <span style={{ color: "#686DE0", fontSize: "12px", fontWeight: 700 }}>
       11-2-2024
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
      10
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
      <span style={{ color: "#686DE0", fontSize: "12px", fontWeight: 700 }}>
        11-2-2024
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        10
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
    }
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
            Tags
          </span>
        ),
        dataIndex: "tone",
        key: "tone",
        width:400,
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
      dataIndex: "name",
      key: "name",
      width:500,
    
    },
    {
      title: (
        <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
           Contacts Assigned
        </span>
      ),
      dataIndex: "prompt",
      key: "prompt",
      width:500,
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
          <EyeOutlined style={{color:'#29CC3980'}}/>
        </Space> 
      
      ),
    },
  ];

  return (
    <MainLayout>
      <div className="firstContainer">
        <div className="p-0">
        <TemplateHeader
  title="Tags"
  description="We've implemented additional security measures to safeguard your data."
 Image={tagsImg}
           
>
 
</TemplateHeader>

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

       

            <button
              className="bg-[#1565C0] text-white py-2 px-4 rounded-full w-full max-w-[180px] md:w-auto lg:w-auto text-sm mt-2 md:mt-0 lg:mt-0"
              onClick={handleCreateNewTemplate}
            >
              + Add New Tag
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
            tone: editTemplate?.tone?.props?.children,
          }}
        >
          <Form.Item
            label="Created Date"
            name="name"
            rules={[{ required: true, message: "Please enter the created Date" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Contacts Assigned"
            name="prompt"
            rules={[{ required: true, message: "please Enter the Contacts Assigned" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tags"
            name="tone"
            rules={[{ required: true, message: "Please enter the tag" }]}
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









