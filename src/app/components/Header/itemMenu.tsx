import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

type ItemMenuProps = {
  url: string;
  title: string;
  hasDropdown?: boolean;
};

export function ItemMenu({ url, title, hasDropdown }: ItemMenuProps) {
  return (
    <Link
      className="flex items-center gap-2 font-semibold
       text-gray-600 hover:opacity-50 transition-opacity"
      href={url}
    >
      {title} {hasDropdown && <FiChevronDown className="text-gray-600" />}
    </Link>
  );
}
