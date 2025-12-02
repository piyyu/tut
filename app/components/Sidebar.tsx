"use client";

import { InitLogo } from "../Icons/InitLogo";

export const Sidebar = ({ isOpen, onToggle }: {
  isOpen: boolean;
  onToggle: () => void;
}) => {

  if (!isOpen) {
    return (
      <div className="p-3 h-15 border-b border-[#3a322c]">
        <InitLogo 
          size="lg" 
          className="text-[#de884c] hover:text-white cursor-pointer" 
          onClick={onToggle} 
        />
      </div>
    );
  }

  return (
    <div className="bg-[#231f1b] w-64 min-h-screen border-r border-[#3a322c]">
      <div className="flex items-center p-2 h-20">
        <InitLogo 
          size="xl"
          className="text-[#de884c] hover:text-white cursor-pointer" 
          onClick={onToggle} 
        />
      </div>

    </div>
  );
};
