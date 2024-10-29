
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
} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "@/components/app-components/Layout/MainLayout";
import People from "../../assets/icons/people.png";
import {
  toggleSelectTemplate,
  deleteSelectedTemplates,
} from "../../redux/taskSlice";

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

  return (
    <MainLayout>
      <div className="p-0">
          

        <div
          className="responsive-width bg-white shadow-md p-4 md:p-6 rounded-md relative mb-4 md:mb-6"
          style={{ minHeight: "200px" }}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className=" mb-2 md:mb-0 text-center md:text-left">
              <h2 className="text-[#4D5E80] font-bold text-lg md:text-xl">
                All Templates
              </h2>
              <p className="text-[#4D5E80] font-medium text-sm md:text-base">
                Create content for your users to leverage GPT for secure email
                communication.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src={People}
                alt="People"
                width={150}
                height={100}
                className="w-[150px] md:w-[200px]"
              />
            </div>
          </div>
        </div>
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
        <div className="responsive-width bg-white shadow-md rounded-md w-full hide-tone-column">
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            className="w-full"
            scroll={{ x: "100%" }}
          />
        </div> 
        
        <Modal
          title={isCreatingNew ? "Create New Template" : "Edit Template"}
          style={{ color: "#4D5E80 !important" }}
          visible={isModalVisible}
          onOk={() => form.submit()}
          onCancel={handleModalCancel}
        >
          <Form
            form={form}
            initialValues={{
              name: editTemplate?.name?.props.children || "",
              prompt: editTemplate?.prompt?.props.children || "",
              tone: editTemplate?.tone?.props.children || "",
            }}
            onFinish={handleModalOk}
          >
            <Form.Item
              name="name"
              label="Template Title"
              style={{ color: "#4D5E80" }}
              rules={[{ required: true, message: "Please input the title!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="prompt"
              label="Input Prompt"
              rules={[{ required: true, message: "Please input the prompt!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="tone"
              label="Tone"
              rules={[{ required: true, message: "Please input the tone!" }]}
            >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </MainLayout>
  );
};

export default TemplatePage;
