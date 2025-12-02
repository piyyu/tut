"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";

export const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!sidebarOpen) {
    return (
      <div className="flex min-h-screen bg-[#2b261e] font-sans flex-col">
        <Sidebar 
          isOpen={sidebarOpen} 
          onToggle={() => setSidebarOpen(!sidebarOpen)} 
        />

        <div className="flex-1 text-white p-4">
          
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#2b261e] font-sans">
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={() => setSidebarOpen(!sidebarOpen)} 
      />

      <div className="flex-1 text-white p-4">
        
      </div>
    </div>
  );
};
