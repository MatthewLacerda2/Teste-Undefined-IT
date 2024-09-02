"use client";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-4">
      <div className="w-full max-w-xs mt-8 text-center">
        <FontAwesomeIcon
          icon={faHome}
          size="3x"
          className="text-gray-800 mb-4"
        />
        <h1 className="text-2xl font-bold mb-4">Home</h1>
        <p className="text-gray-700">You're logged in</p>
      </div>
    </div>
  );
}
