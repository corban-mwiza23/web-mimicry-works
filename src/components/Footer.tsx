
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ISAN Engineering</h3>
            <p className="text-gray-300 mb-4">
              Leading provider of innovative engineering solutions for over 30 years.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-primary">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-primary">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Projects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary">Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Manufacturing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Installation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Maintenance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary">Consulting</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-300">123 Engineering Way, Seoul, South Korea</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-300">+82 2 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-300">info@isaneng.co.kr</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ISAN Engineering Co., Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
