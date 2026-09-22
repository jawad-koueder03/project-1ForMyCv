import logo from "./500px-Emblem_of_Syria_(2025–present).svg.png";
import userPhoto from "./—Pngtree—white silhouette male avatar_6404675.png";

export default function NavBar() {
  return (
    <nav
      className="w-full h-16 bg-gradient-to-r from-blue-500 to-blue-900 shadow-lg fixed"
      dir="rtl"
    >
      <div className="h-full flex items-center justify-between px-8">
        {/* Logo + Title */}
        <div className="flex items-center gap-4">
          <div className="bg-white/15 p-2 rounded-full">
            <img
              src={logo}
              alt="شعار وزارة الداخلية"
              className="h-10 w-10 object-contain"
            />
          </div>

          <div>
            <h1 className="text-white text-xl font-bold">
              وزارة الداخلية
            </h1>
            <p className="text-blue-100 text-xs">
              نظام إدارة المعلومات
            </p>
          </div>
        </div>

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <h2 className="text-white font-semibold text-sm">
              User Name
            </h2>
            <p className="text-blue-100 text-xs">
              مدير النظام
            </p>
          </div>

          <div className="relative">
            <img
              src={userPhoto}
              alt="User"
              className="w-11 h-11 rounded-full border-2 border-green-400 bg-white object-cover shadow-md"
            />

            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}