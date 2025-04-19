interface CardProps {
    title: string;
    content: string;
  }
  
  export default function Card({ title, content }: CardProps) {
    return (
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{content}</p>
      </div>
    );
  }
  