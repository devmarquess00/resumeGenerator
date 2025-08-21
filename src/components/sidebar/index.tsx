import { menuHeader } from "@/menus/menuHeader";

type SidebarProps = {
  isShowSidebar?: boolean;
};

export const Sidebar = ({ isShowSidebar }: SidebarProps) => {
  return (
    <>
      {isShowSidebar && (
        <aside>
          <ul className="flex items-center gap-2">
            {menuHeader.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
};
