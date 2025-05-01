import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="mb-8">
          {title && <h1 className="text-3xl font-bold text-gray-900">{title}</h1>}
          {subtitle && <p className="mt-2 text-lg text-gray-600">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
};

export default PageContainer;