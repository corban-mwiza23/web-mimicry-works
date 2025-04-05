
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Battery, 
  Sun, 
  Wind, 
  Droplets, 
  Leaf, 
  BarChart3,
  LightbulbIcon,
  GaugeCircle,
  Zap
} from "lucide-react";

const EnergySolutions = () => {
  const solutions = [
    {
      id: 1,
      icon: <Sun className="h-10 w-10 text-amber-500" />,
      title: "Solar Energy Integration",
      description: "Cutting-edge solar power solutions for Dubai's commercial buildings, leveraging the abundant sunshine.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
    },
    {
      id: 2,
      icon: <Battery className="h-10 w-10 text-green-500" />,
      title: "Energy Storage Systems",
      description: "Advanced battery storage solutions to optimize energy use and provide backup power for critical Dubai infrastructure.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
    },
    {
      id: 3,
      icon: <Wind className="h-10 w-10 text-blue-500" />,
      title: "Wind Energy Solutions",
      description: "Innovative wind power systems designed for Dubai's unique coastal and urban environments.",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
    },
    {
      id: 4,
      icon: <LightbulbIcon className="h-10 w-10 text-yellow-500" />,
      title: "Smart Lighting Systems",
      description: "Energy-efficient lighting solutions for Dubai's iconic skyscrapers and urban spaces.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
    },
    {
      id: 5,
      icon: <GaugeCircle className="h-10 w-10 text-purple-500" />,
      title: "Energy Monitoring",
      description: "Real-time monitoring systems for comprehensive energy management in Dubai's developments.",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
    },
    {
      id: 6,
      icon: <Zap className="h-10 w-10 text-orange-500" />,
      title: "Demand Response Systems",
      description: "Intelligent systems that optimize energy use during peak demand periods in Dubai's energy grid.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
    }
  ];

  const stats = [
    { 
      value: "40%", 
      label: "Average energy savings", 
      icon: <Leaf className="h-6 w-6 text-green-500" /> 
    },
    { 
      value: "100+", 
      label: "Dubai projects completed", 
      icon: <BarChart3 className="h-6 w-6 text-blue-500" /> 
    },
    { 
      value: "24/7", 
      label: "Monitoring and support", 
      icon: <GaugeCircle className="h-6 w-6 text-purple-500" /> 
    },
    { 
      value: "5 Years", 
      label: "Typical ROI period", 
      icon: <Droplets className="h-6 w-6 text-cyan-500" /> 
    }
  ];

  const projects = [
    {
      title: "Dubai Solar Park Integration",
      location: "Dubai Solar Park",
      description: "Implementation of energy management systems for Dubai's massive solar energy initiative.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
    },
    {
      title: "Burj Khalifa Energy Optimization",
      location: "Downtown Dubai",
      description: "Comprehensive energy efficiency upgrades for the world's tallest building.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833"
    },
    {
      title: "Dubai Metro Power Systems",
      location: "Dubai Metro Network",
      description: "Sustainable energy solutions for Dubai's public transportation infrastructure.",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-black text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 animate-gradient-x" 
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1518005020951-eccb494ad742)" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-slate-900/70"></div>
          </div>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Sustainable Energy Solutions for Dubai's Future
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl">
                Innovative energy technologies designed for Dubai's unique climate and ambitious sustainability goals
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Explore Solutions
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Contact an Expert
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Animated wave separator */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg 
              className="relative block w-full h-[50px]" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1440 100"
            >
              <path 
                fill="#ffffff" 
                fillOpacity="1" 
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
              ></path>
            </svg>
          </div>
        </section>
        
        {/* Solutions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Energy Solutions
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Comprehensive energy systems designed to maximize efficiency, sustainability, and reliability for Dubai's infrastructure
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div 
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={solution.image} 
                        alt={solution.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader className="flex items-center space-y-0 pb-2">
                      <div className="p-2 rounded-full bg-slate-100 mb-4 transform transition-transform group-hover:scale-110 group-hover:bg-primary/10">
                        {solution.icon}
                      </div>
                      <CardTitle className="text-center mt-2">{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 text-center">{solution.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="mb-4">
                        {stat.icon}
                      </div>
                      <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                      <p className="text-slate-600">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Featured Projects */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Featured Dubai Energy Projects
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group"
                  >
                    <div className="relative rounded-xl overflow-hidden h-80 shadow-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-white/80 mb-3">{project.location}</p>
                        <p className="text-white/70 text-sm">{project.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="text-center">
              <Button size="lg">
                View All Projects
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Energy Infrastructure?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Contact our energy solutions team to discuss how we can help your Dubai-based project achieve optimal energy efficiency
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Request Free Consultation
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EnergySolutions;
