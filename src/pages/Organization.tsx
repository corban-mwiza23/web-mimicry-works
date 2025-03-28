
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Organization = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Organization Structure",
      description: "Learn about how ISAN Engineering is structured",
    });
  }, [toast]);

  // Leadership team data
  const executives = [
    {
      name: "John Kim",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      description: "With over 25 years of experience in engineering and leadership, John has guided ISAN Engineering to become an industry leader."
    },
    {
      name: "Sarah Park",
      position: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      description: "Sarah leads our technology strategy and R&D initiatives, bringing innovative solutions to complex engineering challenges."
    },
    {
      name: "David Lee",
      position: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      description: "David oversees our operations globally, ensuring efficient project delivery and operational excellence."
    },
    {
      name: "Emily Jang",
      position: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      description: "Emily manages our financial strategy and ensures sustainable growth and investment in innovation."
    }
  ];

  // Departments data
  const departments = [
    {
      name: "Engineering Division",
      description: "Core engineering services including mechanical, electrical, and systems engineering",
      divisions: ["Mechanical Engineering", "Electrical Engineering", "Systems Engineering", "Civil Engineering"]
    },
    {
      name: "Automation Solutions",
      description: "Specialized in industrial automation, robotics, and smart manufacturing",
      divisions: ["Robotics", "Process Automation", "Control Systems", "IoT Solutions"]
    },
    {
      name: "Project Management",
      description: "Expert project planning, execution, and monitoring for engineering projects",
      divisions: ["Planning & Scheduling", "Resource Management", "Quality Control", "Risk Management"]
    },
    {
      name: "Research & Development",
      description: "Innovation center focused on developing cutting-edge technologies and solutions",
      divisions: ["Product Innovation", "Technology Research", "Industry 4.0", "Sustainable Solutions"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary/10 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-15"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1')",
              transform: "translateZ(-10px) scale(2)", 
              backgroundAttachment: "fixed" 
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">Our Organization</h1>
            <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              The structure and team behind ISAN Engineering's success
            </p>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executives.map((executive, index) => (
              <Card 
                key={index} 
                className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={executive.image} 
                    alt={executive.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{executive.name}</h3>
                  <p className="text-primary font-medium mb-4">{executive.position}</p>
                  <p className="text-gray-600">{executive.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Organization Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Organization Structure</h2>
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-primary text-center">
              <h3 className="text-2xl font-bold mb-2">ISAN Engineering Co., Ltd.</h3>
              <p className="text-gray-600">Founded in 1990 • Headquartered in Seoul, South Korea</p>
            </div>
            
            <div className="relative h-20">
              <div className="absolute left-1/2 w-0.5 h-full bg-gray-300"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow border-t-2 border-primary">
                <h4 className="font-bold text-lg mb-2">Business Units</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Industrial Solutions</li>
                  <li>• Energy Systems</li>
                  <li>• Infrastructure Projects</li>
                  <li>• Smart Technology</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow border-t-2 border-primary">
                <h4 className="font-bold text-lg mb-2">Support Functions</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Human Resources</li>
                  <li>• Finance & Accounting</li>
                  <li>• Legal & Compliance</li>
                  <li>• Marketing & Communications</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Departments */}
          <h3 className="text-2xl font-bold text-center mb-8">Our Key Departments</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="p-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <h4 className="text-xl font-bold text-primary mb-2">{dept.name}</h4>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-medium mb-2">Key Divisions:</p>
                  <div className="grid grid-cols-2 gap-1">
                    {dept.divisions.map((div, i) => (
                      <p key={i} className="text-gray-700">• {div}</p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Global Presence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Global Presence</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              ISAN Engineering operates globally with regional offices and representatives around the world,
              ensuring we can serve our clients wherever they are located.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-100 p-6 rounded-lg max-w-2xl w-full">
              <div className="text-center">
                <p className="font-bold mb-2">Headquarters</p>
                <p className="text-gray-600">Seoul, South Korea</p>
              </div>
              <hr className="my-6" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="font-bold mb-1">Asia</p>
                  <p className="text-gray-600">Tokyo, Japan</p>
                  <p className="text-gray-600">Shanghai, China</p>
                  <p className="text-gray-600">Singapore</p>
                </div>
                <div>
                  <p className="font-bold mb-1">Europe</p>
                  <p className="text-gray-600">Frankfurt, Germany</p>
                  <p className="text-gray-600">London, UK</p>
                </div>
                <div>
                  <p className="font-bold mb-1">Americas</p>
                  <p className="text-gray-600">San Jose, USA</p>
                  <p className="text-gray-600">São Paulo, Brazil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Organization;
