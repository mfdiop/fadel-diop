import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
    <p className="text-primary font-mono text-sm">404</p>
    <h1 className="text-4xl md:text-5xl font-bold">Page Not Found</h1>
    <p className="text-muted-foreground max-w-md">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <Button asChild>
      <Link to="/">Go Home</Link>
    </Button>
  </div>
);

export default NotFound;
