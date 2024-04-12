'use client'

type SideBarButtonProps = {
  title: string;
  icon: string;
}

export default function SideBarButton({ title, icon }: SideBarButtonProps) {
  return (
    <div className="flex flex-row items-center transition-[0.5s] hover:bg-gray-200 rounded-xl">
      <div className="pl-5 pr-4 py-3 flex items-center">
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