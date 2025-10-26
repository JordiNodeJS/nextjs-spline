import Link from "next/link";

interface PageNavigationProps {
  previousHref?: string;
  previousText?: string;
  nextHref?: string;
  nextText?: string;
  showPrevious?: boolean;
  showNext?: boolean;
}

export default function PageNavigation({ 
  previousHref,
  previousText = "Anterior",
  nextHref,
  nextText = "Siguiente",
  showPrevious = true,
  showNext = true
}: PageNavigationProps) {
  return (
    <div className="flex justify-between items-center">
      {showPrevious && previousHref && (
        <Link 
          href={previousHref} 
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {previousText}
        </Link>
      )}
      {showNext && nextHref && (
        <Link 
          href={nextHref} 
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-cyan-500 text-white rounded-lg hover:from-pink-600 hover:to-cyan-600 transition-all shadow-lg"
        >
          {nextText}
        </Link>
      )}
    </div>
  );
}
