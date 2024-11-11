export default function Segments() {
    const emailColumns = [
      {
        title: "",
        dataIndex: "checkbox",
        key: "checkbox",
        render: () => (
          <input
            type="checkbox"
            className="border-2 border-gray-300 rounded-sm"
            style={{ padding: "10px" }}
          />
        ),
        width: 50,
      },
      {
        title: "Sender",
        dataIndex: "sender",
        key: "sender",
        width: 100,
        render: (text) => (
          <Text className="text-gray-600 text-xs font-semibold">{text}</Text>
        ),
      },
      {
        title: "Subject",
        dataIndex: "subject",
        key: "subject",
        render: (text) => (
          <Text className="text-gray-600 text-xs font-semibold">{text}</Text>
        ),
      },
      {
        title: "Preview",
        dataIndex: "preview",
        key: "preview",
        render: (text) => (
          <Text className="text-gray-400 text-xs">{text}</Text>
        ),
      },
      {
        title: "Date and Actions",
        key: "dateActions",
        render: (text, record) => (
          <div className="flex justify-between items-center gap-2">
            <Text className="text-gray-600 text-xs">{record.date}</Text>
            <div className="flex gap-2">
              <DeleteOutlined className="text-red-500" />
              <MailOutlined className="text-blue-700" />
            </div>
          </div>
        ),
      },
    ];
  return(
    
    <Card className="rounded-lg bg-blue-700 text-white shadow-md overflow-x-auto" title="Recent Activities">
      {activityData.map((activity, index) => (
        <div key={index} className="py-2">
          <Text className="text-blue-100 font-bold">
            {activity.date}
          </Text>
          {[...Array(activity.repeat)].map((_, i) => (
            <div key={i} className="mt-2">
              <div className="flex items-center">
                <EyeOutlined className="text-green-200 mr-2" />
                <Text className="text-xs text-white truncate">{activity.description}</Text>
              </div>
              <Text className="text-xs text-gray-300 ml-6">{activity.time}</Text>
            </div>
          ))}
        </div>
      ))}
    </Card>
  )
};