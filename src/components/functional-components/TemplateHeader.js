

import React from "react";
import Image from "next/image";
import People from "../../assets/icons/people.png";
import tagsImg from '../../assets/icons/tagsImg.png';

const TemplateHeader = ({ title, description, Image: HeaderImage, showImage = true,marginTop = 0,width  }) => {
  return (
    <div
      className="responsive-width bg-white shadow-md p-4 md:p-6 rounded-md relative mb-4 md:mb-6"
      
      style={{ minHeight: "200px" }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="mb-2 md:mb-0 text-center md:text-left">
          <h2 className="text-[#4D5E80] font-bold text-lg md:text-xl" style={{marginTop: `${marginTop}px` }}>{title}</h2>
          <p className="text-[#4D5E80] font-medium text-sm md:text-base" style={{width: `${width}px` }}>
            {/* {description} */}
            {description.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < description.split('\n').length - 1 && <br />}
              </span>
           )) }
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          {showImage && (
            <Image
              src={HeaderImage || People}
              alt="People"
              width={150}
              height={100}
              className="w-[150px] md:w-[200px]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateHeader;


