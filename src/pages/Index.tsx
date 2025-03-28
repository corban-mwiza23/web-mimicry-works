
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronRight, Award, Briefcase, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Slider from "@/components/Slider";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Slider Section */}
      <section className="relative">
        <Slider />
      </section>
      
      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-6">Welcome to ISAN Engineering</h2>
              <p className="text-gray-700 mb-6">
                ISAN Engineering Co., Ltd. is a leading technology-driven company dedicated to providing innovative solutions in engineering. 
                Since our foundation, we have been committed to excellence in engineering design, manufacturing, and after-sales service.
              </p>
              <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90" asChild>
                <Link to="/about">
                  Company Profile <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-full rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 shadow-lg">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Engineering professionals" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Business Areas</h2>
            <p className="text-gray-600 mt-2">Explore our wide range of specialized engineering services</p>
          </div>
          
          <Tabs defaultValue="area1" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="area1">Design</TabsTrigger>
              <TabsTrigger value="area2">Manufacturing</TabsTrigger>
              <TabsTrigger value="area3">Installation</TabsTrigger>
              <TabsTrigger value="area4">Service</TabsTrigger>
            </TabsList>
            <TabsContent value="area1" className="bg-white p-6 rounded-lg shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <AspectRatio ratio={4/3}>
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                      alt="Engineering design" 
                      className="object-cover w-full h-full rounded-md"
                    />
                  </AspectRatio>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-4">Engineering Design Excellence</h3>
                  <p className="text-gray-700 mb-4">
                    Our team of expert engineers provides comprehensive design solutions for complex engineering challenges.
                    With advanced tools and methodologies, we ensure optimal designs that meet all specifications and standards.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Mechanical system design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Process engineering design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>3D modeling and simulation</span>
                    </li>
                  </ul>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="area2" className="bg-white p-6 rounded-lg shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <AspectRatio ratio={4/3}>
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                      alt="Manufacturing" 
                      className="object-cover w-full h-full rounded-md"
                    />
                  </AspectRatio>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-4">Precision Manufacturing</h3>
                  <p className="text-gray-700 mb-4">
                    Our state-of-the-art manufacturing facilities enable us to produce high-quality components and systems.
                    We maintain rigorous quality control throughout the production process.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Custom component fabrication</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Industrial system assembly</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Quality testing and certification</span>
                    </li>
                  </ul>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="area3" className="bg-white p-6 rounded-lg shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <AspectRatio ratio={4/3}>
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                      alt="Installation" 
                      className="object-cover w-full h-full rounded-md"
                    />
                  </AspectRatio>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-4">Professional Installation</h3>
                  <p className="text-gray-700 mb-4">
                    Our skilled technicians ensure proper installation of all systems and equipment.
                    We adhere to international safety standards and local regulations during all installations.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>On-site system integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Equipment setup and calibration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Safety compliance verification</span>
                    </li>
                  </ul>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="area4" className="bg-white p-6 rounded-lg shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <AspectRatio ratio={4/3}>
                    <img 
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                      alt="Service" 
                      className="object-cover w-full h-full rounded-md"
                    />
                  </AspectRatio>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-4">Comprehensive Maintenance Services</h3>
                  <p className="text-gray-700 mb-4">
                    We provide ongoing support and maintenance to ensure optimal operation of all installed systems.
                    Our service team is available 24/7 to address any issues and minimize downtime.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Preventive maintenance programs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>Emergency repair services</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>System upgrades and optimization</span>
                    </li>
                  </ul>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Why Choose Us</h2>
            <p className="text-gray-600 mt-2">The advantages that set us apart</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  Our products meet the highest international standards with ISO certifications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">30+ Years Experience</h3>
                <p className="text-gray-600">
                  Decades of proven expertise in delivering superior engineering solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Our engineers and technicians are highly qualified specialists in their fields.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Global Presence</h3>
                <p className="text-gray-600">
                  Serving clients worldwide with projects across multiple continents.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Recent Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Recent Projects</h2>
            <p className="text-gray-600 mt-2">Explore our latest engineering achievements</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                    alt="Project 1" 
                    className="object-cover w-full transform transition-transform duration-500 hover:scale-110"
                  />
                </AspectRatio>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Industrial Automation System</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive automation solution for manufacturing facility resulting in 40% efficiency improvement.
                </p>
                <Button variant="link" className="p-0 flex items-center gap-1 transition-colors hover:text-primary" asChild>
                  <Link to="/projects">
                    View Project <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Project 2" 
                    className="object-cover w-full transform transition-transform duration-500 hover:scale-110"
                  />
                </AspectRatio>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Energy Management System</h3>
                <p className="text-gray-600 mb-4">
                  Innovative energy monitoring and optimization solution for commercial buildings.
                </p>
                <Button variant="link" className="p-0 flex items-center gap-1 transition-colors hover:text-primary" asChild>
                  <Link to="/projects">
                    View Project <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Project 3" 
                    className="object-cover w-full transform transition-transform duration-500 hover:scale-110"
                  />
                </AspectRatio>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-2">Advanced Control System</h3>
                <p className="text-gray-600 mb-4">
                  Custom-designed control system for precision manufacturing processes.
                </p>
                <Button variant="link" className="p-0 flex items-center gap-1 transition-colors hover:text-primary" asChild>
                  <Link to="/projects">
                    View Project <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Button className="group transition-transform hover:scale-105" asChild>
              <Link to="/projects">
                View All Projects <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact our team today to discuss how our engineering expertise can help solve your challenges and drive your business forward.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" className="transition-transform hover:scale-105" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" className="text-white border-white transition-transform hover:scale-105 hover:bg-white/10" asChild>
              <Link to="/services">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
