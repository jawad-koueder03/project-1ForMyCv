import React, { useState } from "react";
import { Link } from "react-router-dom";


import {
  Send,
  Paperclip,
  UserCircle,
  Car,
  FileText,
  Search,
  Menu,
  ChevronDown,
  Archive,
  FolderOpen,
  Users,
  Shield,
  Building2,
  Flame,
  Lock,
  Ship,
  MessageCircle,
  Star,
  File,
  FileSpreadsheet,
  FileText as FilePdf,
  BoxSelect,
} from "lucide-react";

const TrafficChatApp = () => {
  const [message, setMessage] = useState("");
  const [activeSection, setActiveSection] = useState("messages");

  // بيانات المحادثات
  const conversations = [
    {
      id: 1,
      name: "إدارة المرور",
      members: 25,
      lastMessage: "تم إرسال التقرير...",
      time: "10:40",
      unread: false,
    },
    {
      id: 2,
      name: "إدارة الحوادث",
      members: 12,
      lastMessage: "تم تحديث البلاغ 2312",
      time: "09:15",
      unread: true,
    },
    {
      id: 3,
      name: "الأمن العام",
      members: 8,
      lastMessage: "الاجتماع الساعة 2",
      time: "أمس",
      unread: false,
    },
    {
      id: 4,
      name: "الدفاع المدني",
      members: 15,
      lastMessage: "جاهزون للطوارئ",
      time: "أمس",
      unread: false,
    },
    {
      id: 5,
      name: "إدارة السجون",
      members: 6,
      lastMessage: "تقرير السجون",
      time: "أمس",
      unread: false,
    },
    {
      id: 6,
      name: "الشرطة البحرية",
      members: 4,
      lastMessage: "دورية جديدة",
      time: "أمس",
      unread: false,
    },
  ];

  // المحادثات المباشرة
  const directChats = [
    {
      id: 7,
      name: "خالد علي",
      online: true,
      lastMessage: "تم استلام التقرير",
      time: "10:30",
    },
    {
      id: 8,
      name: "سارة حسن",
      online: false,
      lastMessage: "شكراً جزيلاً",
      time: "09:45",
    },
    {
      id: 9,
      name: "محمد البيشي",
      online: true,
      lastMessage: "سأرسل الملف قريباً",
      time: "08:20",
    },
  ];

  const [ShowSection, SetShowSection] = useState(true);

  function hideSection() {
    SetShowSection(!ShowSection);
  }

  // الرسائل
  const [messages, setmessages] = useState([
    {
      id: 1,
      sender: "أحمد محمد",
      content: "السلام عليكم",
      time: new Date().toLocaleTimeString("en", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true, // اجعلها true إذا كنت تريد نظام 12 ساعة (ص/م)
                    }),
      type: "text",
    },
    {
      id: 2,
      sender: "أحمد محمد",
      content: "تم إرسال التقرير الشهري الخاص بالحوادث.",
      time: "10:32",
      type: "text",
    },
    {
      id: 3,
      sender: "أحمد محمد",
      content: "تم الإستلام وجاري المراجعة.",
      time: "10:35",
      type: "text",
    },
    {
      id: 4,
      sender: "أحمد محمد",
      content: "تقرير الحوادث مايو 2024",
      time: "10:38",
      type: "file",
      fileSize: "2.5 MB",
      fileType: "pdf",
    },
    {
      id: 5,
      sender: "أحمد محمد",
      content: "يرجى مراجعة البلاغ رقم 2312 في أسرع وقت ممكن.",
      time: "10:40",
      type: "text",
    },
  ]);

  // الملفات المرفقة
  const attachedFiles = [
    { name: "pdf", size: "1.8 MB", type: "pdf" },
    { name: "xlsx", size: "980 KB", type: "xlsx" },
    { name: "xlsx_المحافظات", size: "1.2 MB", type: "xlsx" },
  ];

  const totalFiles = [
    { name: "pdf.الحوادث", size: "1.8 MB", type: "pdf" },
    { name: "pdf_المرور", size: "1.2 MB", type: "pdf" },
  ];

  return (
    <div
      className="flex h-svh bg-gray-100 font-sans"
      dir="ltr
    "
    >
      {/* الشريط الجانبي الأيسر - الأقسام */}
      <div className="w-72 bg-white border-l border-gray-200 flex flex-col shadow-lg">
        {/* رأس الشريط */}
        <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-blue-900 text-white">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Car className="w-6 h-6" />
              <h2 className="text-lg font-bold">معلومات المرور</h2>
            </div>
            <button className="p-1 hover:bg-blue-400 rounded-lg transition">
              <Menu className="w-5 h-5" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="بحث..."
              className="w-full bg-blue-300 bg-opacity-30 text-white placeholder-white placeholder-opacity-70 rounded-lg py-2 pr-10 pl-4 text-sm focus:outline-none focus:bg-opacity-40"
            />
          </div>
        </div>

        {/* قائمة الأقسام */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3">
            <div
              className="flex items-center justify-between mb-2 cursor-pointer"
              onClick={() => {
                hideSection();
              }}
            >
              
              <div className="flex items-center gap-2 text-gray-700 font-semibold">
                <Building2 className="w-4 h-4" />
                <span className="text-sm">الأقسام</span>
              </div>

              
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>

            {ShowSection
              ? [
                  "إدارة المرور",
                  " التقارير",
                  "الأمن العام",
                  "الدفاع المدني",
                  "إدارة السجون",
                  "الشرطة البحرية",
                ].map((dept, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveSection(dept)}
                     
                    className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition mb-1 ${
                      activeSection === dept
                        ? "bg-green-50 text-blue-700"
                        : "hover:bg-gray-50"
                    }
                    
                `} 
                
                  >
                    
                    <div className="flex items-center gap-2">
                      <Link to="/TrafficDashboard">
                      {index === 0 && <Shield className="w-4 h-4" />}
                      </Link>
                      <Link to="/ReportsPage">
                      {index === 1 && <AlertCircle className="w-4 h-4" />}
                      </Link>
                      {index === 2 && <Users className="w-4 h-4" />}
                      {index === 3 && <Flame className="w-4 h-4" />}
                      {index === 4 && <Lock className="w-4 h-4" />}
                      {index === 5 && <Ship className="w-4 h-4" />}
                      <span className="text-sm">{dept}</span>
                    </div>
                    <span className="text-xs text-gray-400">●</span>
                  </div>
                ))
              : ""}
          </div>

          <div className="border-t border-gray-200 my-2"></div>

          {/* المحادثات المباشرة */}
          <div className="p-3">
            <div className="flex items-center justify-between mb-2 cursor-pointer" >
              <div className="flex items-center gap-2 text-gray-700 font-semibold" >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">المحادثات المباشرة</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>

            {directChats.map((chat) => (
              <div
                key={chat.id}
                className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition mb-1"
              >
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {chat.name.charAt(0)}
                    </div>
                    {chat.online && (
                      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <span className="text-sm">{chat.name}</span>
                </div>
                <Star className="w-3 h-3 text-gray-400" />
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 my-2"></div>

          {/* الرسائل المؤرشفة */}
          <div className="p-3">
            <div className="flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-50">
              <div className="flex items-center gap-2 text-gray-700">
                <Archive className="w-4 h-4" />
                <span className="text-sm">الرسائل المؤرشفة</span>
              </div>
              <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded-full">
                +21
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* منطقة المحادثة الرئيسية */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* رأس المحادثة */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-md">
              <Car className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">إدارة المرور</h3>
              <p className="text-xs text-gray-500">25 عضو</p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <MoreHorizontal className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* منطقة الرسائل */}
        <div className="flex-1 overflow-y-scroll max-h-screen p-6 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="flex justify-end">
              <div className="max-w-lg bg-blue-600 text-white rounded-2xl rounded-br-none shadow-sm">
                <div className="px-5 py-3">
                  <p className="text-xs text-green-100 mb-1 font-semibold">
                    {msg.sender}
                  </p>

                  {msg.type === "file" ? (
                    <div className="flex items-center gap-2 bg-blue-800 rounded-lg p-2">
                      {msg.fileType === "pdf" ? (
                        <FilePdf className="w-5 h-5" />
                      ) : (
                        <File className="w-5 h-5" />
                      )}
                      <span className="text-sm">{msg.content}</span>
                      <span className="text-xs text-green-200">
                        {msg.fileSize}
                      </span>
                    </div>
                  ) : (
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  )}

                  <p className="text-[10px] text-green-200 mt-1 text-left">
                    {msg.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* منطقة كتابة الرسالة */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="flex gap-2 items-center">
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Paperclip className="w-5 h-5 text-gray-600" />
            </button>
            <input
              type="text"
              id="messageValue"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="اكتب رسالة..."
              className="flex-1 border border-gray-300 rounded-full px-5 py-2.5 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition text-right"
            />
            <button
              className="bg-blue-400 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition font-medium"
              onClick={() => {
                setmessages([
                  ...messages,
                  {
                    id: crypto.randomUUID(),
                    sender: "me",
                    content: message,
                    time: new Date().toLocaleTimeString("en", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true, // اجعلها true إذا كنت تريد نظام 12 ساعة (ص/م)
                    }),
                    type: "text",
                  },
                ]);
              }}
            >
              إرسال
            </button>
          </div>
        </div>
      </div>

      {/* الشريط الجانبي الأيمن - الملفات */}
      <div className="w-72 bg-white border-r border-gray-200 flex flex-col shadow-lg">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <h3 className="font-semibold text-gray-800 mb-2">الملفات المرفقة</h3>

          <div className="space-y-3">
            <div>
              <p className="text-xs text-gray-500 mb-2">الفئات المشتركة</p>
              {attachedFiles.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition mb-1"
                >
                  <div className="flex items-center gap-2">
                    {file.type === "pdf" ? (
                      <FilePdf className="w-4 h-4 text-red-500" />
                    ) : (
                      <FileSpreadsheet className="w-4 h-4 text-green-600" />
                    )}
                    <span className="text-sm text-gray-700">{file.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">{file.size}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-3">
              <p className="text-xs text-gray-500 mb-2">العرض الكلي</p>
              {totalFiles.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition mb-1"
                >
                  <div className="flex items-center gap-2">
                    <FilePdf className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-gray-700">{file.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">{file.size}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* معلومات المجموعة */}
        <div className="p-4">
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-gray-800">
                معلومات المجموعة
              </span>
            </div>
            <p className="text-xs text-gray-600">
              تم إنشاء المجموعة: مايو 2024
            </p>
            <p className="text-xs text-gray-600">المشرف: إداري المرور</p>
            <p className="text-xs text-gray-600">الوصف: مناقشات إدارة المرور</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// إضافة المكونات الناقصة
const AlertCircle = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const MoreHorizontal = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
    />
  </svg>
);

export default TrafficChatApp;
