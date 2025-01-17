"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import "../../lib/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, ReactNode } from "react";

interface LoadingScreenProps {
  children: ReactNode;
}
const LoadingScreen: React.FC<LoadingScreenProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <div className="animate-breathing">
          <Avatar className="w-40 h-40">
            <img
              src="./Vaaklogo.jpg"
              alt="Vaak Logo"
              className="w-full h-full object-cover"
            />
          </Avatar>
        </div>
      </div>
    );
  }
  return children;
};

export default function Second() {
  return (
    <LoadingScreen>
      <div className="flex justify-center min-h-screen p-4">
        <div className="w-full max-w-[1000px] h-auto shadow-lg bg-transparent flex flex-col items-center pt-8">
          <div className="flex flex-col items-center justify-center w-full px-4">
            <div className="mt-2 mb-8">
              <Avatar className="w-24 h-24 md:w-32 md:h-32">
                <AvatarImage src="./Vaaklogo.jpg" alt="Vaak Logo" />
                <AvatarFallback>VA</AvatarFallback>
              </Avatar>
            </div>

            <div className="text-white text-lg mb-8">Connect With Us</div>

            <div className="w-full flex flex-col items-center gap-8">
              <button className="w-full max-w-[550px] h-[80px] md:h-[80px] border border-gray-300 rounded-2xl bg-transparent hover:bg-blue-600 hover:border-blue-600 hover:scale-105 transition-all duration-300 ease-in-out">
                <a
                  href="https://www.linkedin.com/in/ca-aditya-kapoor-97749a311/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 md:px-6 h-full"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-white text-2xl md:text-3xl"
                  />
                  <span className="text-white ml-4 text-lg md:text-xl">
                    Linkedin Profile
                  </span>
                </a>
              </button>

              <button className="w-full max-w-[550px] h-[80px] md:h-[80px] border border-gray-300 rounded-2xl bg-transparent hover:bg-blue-600 hover:border-blue-600 hover:scale-105 transition-all duration-300 ease-in-out">
                <a
                  href="https://www.vaakassociates.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 md:px-6 h-full"
                >
                  <FontAwesomeIcon
                    icon={faLink}
                    className="text-white text-2xl md:text-3xl"
                  />
                  <span className="text-white ml-4 text-lg md:text-xl">
                    VAAK Website
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </LoadingScreen>
  );
}
