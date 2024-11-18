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
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "@/components/app-components/Layout/MainLayout";
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
        Zachary Gomez
      </span>
    ),
    prompt: (
      <span style={{ color: "#7D8FB3", fontSize: "12px", fontWeight: 700 }}>
        i.e. I would like to generate a follow up regarding our last week
        discussion of a property visit...
      </span>
    ),
    tone: [
      <span
        key="BADGE"
        style={{
          color: "#7D8FB3",
          fontSize: "12px",
          fontWeight: 700,
          background: "#ECF0F1",
          border: "2px solid #ECF0F1",
          borderRadius: "15px",
          padding: "2px 8px",
          marginRight: "5px",
        }}
      >
        BADGE
      </span>,
    ],
    toneValue: ["BADGE"],
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
    tone: [
      <span
        key="VALUE1"
        style={{
          color: "#7D8FB3",
          fontSize: "12px",
          fontWeight: 700,
          background: "#ECF0F1",
          border: "2px solid #ECF0F1",
          borderRadius: "15px",
          padding: "2px 8px",
          marginRight: "5px",
        }}
      >
       BADGE
      </span>,
    ],
    toneValue: ["BADGE"],
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
    tone: [
      <span
        key="VALUE2"
        style={{
          color: "#7D8FB3",
          fontSize: "12px",
          fontWeight: 700,
          background: "#ECF0F1",
          border: "2px solid #ECF0F1",
          borderRadius: "15px",
          padding: "2px 8px",
          marginRight: "5px",
        }}
      >
        BADGE
      </span>,
    ],
    toneValue: ["BADGE"],

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
    tone: [
      <span
        key="VALUE2"
        style={{
          color: "#7D8FB3",
          fontSize: "12px",
          fontWeight: 700,
          background: "#ECF0F1",
          border: "2px solid #ECF0F1",
          borderRadius: "15px",
          padding: "2px 8px",
          marginRight: "5px",
        }}
      >
        BADGE
      </span>,
    ],
    toneValue: ["BADGE"],
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
    tone: [
      <span
        key="VALUE2"
        style={{
          color: "#7D8FB3",
          fontSize: "12px",
          fontWeight: 700,
          background: "#ECF0F1",
          border: "2px solid #ECF0F1",
          borderRadius: "15px",
          padding: "2px 8px",
          marginRight: "5px",
        }}
      >
        BADGE
      </span>,
    ],
    toneValue: ["BADGE"],
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
  const [selectedTag, setSelectedTag] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const options = [
    { value: "VALUE1", label: "Value 1", tag: "Tag A" },
    { value: "VALUE2", label: "Value 2", tag: "Tag B" },
    { value: "VALUE3", label: "Value 3", tag: "Tag C" },
    { value: "VALUE4", label: "Value 4", tag: "Tag D" },
    { value: "VALUE5", label: "Value 5", tag: "Tag E" },
    { value: "VALUE6", label: "Value 6", tag: "Tag F" },
  ];

  const handleAssignTaskClick = () => {
    setShowOptions(!showOptions);
  };

  const handleReset = () => {
    setSelectedTag([]);
    setFilteredData(dataSource);
  };

  const handleSelectTemplate = (key) => {
    dispatch(toggleSelectTemplate(key));
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
      tone: record.toneValue,
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
    if (value && value.length > 0) {
      setFilteredData(
        dataSource.filter((item) =>
          item.toneValue.some((tag) => value.includes(tag))
        )
      );
    } else {
      setFilteredData(dataSource);
    }
  };

  const handleAssignTags = () => {
    if (selectedTag && selectedTag.length > 0) {
      setDataSource((prevData) =>
        prevData.map((item) => {
          if (selectedTemplates.includes(item.key)) {
            const newToneValue = Array.from(
              new Set([...item.toneValue, ...selectedTag])
            );
            return {
              ...item,
              tone: newToneValue.map((tag) => (
                <span
                  key={tag}
                  style={{
                    color: "#7D8FB3",
                    fontSize: "12px",
                    fontWeight: 700,
                    background: "#ECF0F1",
                    border: "2px solid #ECF0F1",
                    borderRadius: "15px",
                    padding: "2px 8px",
                    marginRight: "5px",
                  }}
                >
                  {tag}
                </span>
              )),
              toneValue: newToneValue,
            };
          }
          return item;
        })
      );

      setFilteredData((prevData) =>
        prevData.map((item) => {
          if (selectedTemplates.includes(item.key)) {
            const newToneValue = Array.from(
              new Set([...item.toneValue, ...selectedTag])
            );
            return {
              ...item,
              tone: newToneValue.map((tag) => (
                <span
                  key={tag}
                  style={{
                    color: "#7D8FB3",
                    fontSize: "12px",
                    fontWeight: 700,
                    background: "#ECF0F1",
                    border: "2px solid #ECF0F1",
                    borderRadius: "15px",
                    padding: "2px 8px",
                    marginRight: "5px",
                  }}
                >
                  {tag}
                </span>
              )),
              toneValue: newToneValue,
            };
          }
          return item;
        })
      );

      setSelectedTag([]);
      setShowOptions(false);
    }
  };

  const columns = [
    {
      title: (
        <span style={{ color: "#686DE0", fontSize: "12px", fontWeight: 700 }}>
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
      render: (text) => <span>{text}</span>,
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
          />
        </Space>
      ),
    },
  ];

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="firstContainer">
        <div className="p-0">
          <TemplateHeader
            title="All Contacts"
            description="Create contact for your users to leverage GPT to email systems to keep your data secure"
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
                mode="multiple"
                value={selectedTag}
                placeholder="Tags"
                className="w-[100px] max-w-[220px] md:max-w-[200px] lg:max-w-[220px] text-sm"
                style={{
                  border: "2px solid #F5F6F7",
                  borderRadius: "5px",
                }}
                onChange={handleTagFilterChange}
                options={options}
              />

              <Select
                placeholder="Stage"
                className="w-[100px] max-w-[220px] md:max-w-[200px] lg:max-w-[220px] text-sm"
                style={{
                  border: "2px solid #F5F6F7",
                  borderRadius: "5px",
                }}
                options={[{ value: "stage1", label: "Stage 1" }]}
              />
              <button onClick={handleReset} style={{ color: "#686DE0" }}>
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
                height: "auto", 
                marginBottom: "12px",
                border: "none",
                flexWrap: "wrap", 
              }}
            >
              <span className="text-sm flex items-center">
                {selectedTemplates.length} item
                {selectedTemplates.length > 1 ? "s" : ""} selected
              </span>
              <div className="flex items-center flex-wrap">
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
                  onClick={handleAssignTaskClick}
                >
                  Assign Tags
                </AntButton>

                {showOptions && (
                  <div
                    style={{
                      position: "absolute",
                      marginTop: "243px",
                      zIndex: "1",
                      background: "white",
                      padding: "10px",
                      borderRadius: "5px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      width: "200px",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <AntButton
                        type="primary"
                        style={{ width: '30%', color: '#555ACC', fontSize: '12px', fontWeight: '700', background: 'none', outline: 'none' }}
                        onClick={handleAssignTags}
                      >
                        Save
                      </AntButton>
                    </div>
                    <input
                      type="text"
                      placeholder="Search for tag here"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{
                        padding: "5px",
                        marginBottom: "10px",
                        width: "100%",
                        boxSizing: "border-box",
                        border: "2px solid #F5F6F7",
                        borderRadius: "5px",
                        color: "#000000",
                      }}
                      className="custom-input"
                    />

                    <style>
                      {`
                        .custom-input::placeholder {
                          color: #C8CDD6;
                          font-size: 10px;
                          font-weight: 700;
                        }
                        .custom-input:focus {
                          outline: none;
                          border: 2px solid #F5F6F7;
                          color: #000;
                        }
                      `}
                    </style>

                    {filteredOptions.map((option) => (
                      <label
                        key={option.value}
                        style={{ display: "block", marginBottom: "5px" }}
                      >
                        <Checkbox
                          value={option.value}
                          checked={selectedTag.includes(option.value)}
                          onChange={(e) =>
                            setSelectedTag((prevTags) =>
                              e.target.checked
                                ? [...prevTags, option.value]
                                : prevTags.filter((tag) => tag !== option.value)
                            )
                          }
                        >
                          {option.label}
                        </Checkbox>
                      </label>
                    ))}
                  </div>
                )}
                <AntButton
                  type="text"
                  className="mr-2"
                  style={{
                    color: "#ffffff",
                    borderRadius: "5px",
                    padding: "0 10px",
                  }}
                  onClick={handleAssignTaskClick}
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
            tone: editTemplate?.toneValue,
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
            rules={[
              { required: true, message: "Please enter the Email Address" },
            ]}
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