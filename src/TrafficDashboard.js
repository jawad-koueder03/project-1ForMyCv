import {
  Car,
  FileText,
  AlertCircle,
  Shield,
  Search,
  ClipboardList,
  CreditCard,
  BarChart3,
} from "lucide-react";

export default function TrafficDashboard() {
  const stats = [
    {
      title: "المركبات",
      value: "12,540",
      icon: <Car className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "المخالفات",
      value: "1,320",
      icon: <FileText className="w-8 h-8 text-red-500" />,
    },
    {
      title: "الحوادث",
      value: "84",
      icon: <AlertCircle className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "الدوريات",
      value: "35",
      icon: <Shield className="w-8 h-8 text-green-500" />,
    },
  ];

  const services = [
    {
      title: "تسجيل مركبة",
      icon: <Car className="w-10 h-10" />,
    },
    {
      title: "إدارة المخالفات",
      icon: <ClipboardList className="w-10 h-10" />,
    },
    {
      title: "الحوادث",
      icon: <AlertCircle className="w-10 h-10" />,
    },
    {
      title: "رخص القيادة",
      icon: <CreditCard className="w-10 h-10" />,
    },
    {
      title: "البحث",
      icon: <Search className="w-10 h-10" />,
    },
    {
      title: "التقارير",
      icon: <BarChart3 className="w-10 h-10" />,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8" dir="rtl">
      {/* Header */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-blue-900">
          إدارة المرور
        </h1>

        <p className="text-gray-600 mt-2">
          لوحة التحكم الرئيسية
        </p>
      </div>

      {/* Statistics */}

      <div className="grid grid-cols-4 gap-6 mb-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-gray-500">{item.title}</h2>

                <p className="text-3xl font-bold mt-2">
                  {item.value}
                </p>
              </div>

              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Services */}

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-5">
          الخدمات الرئيسية
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {services.map((service, index) => (
            <button
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <div className="flex flex-col items-center gap-4">
                {service.icon}

                <h3 className="font-bold text-lg">
                  {service.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Latest Activities */}

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-5">
          آخر النشاطات
        </h2>

        <table className="w-full">
          <thead className="border-b">
            <tr>
              <th className="text-right p-3">الوقت</th>
              <th className="text-right p-3">العملية</th>
              <th className="text-right p-3">الحالة</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">10:30</td>
              <td className="p-3">تسجيل مركبة جديدة</td>
              <td className="p-3 text-green-600">تم</td>
            </tr>

            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">10:10</td>
              <td className="p-3">إصدار مخالفة</td>
              <td className="p-3 text-yellow-600">قيد التنفيذ</td>
            </tr>

            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">09:45</td>
              <td className="p-3">تجديد رخصة قيادة</td>
              <td className="p-3 text-green-600">تم</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="p-3">09:20</td>
              <td className="p-3">تسجيل حادث سير</td>
              <td className="p-3 text-red-500">عاجل</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}