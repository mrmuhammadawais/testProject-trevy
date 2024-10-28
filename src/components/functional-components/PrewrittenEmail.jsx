import { Card } from "antd";

export const PrewrittenEmail = () => (
  <Card className="w-full max-w-[700px] h-auto mx-auto">
    <div
      className="flex justify-between items-center"
      style={{ borderBottom: "1px solid #EBEBEB", paddingBottom: "8px" }}
    >
      <p className="font-bold mb-0">AI Generated Prompt</p>
      <button className="bg-[#1565C0] text-[#F5F5F5] w-[95px] h-[33px] rounded-[5px]">
        Build Email
      </button>
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
      specific highlights from your visit. Your feedback is highly appreciated.
      <br />
      <br />
      Thank you once again for choosing us, and we look forward to welcoming you
      back soon.
      <br />
      <br />
      Best Regards, <br />
      [Your Name]
    </p>
  </Card>
);
