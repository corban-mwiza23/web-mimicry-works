
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X, Search, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 text-sm">
              <a href="tel:+821012345678" className="flex items-center text-gray-600 hover:text-primary">
                <Phone className="h-4 w-4 mr-1" />
                <span>+82 10 1234 5678</span>
              </a>
              <a href="mailto:info@isanengineering.com" className="flex items-center text-gray-600 hover:text-primary">
                <Mail className="h-4 w-4 mr-1" />
                <span>info@isanengineering.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-1 text-gray-600" />
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-sm text-gray-600 flex items-center">
                    English <ChevronDown className="h-3 w-3 ml-1" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>한국어</DropdownMenuItem>
                    <DropdownMenuItem>English</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-primary flex items-center">
            <span className="text-primary">ISAN</span>
            <span className="text-gray-700">Engineering</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({isActive}) => isActive 
                ? "font-medium text-primary" 
                : "text-gray-700 hover:text-primary transition-colors"
              }
            >
              Home
            </NavLink>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-primary">
                About Us <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <NavLink to="/about" className="w-full">Company Profile</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <NavLink to="/history" className="w-full">History</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <NavLink to="/organization" className="w-full">Organization</NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-primary">
                Products <ChevronDown className="h-4 w-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <NavLink to="/products/category1" className="w-full">Category 1</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <NavLink to="/products/category2" className="w-full">Category 2</NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <NavLink to="/products/category3" className="w-full">Category 3</NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <NavLink 
              to="/projects" 
              className={({isActive}) => isActive 
                ? "font-medium text-primary" 
                : "text-gray-700 hover:text-primary transition-colors"
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/certificates" 
              className={({isActive}) => isActive 
                ? "font-medium text-primary" 
                : "text-gray-700 hover:text-primary transition-colors"
              }
            >
              Certificates
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => isActive 
                ? "font-medium text-primary" 
                : "text-gray-700 hover:text-primary transition-colors"
              }
            >
              Contact
            </NavLink>
          </nav>
          
          {/* Search and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center relative">
              <Input 
                type="search"
                placeholder="Search..."
                className="w-40 lg:w-60 pr-8"
              />
              <Search className="absolute right-2 h-4 w-4 text-gray-500" />
            </div>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="flex mb-4">
              <Input 
                type="search"
                placeholder="Search..."
                className="w-full pr-8"
              />
              <Search className="relative -ml-8 self-center h-4 w-4 text-gray-500" />
            </div>
            <nav className="flex flex-col space-y-4">
              <NavLink 
                to="/" 
                className={({isActive}) => isActive 
                  ? "font-medium text-primary border-l-4 border-primary pl-2" 
                  : "text-gray-700 pl-2 border-l-4 border-transparent"
                }
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>
              <div className="border-b border-gray-200 py-2">
                <p className="font-medium mb-2">About Us</p>
                <div className="space-y-2 pl-4">
                  <NavLink 
                    to="/about" 
                    className="block text-gray-700 hover:text-primary"
                    onClick={toggleMobileMenu}
                  >
                    Company Profile
                  </NavLink>
                  <NavLink 
                    to="/history" 
                    className="block text-gray-700 hover:text-primary"
                    onClick={toggleMobileMenu}
                  >
                    History
                  </NavLink>
                  <NavLink 
                    to="/organization" 
                    className="block text-gray-700 hover:text-primary"
                    onClick={toggleMobileMenu}
                  >
                    Organization
                  </NavLink>
                </div>
              </div>
              <div className="border-b border-gray-200 py-2">
                <p className="font-medium mb-2">Products</p>
                <div className="space-y-2 pl-4">
                  <NavLink 
                    to="/products/category1" 
                    className="block text-gray-700 hover:text-primary"
                    onClick={toggleMobileMenu}
                  >
                    Category 1
                  </NavLink>
                  <NavLink 
                    to="/products/category2" 
                    className="block text-gray-700 hover:text-primary"
                    onClick={toggleMobileMenu}
                  >
                    Category 2
                  </NavLink>
                  <NavLink 
                    to="/products/category3" 
                    className="block text-gray-700 hover:text-primary"
                    onClick={toggleMobileMenu}
                  >
                    Category 3
                  </NavLink>
                </div>
              </div>
              <NavLink 
                to="/projects" 
                className={({isActive}) => isActive 
                  ? "font-medium text-primary border-l-4 border-primary pl-2" 
                  : "text-gray-700 pl-2 border-l-4 border-transparent"
                }
                onClick={toggleMobileMenu}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/certificates" 
                className={({isActive}) => isActive 
                  ? "font-medium text-primary border-l-4 border-primary pl-2" 
                  : "text-gray-700 pl-2 border-l-4 border-transparent"
                }
                onClick={toggleMobileMenu}
              >
                Certificates
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({isActive}) => isActive 
                  ? "font-medium text-primary border-l-4 border-primary pl-2" 
                  : "text-gray-700 pl-2 border-l-4 border-transparent"
                }
                onClick={toggleMobileMenu}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
