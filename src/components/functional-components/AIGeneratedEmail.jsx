import React, { useState } from "react";
import { Card } from "antd";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import SaveTemplateModal from "@/app/SaveTemplateModel/page";

export const AIGeneratedEmail = ({ generatedEmail }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveTemplate = () => {
    handleCloseModal();
  };

  return (
    <Card className="w-full max-w-[700px]  mx-auto">
      <div
        className="flex justify-between items-center"
        style={{ borderBottom: "1px solid #EBEBEB", paddingBottom: "8px" }}
      >
        <h3 className="font-bold mb-0">AI Generated Email Template</h3>
        <div className="flex space-x-2">
          <LikeOutlined
            style={{ color: "#0BCA07", fontSize: "18px", cursor: "pointer" }}
            onClick={() => console.log("Thumbs up clicked!")}
          />
          <DislikeOutlined
            style={{ color: "#E35B20", fontSize: "18px", cursor: "pointer" }}
            onClick={() => console.log("Thumbs down clicked!")}
          />
        </div>
      </div>

      <p
        className="responsive-text text-[#65728C] mt-4"
        style={{
          lineHeight: "15px",
          fontSize: "13px",
          marginTop: "4px",
          gap: "10px",
        }}
      >
        Dear [Customer's Name],
        <br />
        <br />
        I hope this email finds you well. We wanted to express our sincere
        gratitude for choosing to visit our property recently. We value your
        patronage and trust that your experience was enjoyable.
        <br />
        <br />
        We would love to hear more about your visit and any feedback you might
        have. Your insights are essential to us in enhancing our services and
        ensuring that every guest has a memorable experience.
        <br />
        <br />
        If you have a moment, please feel free to share your thoughts or any
        specific highlights from your visit. Your feedback is highly
        appreciated.
        <br />
        <br />
        Thank you once again for choosing us, and we look forward to welcoming
        you back soon.
        <br />
        <br />
        Best Regards, <br />
        [Your Name]
      </p>

      <button
        className="responsive-button bg-[#1565C0] text-[#F5F5F5] w-[148px] h-[37px] mt-[11px] mx-auto block rounded-[5px] mt-[-1px]"
        onClick={handleOpenModal}
      >
        Save Email Template
      </button>

      <SaveTemplateModal
        isModalOpen={isModalOpen}
        handleClose={handleCloseModal}
        handleSave={handleSaveTemplate}
      />
    </Card>
  );
};
