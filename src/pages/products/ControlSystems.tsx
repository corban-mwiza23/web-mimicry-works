
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Sliders, Zap, Cpu, BarChart4 } from "lucide-react";

const ControlSystems = () => {
  const features = [
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Automated Control Systems",
      description: "Fully automated control systems designed for Dubai's modern buildings with remote monitoring capabilities."
    },
    {
      icon: <Sliders className="h-8 w-8 text-primary" />,
      title: "Precision Process Control",
      description: "High-precision process control systems for manufacturing and industrial applications in Dubai's developing zones."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Energy Management",
      description: "Smart energy management systems to optimize consumption in Dubai's commercial and residential buildings."
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "PLC Integration",
      description: "Programmable Logic Controller systems customized for Dubai's infrastructure projects."
    },
    {
      icon: <BarChart4 className="h-8 w-8 text-primary" />,
      title: "Data Analytics",
      description: "Real-time data collection and analytics for smart management of Dubai's urban systems."
    }
  ];

  const systems = {
    industrial: [
      {
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
        title: "Industrial Automation Systems",
        description: "Comprehensive automation solutions for Dubai's manufacturing and processing industries."
      },
      {
        image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
        title: "Motion Control Systems",
        description: "Precision motion control for industrial applications throughout Dubai's manufacturing sector."
      }
    ],
    building: [
      {
        image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
        title: "Smart Building Management",
        description: "Integrated systems for controlling lighting, climate, security and more in Dubai's iconic buildings."
      },
      {
        image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
        title: "HVAC Control Solutions",
        description: "Advanced climate control systems designed for Dubai's extreme temperatures."
      }
    ],
    infrastructure: [
      {
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        title: "Traffic Management Systems",
        description: "Smart traffic control for Dubai's growing urban road network."
      },
      {
        image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
        title: "Water & Utility Controls",
        description: "Automated systems for managing Dubai's critical water and utility infrastructure."
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700 py-20">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1518005020951-eccb494ad742)" }}></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Control Systems
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Powering Dubai's infrastructure with intelligent automation and control solutions
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Request Consultation
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Control System Features</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Delivering precise, reliable and intelligent control systems tailored for Dubai's unique requirements
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader className="flex flex-col items-center">
                      <div className="p-3 rounded-full bg-primary/10 mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-center">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-slate-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Systems Showcase */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-center mb-12">Our Control System Solutions</h2>
              
              <Tabs defaultValue="industrial" className="w-full">
                <div className="flex justify-center mb-12">
                  <TabsList className="grid w-full max-w-md grid-cols-3">
                    <TabsTrigger value="industrial">Industrial</TabsTrigger>
                    <TabsTrigger value="building">Building</TabsTrigger>
                    <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
                  </TabsList>
                </div>
                
                {Object.entries(systems).map(([category, items]) => (
                  <TabsContent key={category} value={category} className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {items.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          className="overflow-hidden rounded-xl shadow-md bg-white"
                        >
                          <div className="h-64 overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-slate-600">{item.description}</p>
                            <Button variant="outline" className="mt-4">Learn More</Button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Upgrade Your Control Systems?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Contact our team to discuss how our control system solutions can benefit your Dubai-based project
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  View Case Studies
                </Button>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Contact Us Today
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ControlSystems;
