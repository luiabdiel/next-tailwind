import { FiPlayCircle } from "react-icons/fi";

export function AreaCtas() {
  return (
    <div className="flex items-center justify-center gap-3 mb-16">
      <button
        className="py-4 px-7 border border-gray-300 rounded-lg text-lg 
        font-semibold text-gray-700 flex items-center gap-3 hover:bg-gray-100
        transition-colors
        "
      >
        <FiPlayCircle size={24} className="text-gray-700" />
        Demo
      </button>
      <button
        className="py-4 px-7 rounded-lg text-lg 
        font-semibold bg-brand-600 hover:bg-brand-700 text-white transition-colors"
      >
        Sign up
      </button>
    </div>
  );
}
