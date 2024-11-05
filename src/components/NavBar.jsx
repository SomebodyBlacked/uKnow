"use client";

import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = Cookies.get("auth-token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    Cookies.remove("auth-token");
    setIsAuthenticated(false);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">
          <Link href="/">uKnow</Link>
        </h1>
        <div>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="border px-4 py-3 text-center text-sm font-bold cursor-pointer uppercase"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="bg-indigo-600 px-4 py-3 text-center text-sm font-bold cursor-pointer uppercase">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
