'use client'

type SideBarButtonProps = {
  title: string;
  icon: string;
}

export default function SideBarButton({ title, icon }: SideBarButtonProps) {
  return (
    <div className="flex flex-row items-center hover:bg-gray-200 rounded-full">
      <div className="pl-5 pr-4 py-4 flex items-center">
        <span className="material-symbols-rounded md-30">
          {icon}
        </span>
      </div>
      <div>
        {title}
      </div>
    </div>
  );
}