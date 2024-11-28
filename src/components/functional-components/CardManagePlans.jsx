import { Button, Space } from "antd";
import { CheckCircleFilled, SettingOutlined } from "@ant-design/icons";
import oneIcon from "../../assets/icons/oneIcon.png";
const Card = ({
  heading,
  icon,
  title,
  paragraph,
  buttonLabel,
  img,
  button,
  buttonColor,
   buttonBackgroundColor,
   iconInsideButton,
}) => {
  return (
    <div className="cardMargin bg-[#FFFFFF] rounded-lg shadow-md p-4 w-70 h-[auto]  flex flex-col justify-between space-y-0 ">
      <div className=" flex justify-center items-center space-x-2">
        {icon}
        <h2 className="text-xl font-bold space-y-2 ">{heading}</h2>
      </div>
      <div className="mt-2 ">
        <h3
          className="text-lg font-semibold flex justify-center items-center space-y-2"
          style={{ color: "#4D5E80" }}
        >
          {title}
        </h3>
        <p
          className="mt-1  text-sm  sm:40 md:w-38  p-[30px] flex justify-center items-center"
          style={{
            color: "#4D5E80",
            fontSize: "14px",
          }}
        >
          {paragraph}
        </p>
      </div>
      <div className="flex justify-center items-center  mt-4 space-x-2"
      style={{borderRadius:'30px'}}>
        <Button
          type="primary"
          className="rounded-full"
          style={{ background: buttonBackgroundColor,borderRadius: '30px' }}
        >
                   {iconInsideButton && <CheckCircleFilled />}

          {buttonLabel}
        </Button>
       
      

        <SettingOutlined style={{ color: "#C3CAD9", height: "10px" }} />
      </div>
    </div>
  );
};

export default Card;







