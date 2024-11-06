"use client";

export default function SecondaryButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={
        "bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md text-center text-sm font-bold cursor-pointer uppercase transition duration-300 ease-in-out transform hover:scale-105 select-none"
      }
    >
      {children}
    </button>
  );
}
