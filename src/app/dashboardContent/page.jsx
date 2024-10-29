"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb, Card, Button, Select, Input, Slider } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { setPromptData, generateMockEmail } from "../../redux/taskSlice";
import Image from "next/image";
import MainLayout from "@/components/app-components/Layout/MainLayout";
import Ai from "../../assets/icons/dashboardImg.jpeg";
import { PrewrittenEmail } from "../../components/functional-components/PrewrittenEmail";
import { AIGeneratedEmail } from "../../components/functional-components/AIGeneratedEmail";

export default function Page() {
  const { Option } = Select;
  const dispatch = useDispatch();
  const promptState = useSelector((state) => state.prompt);
  const [isGenerated, setIsGenerated] = useState(false);

  const [contact, setContact] = useState("");
  const [inputPrompt, setInputPrompt] = useState("");
  const [tone, setTone] = useState("");
  const [length, setLength] = useState(30);

  const handleGenerateEmail = () => {
    dispatch(
      setPromptData({ selectedContact: contact, inputPrompt, tone, length })
    );

    dispatch(generateMockEmail());

    setIsGenerated(true);
  };

  return (
    <MainLayout>
      <div className="responsivee-card flex flex-col min-h-screen p-4 lg:p-0">
        <div className="breadcrumb-container mt-2 mb-4">
          <Breadcrumb separator="/" className="text-xs md:text-sm">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Choose Contacts</Breadcrumb.Item>
            <Breadcrumb.Item>
              <span className="w-full text-[#555ACC]">Build Prompt@</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 custom-max-w-748">
          <Card
            className="w-full lg:w-[322px] p-0 shadow-[0px_2px_5px_0px_#26334D08]"
            style={{ border: "none", borderRadius: "0" }}
          >
            <h2 className="font-bold mb-4 text-base lg:text-lg">
              Setup your input prompt
            </h2>

            <div className="mb-4 text-[#4D5E80]">
              <h3 className="font-bold text-sm lg:text-base">
                1. Select Contact
              </h3>
              <Select
                className="w-full mt-2 text-xs lg:text-sm"
                placeholder="Select Contact"
                style={{ fontWeight: 700 }}
                dropdownStyle={{ color: "#7D8FB3", fontSize: "10px" }}
                size="small"
              >
                <Option value="Contact 1">Contact 1</Option>
                <Option value="Contact 2">Contact 2</Option>
              </Select>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-[#4D5E80] text-sm lg:text-base">
                2. Your Input Prompt
              </h3>
              <Select
                className="w-full mt-2"
                placeholder="Insert Data Variable"
                style={{ fontWeight: 700 }}
                dropdownStyle={{ color: "#7D8FB3", fontSize: "10px" }}
                size="small"
              >
                <Option value="contact1">Variable 1</Option>
                <Option value="contact2">Variable 2</Option>
              </Select>
              <Input.TextArea
                rows={4}
                placeholder="i.e. I would like to generate a follow-up regarding our last week discussion..."
                style={{ fontWeight: 700 }}
                dropdownStyle={{ color: "#7D8FB3", fontSize: "10px" }}
                size="small"
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                className="mt-2"
              />
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-[#4D5E80] text-sm lg:text-base">
                3. Choose a Tone (optional)
              </h3>
              <Select
                className="w-full mt-2"
                placeholder="Example: 😊 Friendly"
                style={{ fontWeight: 700 }}
                dropdownStyle={{ color: "#7D8FB3", fontSize: "10px" }}
                size="small"
              >
                <Option value="Friendly">Friendly</Option>
                <Option value="Formal">Formal</Option>
              </Select>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-[#4D5E80] text-sm lg:text-base">
                4. Length (optional)
              </h3>
              <Slider style={{ color: "#555ACC" }}
                defaultValue={30}
                value={length}
                onChange={(value) => setLength(value)}
                min={10}
                max={100}
              
              />
            </div>
            <button
              type="button"
              className="bg-[#1565C0] text-[#F5F5F5] w-full h-[33px] rounded-[20px]"
              onClick={handleGenerateEmail}
            >
              Generate AI Prompt
              <RightOutlined />
            </button>
          </Card>

          {!isGenerated ? (
            <Card className="flex-grow flex items-center justify-center h-[300px] lg:h-[715px]">
              <div className="text-center">
                <Image
                  src={Ai.src}
                  alt="AI Rocket"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
                <p className="mt-4 text-sm md:text-lg font-bold">
                  Setup your input prompt to see knowledge base generated AI
                  prompt here
                </p>
              </div>
            </Card>
          ) : (
            <div className="flex flex-col gap-4 w-full lg:w-[650px]">
              <PrewrittenEmail />
              <AIGeneratedEmail />
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
