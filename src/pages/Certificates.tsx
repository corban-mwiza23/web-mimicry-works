
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Award, CheckCircle } from "lucide-react";

const Certificates = () => {
  const [selectedTab, setSelectedTab] = useState("iso");
  
  const certificateData = {
    iso: [
      {
        id: 1,
        title: "ISO 9001:2015",
        description: "Quality Management System",
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
        date: "Valid until: December 2025"
      },
      {
        id: 2,
        title: "ISO 14001:2015",
        description: "Environmental Management System",
        image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
        date: "Valid until: November 2025"
      },
      {
        id: 3,
        title: "ISO 45001:2018",
        description: "Occupational Health and Safety Management System",
        image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
        date: "Valid until: October 2025"
      }
    ],
    industry: [
      {
        id: 4,
        title: "Dubai Municipality Certification",
        description: "Approved Engineering Consultancy",
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
        date: "Valid until: March 2026"
      },
      {
        id: 5,
        title: "Dubai Civil Defense Approval",
        description: "Building Safety Systems Design",
        image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
        date: "Valid until: July 2025"
      }
    ],
    safety: [
      {
        id: 6,
        title: "OSHA Compliance Certificate",
        description: "Occupational Safety Standards",
        image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
        date: "Valid until: August 2025"
      },
      {
        id: 7,
        title: "Safety Contractor Certification",
        description: "Dubai Construction Safety Standards",
        image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
        date: "Valid until: February 2026"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-700 py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Certifications & Accreditations
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                ISAN Engineering maintains the highest industry standards through our comprehensive certification portfolio
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Certificates Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Tabs 
                defaultValue="iso" 
                value={selectedTab} 
                onValueChange={setSelectedTab}
                className="w-full"
              >
                <div className="flex justify-center mb-8">
                  <TabsList className="grid w-full max-w-md grid-cols-3">
                    <TabsTrigger value="iso" className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      <span className="hidden sm:inline">ISO Standards</span>
                    </TabsTrigger>
                    <TabsTrigger value="industry" className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <span className="hidden sm:inline">Industry</span>
                    </TabsTrigger>
                    <TabsTrigger value="safety" className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      <span className="hidden sm:inline">Safety</span>
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="iso" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificateData.iso.map((cert, index) => (
                      <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={cert.image} 
                              alt={cert.title} 
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle>{cert.title}</CardTitle>
                            <CardDescription>{cert.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{cert.date}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="industry" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificateData.industry.map((cert, index) => (
                      <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={cert.image} 
                              alt={cert.title} 
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle>{cert.title}</CardTitle>
                            <CardDescription>{cert.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{cert.date}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="safety" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificateData.safety.map((cert, index) => (
                      <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={cert.image} 
                              alt={cert.title} 
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle>{cert.title}</CardTitle>
                            <CardDescription>{cert.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{cert.date}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Certificates;
