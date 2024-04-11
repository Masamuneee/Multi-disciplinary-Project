'use client'

type CardProps = {
  title: string;
  icon: string;
}

export default function CardDevice({ title, icon }: CardProps) {
  return (
    <div className="bg-white hover:bg-gray-300 shadow-sm hover:shadow-lg rounded-xl flex flex-col justify-center items-center">
      <span className="material-symbols-rounded md-96 mb-5">
        {icon}
      </span>
      <h1>
        {title}
      </h1>
    </div>
  );
}