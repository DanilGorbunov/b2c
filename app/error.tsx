"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-16 w-16 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Something went wrong!</h1>
          <p className="text-zinc-400 mb-8">
            An unexpected error occurred. Please try again or contact support if the problem persists.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={reset}
            className="w-full bg-primary hover:bg-primary/90 text-black"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
          
          <Button asChild variant="outline" className="w-full border-zinc-700 text-white hover:bg-zinc-800">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Go Home
            </Link>
          </Button>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="text-zinc-400 cursor-pointer">Error Details</summary>
            <pre className="text-xs text-red-400 mt-2 p-4 bg-zinc-900 rounded overflow-auto">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
