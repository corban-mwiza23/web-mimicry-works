
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowRight, Briefcase, Wrench, Settings } from "lucide-react";

const Services = () => {
  // Services data
  const servicesList = [
    {
      id: 1,
      title: "Industrial Automation",
      icon: <Settings className="h-10 w-10 text-primary" />,
      description: "Advanced automation solutions for manufacturing processes including PLC programming, SCADA systems, and robotics integration.",
      features: [
        "PLC & DCS Implementation",
        "SCADA System Design",
        "Robotics Integration",
        "Machine Learning Applications",
        "Process Optimization"
      ]
    },
    {
      id: 2,
      title: "Control Systems Engineering",
      icon: <Wrench className="h-10 w-10 text-primary" />,
      description: "Design and implementation of control systems for various industrial applications with focus on reliability and efficiency.",
      features: [
        "Control Panel Engineering",
        "Instrumentation & Control",
        "Motion Control Systems",
        "Retrofitting Legacy Systems",
        "Safety Control Systems"
      ]
    },
    {
      id: 3,
      title: "Energy Solutions",
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      description: "Comprehensive energy management and renewable energy solutions for industrial and commercial applications.",
      features: [
        "Energy Efficiency Audits",
        "Solar & Wind Integration",
        "Energy Management Systems",
        "Power Quality Solutions",
        "Smart Grid Technologies"
      ]
    }
  ];

  // Specialized services
  const specializedServices = [
    {
      title: "Design & Engineering",
      description: "Comprehensive engineering design services including electrical, mechanical, and software design tailored to your specific requirements.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Installation & Commissioning",
      description: "Professional installation and commissioning services to ensure your systems are properly set up and functioning optimally from day one.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance programs and technical support to maximize system uptime and extend the lifetime of your equipment.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      title: "Consulting Services",
      description: "Expert consulting for technology selection, feasibility studies, and process improvement to help you make informed decisions.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-gray-700 mb-8">
              ISAN Engineering provides comprehensive engineering services with a focus on industrial automation, 
              control systems, and energy solutions. Our team of experts delivers customized solutions to meet your specific needs.
            </p>
            <Button size="lg" asChild>
              <a href="#main-services">Explore Our Services</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div id="main-services" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Core Engineering Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive range of engineering services is designed to address the complex challenges of modern industrial environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <Card key={service.id} className="p-6 flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="mt-auto">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full" variant="outline">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Specialized Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Specialized Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond our core engineering services, we offer specialized solutions to meet your specific project needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Button variant="link" className="mt-4 p-0 justify-start">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact our team today to discuss your project requirements and discover how our services can help you achieve your goals.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Request a Consultation
            </Button>
            <Button variant="ghost" size="lg" className="border border-white hover:bg-white/10">
              Download Services Brochure
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
