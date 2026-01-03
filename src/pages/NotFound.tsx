import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md animate-fade-in">
        <h1 className="font-display text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="font-display text-2xl text-foreground mb-4">Page Not Found</h2>
        <p className="font-body text-muted-foreground mb-8">
          The scroll you seek has been lost to the sands of time. 
          Perhaps it was never written, or perhaps it awaits discovery elsewhere.
        </p>
        <Link to="/">
          <Button className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Return to the Archives
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
