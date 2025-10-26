interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="relative z-10 min-h-screen bg-black/20 dark:bg-black/30 backdrop-blur-sm">
      <div className={`container mx-auto px-4 py-16 ${className}`}>
        {children}
      </div>
    </div>
  );
}
