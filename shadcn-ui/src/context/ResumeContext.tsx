"use client";
import { createContext, useState, useContext, ReactNode } from "react";

// 👇 1. Define a Type for the resume data
type ResumeData = any; // or create a proper interface based on your form
type ResumeContextType = {
  resumeData: ResumeData | null;
  setResumeData: (data: ResumeData) => void;
};

// 👇 2. Create the context with proper default type
const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// 👇 3. Provider component
export function ResumeProvider({ children }: { children: ReactNode }) {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
}

// 👇 4. Custom hook
export function useResume() {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
}

