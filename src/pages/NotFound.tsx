import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer';
import Button from '../components/ui/Button';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <PageContainer>
      <div className="text-center py-20">
        <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 text-lg max-w-lg mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          variant="primary" 
          icon={<Home className="h-4 w-4" />}
          onClick={() => navigate('/')}
        >
          Back to Dashboard
        </Button>
      </div>
    </PageContainer>
  );
};

export default NotFound;