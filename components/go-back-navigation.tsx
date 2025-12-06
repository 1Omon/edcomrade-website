"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const GoBackNavigation = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 ">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
        <div
          className="flex items-center h-16 cursor-pointer hover:text-primary transition"
          onClick={() => router.back()}
        >
          <ArrowLeft className="w-6 h-6 mr-2 " />
          <span className="">Go Back</span>
        </div>
      </div>
    </nav>
  );
};

export default GoBackNavigation;
