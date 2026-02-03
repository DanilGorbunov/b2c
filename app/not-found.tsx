import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-zinc-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-black">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full border-zinc-700 text-white hover:bg-zinc-800">
            <Link href="/portfolio">
              <ArrowLeft className="h-4 w-4 mr-2" />
              View Portfolio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
