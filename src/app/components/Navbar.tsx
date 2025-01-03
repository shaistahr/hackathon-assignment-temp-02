import React from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import { Input } from "./input";

const navItems: string[] = [
  "Plant pots",
  "About",
  "Products",
  "Chairs",
  "Crockery",
  "Tableware",
  "Cutlery",
];

export function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="hidden lg:flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Search className="h-6 w-6" />
                  <span className="sr-only">Search</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <div className="p-2">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full"
                  />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Center: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="font-serif text-2xl">Avion</span>
            </Link>
          </div>

          {/* Right side: Cart & Profile Icons (hidden on small screens) */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/carts"
              className="flex justify-center items-center gap-x-1"
            >
              <ShoppingCart className="text-xs" />
              <span className="text-sm text-center mb-3 text-white bg-red-500 h-[20px] w-[20px] rounded-[50%]">
                2
              </span>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-4 text-gray-400 hover:text-gray-500"
                >
                  <User className="h-6 w-6" />
                  <span className="sr-only">User account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/signin">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/login">Login</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu and search (visible on small screens) */}
          <div className="flex lg:hidden items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Search className="h-6 w-6" />
                  <span className="sr-only">Search</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="p-2">
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-full"
                  />
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-4 text-gray-400 hover:text-gray-500"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-4">
                  <Link
                    href="/Plant"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
                  >
                    Plant pots
                  </Link>
                  <Link
                    href="/about-us"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
                  >
                    About
                  </Link>
                  <Link
                    href="/all-products"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
                  >
                    Products
                  </Link>

                  <Link
                    href="/chair"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
                  >
                    Chairs
                  </Link>

                  <Link
                    href="/Crockery"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
                  >
                    Crockery
                  </Link>
                  <Link
                    href="/Cutlery"
                    className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
                  >
                    Cutlery
                  </Link>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start text-gray-400 hover:text-gray-500"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    <span>Cart</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start text-gray-400 hover:text-gray-500"
                  >
                    <User className="h-5 w-5 mr-2" />
                    <span>Profile</span>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:justify-center flex-wrap gap-4 mt-4">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
          >
            Plant pots
          </Link>
          <Link
            href="/about-us"
            className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
          >
            About
          </Link>
          <Link
            href="/all-products"
            className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
          >
            Products
          </Link>

          <Link
            href= "/"
            className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
          >
            Chairs
          </Link>

          <Link
            href="/"
            className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
          >
            Crockery
          </Link>
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out"
          >
            Cutlery
          </Link>
        </div>
      </div>
    </nav>
  );
}
