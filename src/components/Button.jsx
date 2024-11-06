"use client";

export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={
        "bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md text-center text-sm font-bold cursor-pointer uppercase transition duration-300 ease-in-out transform hover:scale-105 select-none"
      }
    >
      {children}
    </button>
  );
}
