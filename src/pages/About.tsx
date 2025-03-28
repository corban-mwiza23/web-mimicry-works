
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Company Profile",
      description: "Learn about ISAN Engineering's mission and values",
    });
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary/10 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-15"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')",
              transform: "translateZ(-10px) scale(2)", 
              backgroundAttachment: "fixed" 
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">About ISAN Engineering</h1>
            <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              A premier engineering solutions provider committed to innovation and excellence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
              <p className="text-gray-700 mb-6">
                ISAN Engineering Co., Ltd. was founded with a clear vision: to become the leading provider of innovative 
                engineering solutions worldwide. We aim to transform industries through cutting-edge technology and 
                uncompromising quality.
              </p>
              <p className="text-gray-700 mb-6">
                Our commitment to excellence drives us to continuously improve our processes and solutions. 
                With a customer-centric approach, we strive to exceed expectations and build lasting relationships 
                with our clients and partners.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Excellence</h3>
                    <p className="text-gray-600">We pursue excellence in every project, ensuring the highest standards of quality.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Innovation</h3>
                    <p className="text-gray-600">We continuously innovate to deliver state-of-the-art solutions to complex challenges.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Integrity</h3>
                    <p className="text-gray-600">We conduct our business with the highest ethical standards and transparency.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="ISAN Engineering headquarters" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">ISAN Engineering at a Glance</h2>
            <p className="text-gray-600 mt-2">Key figures that define our company</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-4xl font-bold text-primary mb-2">30+</h3>
              <p className="text-gray-600">Years of Experience</p>
            </Card>
            <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-gray-600">Completed Projects</p>
            </Card>
            <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-4xl font-bold text-primary mb-2">250+</h3>
              <p className="text-gray-600">Team Members</p>
            </Card>
            <Card className="p-6 border-none shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
              <p className="text-gray-600">Countries Served</p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Let's discuss how our engineering expertise can help solve your challenges and drive your business forward.
          </p>
          <Button variant="secondary" size="lg" className="transition-transform hover:scale-105" asChild>
            <a href="/contact">Contact Us Today</a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
