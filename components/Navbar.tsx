"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
const routes = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Plans", href: "/plans" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <nav className="bg-[#111] text-white border-b border-neutral-800 px-4 py-3 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-white">Fit</span>
          <span className="text-red-500">Zone</span>
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex gap-10 text-lg">
          {routes.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`hover:text-red-500 transition ${
                pathname === href ? "text-red-500" : "text-white"
              }`}
            >
              {label}
            </Link>
          ))}

          {user && (
            <Link
              href="/membership"
              className={`hover:text-red-500 transition ${
                pathname === "/membership" ? "text-red-500" : "text-white"
              }`}
            >
              Membership
            </Link>
          )}
        </div>

        {/* Right: Auth buttons */}
        <div className="hidden lg:flex gap-4 items-center">
          {user ? (
            <>
              <span className="text-sm text-gray-300">Hello, {user?.email ?? "User"}</span>
              <button
                onClick={logout}
                className="bg-gray-800 hover:bg-gray-700 px-4 py-1.5 rounded text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="bg-red-600 hover:bg-red-500 px-5 py-2 rounded text-white text-sm"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 px-2">
          <div className="flex flex-col gap-2">
            {routes.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`py-2 px-4 rounded hover:bg-[#222] ${
                  pathname === href ? "bg-[#222]" : ""
                }`}
              >
                {label}
              </Link>
            ))}

            {user && (
              <Link
                href="/membership"
                onClick={() => setMenuOpen(false)}
                className={`py-2 px-4 rounded hover:bg-[#222] ${
                  pathname === "/membership" ? "bg-[#222]" : ""
                }`}
              >
                Membership
              </Link>
            )}

            {user ? (
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="py-2 px-4 text-left text-red-500 hover:bg-[#222] rounded"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="py-2 px-4 hover:bg-[#222] rounded"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
