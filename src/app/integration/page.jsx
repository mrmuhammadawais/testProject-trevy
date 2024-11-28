



// import React from 'react';
// import MainLayout from '@/components/app-components/Layout/MainLayout';
// import TemplateHeader from '@/components/functional-components/TemplateHeader';
// import Card from '@/components/functional-components/CardManagePlans';
// import { CaretUpOutlined, MailOutlined, CheckCircleFilled } from '@ant-design/icons';

// export default function page() {
//   return (
//     <MainLayout>
    
//       <TemplateHeader
//         title="Integrations"
//         description="Integration enhances your app, making it more robust and advanced.\n It allows you to harness the full potential of trevy, maximizing its productivity."
//         showImage={false}
//         marginTop={50}
//       />
//       <div className="flex justify-center items-center min-h-screen bg-gray-100 py-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-xl">
//           <Card
//             heading="FUB"
//             icon={<CaretUpOutlined />}
//             title="Follow Up Boss"
//             paragraph="Follow Up Boss isn’t just a CRM. It’s a central hub where you build the systems that scale your business. Now you can work the way you want, and build the business you always envisioned."
//             buttonLabel="Connected"
//             buttonBackgroundColor="#29CC3980"
//             iconInsideButton={true}
//           />
//           <Card
//             heading="SMTP"
//             icon={<MailOutlined />}
//             title="Custom SMTP Integration"
//             paragraph="Follow Up Boss isn’t just a CRM. It’s a central hub where you build the systems that scale your business. Now you can work the way you want, and build the business you always envisioned."
//             buttonLabel="Add SMTP account"
//             buttonBackgroundColor="#1565C0"
//             iconInsideButton={false}
//           />
//           <Card
//             heading="SMTP"
//             icon={<MailOutlined />}
//             title="Google SMTP Configuration"
//             paragraph="Follow Up Boss isn’t just a CRM. It’s a central hub where you build the systems that scale your business. Now you can work the way you want, and build the business you always envisioned."
//             buttonLabel="Connected"
//             buttonBackgroundColor="#29CC3980"
//             iconInsideButton={true}
//           />
//         </div>
//       </div>
//     </MainLayout>
//   );
// }








import React from 'react';
import MainLayout from '@/components/app-components/Layout/MainLayout';
import TemplateHeader from '@/components/functional-components/TemplateHeader';
import Card from '@/components/functional-components/CardManagePlans';
import { CaretUpOutlined, MailOutlined, CheckCircleFilled } from '@ant-design/icons';

export default function page() {
  return (
    <MainLayout>
    
      <TemplateHeader
        title="Integrations"
        description="Integration enhances your app, making it more robust and advanced.\n It allows you to harness the full potential of trevy, maximizing its productivity."
        showImage={false}
        marginTop={50}
      />
      <div className='mt-[-155px]'>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-xl">
          <Card
            heading="FUB"
            icon={<CaretUpOutlined />}
            title="Follow Up Boss"
            paragraph="Follow Up Boss isn’t just a CRM. It’s a central hub where you build the systems that scale your business. Now you can work the way you want, and build the business you always envisioned."
            buttonLabel="Connected"
            buttonBackgroundColor="#29CC3980"
            iconInsideButton={true}
          />
          <Card
            heading="SMTP"
            icon={<MailOutlined />}
            title="Custom SMTP Integration"
            paragraph="Follow Up Boss isn’t just a CRM. It’s a central hub where you build the systems that scale your business. Now you can work the way you want, and build the business you always envisioned."
            buttonLabel="Add SMTP account"
            buttonBackgroundColor="#1565C0"
            iconInsideButton={false}
          />
          <Card
            heading="SMTP"
            icon={<MailOutlined />}
            title="Google SMTP Configuration"
            paragraph="Follow Up Boss isn’t just a CRM. It’s a central hub where you build the systems that scale your business. Now you can work the way you want, and build the business you always envisioned."
            buttonLabel="Connected"
            buttonBackgroundColor="#29CC3980"
            iconInsideButton={true}
          />
        </div>
      </div>
      </div>
    </MainLayout>
  );
}

