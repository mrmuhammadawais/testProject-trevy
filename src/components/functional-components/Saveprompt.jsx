"use client";
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
      width="415px"
      title={null}
      open={isModalOpen}
      onCancel={handleClose}
      footer={null}
      centered
      className="custom-modal"
    >
      <div className="[bg-white rounded-[15px] shadow-[0px_60px_120px_0px_rgba(38,51,77,0.05)] p-8 max-w-[90vw] sm:max-w-[400px] md:max-w-[445px] mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-left font-bold text-[16px] text-[#6B7A99]">
            {title}
          </h3>

          <div
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 cursor-pointer"
            onClick={handleClose}
          >
            <CloseOutlined style={{ color: "#363DD8", fontSize: "18px" }} />
          </div>
        </div>

        <div className="space-y-1">
          <label className="block font-bold text-[10px]-700 text-[#4D5E80]">
            Template Name
          </label>
          <Input
            placeholder="Sales Email"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
            className="rounded-lg py-2 px-4 border border-[#EBEBEB] focus:border-[#1565C0] text-[#7D8FB3]"
            style={{ fontWeight: 700, width: "100%", marginBottom: "15px",height:'45px',borderRadius:'5px', border: '2px solid #F5F6F7',boxShadow: '0px 2px 5px 0px #26334D08' }}

          />

          <label className="block font-bold text-[10px]-700 text-[#4D5E80] mt-4">
            Description
          </label>
          <Input.TextArea
            placeholder="This is a sales email for the targeted audience to notify the latest discounts as well as"
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="rounded-lg py-2 px-4 border border-[#EBEBEB] focus:border-[#1565C0] text-[#3C4858]"
            style={{ fontWeight: 700, marginBottom: "15px",borderRadius:'5px', border: '2px solid #F5F6F7',boxShadow: '0px 2px 5px 0px #26334D08' }}

         
          />
        </div>

        <div className="flex justify-end space-x-4 mt-8">
          <button
            className="bg-[#F5F6F7] border-[2px] border-[#F5F6F7] text-[#6B7A99] w-36 h-10 rounded-full font-semibold text-[14px]"
            onClick={handleClose}
          >
            {cancelButtonText}
          </button>
          <button
            className="bg-[#1565C0] text-white py-2 px-4 rounded-full w-full max-w-[180px] sm:w-auto text-sm"
            onClick={handleSaveClick}
          >
            {saveButtonText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SaveTemplateModal;
