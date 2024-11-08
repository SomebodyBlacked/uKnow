"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import Button from "./Button";
import SecondaryButton from "./SecondaryButton";

export default function NavBar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">
          <Link href="/">uK</Link>
        </h1>
        <div className="min-w-min flex justify-center">
          {isAuthenticated ? (
            <>
              <Link href="/create">
                <Button>Create Post</Button>
              </Link>
              <div className="w-3"></div>
              <SecondaryButton
                onClick={logout}
                className="border px-4 py-3 text-center text-sm font-bold cursor-pointer uppercase"
              >
                Logout
              </SecondaryButton>
            </>
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
