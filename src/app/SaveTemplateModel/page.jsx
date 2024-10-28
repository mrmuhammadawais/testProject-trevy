"use client"
import React, { useState } from "react";
import { Modal, Input, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const SaveTemplateModal = ({
  isModalOpen,
  handleClose,
  handleSave,
  title = "Save Prompt Template",

  saveButtonText = "Save Changes",
  cancelButtonText = "No Thanks",
}) => {
  const [templateName, setTemplateName] = useState("");
  const [description, setDescription] = useState("");

  const handleSaveClick = () => {
    handleSave(templateName, description);
    setTemplateName("");
    setDescription("");
  };

  return (
    <Modal
      title={null}
      open={isModalOpen}
      onCancel={handleClose}
      footer={null}
      centered
      closeIcon={
        <CloseOutlined style={{ color: "#363DD8", fontSize: "18px" }} />
      }
      bodyStyle={{ padding: 0, borderRadius: "15px", overflow: "hidden" }}
      className="custom-modal"
    >
      <div className="bg-white rounded-[15px] shadow-[0px_60px_120px_0px_rgba(38,51,77,0.05)] p-8 max-w-[90vw] sm:max-w-[400px] md:max-w-[445px] mx-auto">
        <h3 className="text-left font-bold text-[16px] mb-6 text-[#6B7A99]">
          {title}
        </h3>

        <div className="space-y-4">
          <label className="block font-bold text-[10px]-700 text-[#65728C]">
            Template Name
          </label>
          <Input
            placeholder="Sales Email"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
            className="rounded-lg py-2 px-4 border border-[#EBEBEB] focus:border-[#1565C0] text-[#3C4858]"
            style={{ fontSize: "14px" }}
          />

          <label className="block font-bold text-[10px]-700 text-[#65728C] mt-4">
            Description
          </label>
          <Input.TextArea
            placeholder="This is an sales email for the targeted audience to notify 
            the latest discounts as well as"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="rounded-lg py-2 px-4 border border-[#EBEBEB] focus:border-[#1565C0] text-[#3C4858]"
            style={{ fontSize: "14px" }}
          />
        </div>

        <div className="flex justify-end space-x-4 mt-8">
          <Button
            className="bg-white border-[2px] border-[#F5F6F7] text-[#6B7A99] w-36 h-10 rounded-[20px] font-semibold text-[14px]"
            onClick={handleClose}
          >
            {cancelButtonText}
          </Button>
          <Button
            className="bg-[#1565C0] text-white w-36 h-10 rounded-[20px] font-semibold text-[14px] border-none"
            onClick={handleSaveClick}
          >
            {saveButtonText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SaveTemplateModal;
