"use client"
// components/Header.tsx
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Header: React.FC = () => {
  return (
    <header className="shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Branding */}
        <Link href="/">
          <p className="text-xl font-bold text-gray-800">Performer</p>
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-4 flex flex-row">
          <Link href="/">
            <p className="text-gray-600 hover:text-gray-800">Home</p>
          </Link>
          <Link href="/about">
            <p className="text-gray-600 hover:text-gray-800">About</p>
          </Link>
          <Link href="/dashboard">
            <p className="text-gray-600 hover:text-gray-800">Dashboard</p>
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="space-x-2">
            <Button asChild>
                <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild>
                <Link href="/auth/signup">Sign Up</Link>
            </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
