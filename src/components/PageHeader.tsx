import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  backHref?: string;
  backText?: string;
  children?: React.ReactNode;
}

export default function PageHeader({ 
  title, 
  description, 
  backHref = "/guia-spline",
  backText = "Volver a la guía",
  children 
}: PageHeaderProps) {
  return (
    <div className="mb-8">
      <Link 
        href={backHref} 
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        {backText}
      </Link>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        {description}
      </p>
      {children}
    </div>
  );
}
