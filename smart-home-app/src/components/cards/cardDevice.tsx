'use client'

type CardProps = {
  title: string;
  icon: string;
}

export default function CardDevice({ title, icon }: CardProps) {
  return (
    <div className="bg-white hover:bg-gray-300 elevation-1 transition-[0.2s rounded-xl flex flex-col justify-center items-center">
      <span className="material-symbols-rounded md-96 mb-5">
        {icon}
      </span>
      <h1>
        {title}
      </h1>
    </div>
  );
}