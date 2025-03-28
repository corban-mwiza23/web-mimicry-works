
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X, Phone, Mail, Globe, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [allMenuOpen, setAllMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (allMenuOpen) setAllMenuOpen(false);
  };

  const toggleAllMenu = () => {
    setAllMenuOpen(!allMenuOpen);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  const aboutUsLinks = [
    { title: "Company Profile", path: "/about" },
    { title: "History", path: "/history" },
    { title: "Organization", path: "/organization" },
    { title: "Message from CEO", path: "/message" },
    { title: "Certifications", path: "/certifications" },
    { title: "Partners", path: "/partners" },
  ];

  const productLinks = [
    { title: "Industrial Automation", path: "/products/automation" },
    { title: "Control Systems", path: "/products/control-systems" },
    { title: "Energy Solutions", path: "/products/energy-solutions" },
    { title: "Engineering Services", path: "/products/services" },
    { title: "Smart Factory", path: "/products/smart-factory" },
    { title: "IoT Applications", path: "/products/iot" },
  ];

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
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <NavLink to="/">Home</NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {aboutUsLinks.map((link) => (
                      <li key={link.path}>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to={link.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{link.title}</div>
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {productLinks.map((link) => (
                      <li key={link.path}>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to={link.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{link.title}</div>
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <NavLink to="/projects">Projects</NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <NavLink to="/certificates">Certificates</NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <NavLink to="/contact">Contact</NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* All Menu and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="hidden md:flex items-center" 
              onClick={toggleAllMenu}
            >
              <MenuIcon className="h-5 w-5 mr-2" />
              All Menu
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* All Menu Overlay */}
      {allMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-y-0 right-0 max-w-full flex">
              <div className="relative w-screen max-w-md transform transition ease-in-out duration-300">
                <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                  <div className="p-6 flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">All Menu</h2>
                    <Button variant="ghost" size="icon" onClick={toggleAllMenu}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="mb-6">
                      <h3 className="font-bold text-primary mb-4">About Us</h3>
                      <ul className="space-y-3">
                        {aboutUsLinks.map((link) => (
                          <li key={link.path}>
                            <NavLink 
                              to={link.path} 
                              className="text-gray-700 hover:text-primary"
                              onClick={toggleAllMenu}
                            >
                              {link.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h3 className="font-bold text-primary mb-4">Products</h3>
                      <ul className="space-y-3">
                        {productLinks.map((link) => (
                          <li key={link.path}>
                            <NavLink 
                              to={link.path} 
                              className="text-gray-700 hover:text-primary"
                              onClick={toggleAllMenu}
                            >
                              {link.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h3 className="font-bold text-primary mb-4">Quick Links</h3>
                      <ul className="space-y-3">
                        <li>
                          <NavLink 
                            to="/projects" 
                            className="text-gray-700 hover:text-primary"
                            onClick={toggleAllMenu}
                          >
                            Projects
                          </NavLink>
                        </li>
                        <li>
                          <NavLink 
                            to="/certificates" 
                            className="text-gray-700 hover:text-primary"
                            onClick={toggleAllMenu}
                          >
                            Certificates
                          </NavLink>
                        </li>
                        <li>
                          <NavLink 
                            to="/contact" 
                            className="text-gray-700 hover:text-primary"
                            onClick={toggleAllMenu}
                          >
                            Contact
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
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
                  {aboutUsLinks.map((link) => (
                    <NavLink 
                      key={link.path}
                      to={link.path} 
                      className="block text-gray-700 hover:text-primary"
                      onClick={toggleMobileMenu}
                    >
                      {link.title}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="border-b border-gray-200 py-2">
                <p className="font-medium mb-2">Products</p>
                <div className="space-y-2 pl-4">
                  {productLinks.map((link) => (
                    <NavLink 
                      key={link.path}
                      to={link.path} 
                      className="block text-gray-700 hover:text-primary"
                      onClick={toggleMobileMenu}
                    >
                      {link.title}
                    </NavLink>
                  ))}
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
