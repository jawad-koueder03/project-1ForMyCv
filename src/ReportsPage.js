import { FileText, Search, Download, Eye, Calendar } from "lucide-react";

export default function ReportsPage() {
  const reports = [
    {
      id: 1,
      title: "تقرير المخالفات اليومي",
      department: "إدارة المرور",
      date: "2026-08-01",
      status: "مكتمل",
    },
    {
      id: 2,
      title: "تقرير الحوادث الأسبوعي",
      department: "إدارة الحوادث",
      date: "2026-07-30",
      status: "مكتمل",
    },
    {
      id: 3,
      title: "تقرير المركبات الجديدة",
      department: "إدارة المرور",
      date: "2026-07-29",
      status: "قيد المراجعة",
    },
    {
      id: 4,
      title: "تقرير الدوريات",
      department: "الأمن العام",
      date: "2026-07-28",
      status: "مكتمل",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8" dir="rtl">
      {/* Header */}

      <div className="bg-gradient-to-r from-blue-500 to-blue-900 rounded-2xl shadow-lg p-6 text-white mb-8">
        <div className="flex items-center gap-3">
          <FileText className="w-9 h-9" />
          <div>
            <h1 className="text-3xl font-bold">التقارير</h1>
            <p className="text-blue-100">
              جميع التقارير الخاصة بوزارة الداخلية
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}

      <div className="grid grid-cols-4 gap-5 mb-8">
        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="text-gray-500">إجمالي التقارير</h3>
          <p className="text-3xl font-bold text-blue-700 mt-2">248</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="text-gray-500">تقارير اليوم</h3>
          <p className="text-3xl font-bold text-green-600 mt-2">16</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="text-gray-500">قيد المراجعة</h3>
          <p className="text-3xl font-bold text-orange-500 mt-2">9</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5">
          <h3 className="text-gray-500">المكتملة</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">223</p>
        </div>
      </div>

      {/* Search */}

      <div className="bg-white rounded-xl shadow-md p-5 mb-6">
        <div className="relative">
          <Search className="absolute right-3 top-3 text-gray-400 w-5 h-5" />

          <input
            type="text"
            placeholder="ابحث عن تقرير..."
            className="w-full border rounded-lg py-2 pr-10 pl-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Reports Table */}

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-4 text-right">اسم التقرير</th>
              <th className="p-4 text-right">الإدارة</th>
              <th className="p-4 text-right">التاريخ</th>
              <th className="p-4 text-right">الحالة</th>
              <th className="p-4 text-center">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <tr
                key={report.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium">{report.title}</td>

                <td className="p-4">{report.department}</td>

                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    {report.date}
                  </div>
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      report.status === "مكتمل"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition">
                      <Eye size={18} />
                      عرض
                    </button>

                    <button className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition">
                      <Download size={18} />
                      تحميل
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}