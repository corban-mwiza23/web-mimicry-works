
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useProjectStore } from "@/store/projectStore";

const Projects = () => {
  const { toast } = useToast();
  const { projects } = useProjectStore(); // Use projects from the store

  useEffect(() => {
    // Show welcome toast when page loads
    toast({
      title: "Projects",
      description: "Browse our portfolio of successful engineering projects",
    });
  }, [toast]);

  // Project categories
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "automation", label: "Automation" },
    { id: "energy", label: "Energy" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "infrastructure", label: "Infrastructure" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Parallax Effect */}
      <div className="bg-primary/10 py-16 md:py-24 relative overflow-hidden">
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">Our Projects</h1>
            <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Explore our portfolio of successful engineering projects across various industries.
              ISAN Engineering has delivered excellence in automation, energy solutions, manufacturing, and infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Display */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="inline-flex h-auto p-1 bg-gray-100 rounded-full">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="px-5 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all duration-300"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {/* All Projects Tab */}
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Category Tabs */}
          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === category.id)
                  .map((project, index) => (
                    <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <ProjectCard project={project} />
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/90 to-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Customized Solution?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our engineering team is ready to help you with your specific project requirements.
            Contact us today to discuss your needs.
          </p>
          <Button size="lg" variant="secondary" className="transition-transform hover:scale-105" asChild>
            <a href="/contact">Contact Our Team</a>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="space-y-1 text-sm">
          <p><span className="font-semibold">Client:</span> {project.client}</p>
          <p><span className="font-semibold">Location:</span> {project.location}</p>
          <p><span className="font-semibold">Completed:</span> {new Date(project.completionDate).toLocaleDateString('en-US', {year: 'numeric', month: 'long'})}</p>
        </div>
        <Button variant="outline" className="mt-4 w-full transition-colors hover:bg-primary/10">View Details</Button>
      </div>
    </Card>
  );
};

export default Projects;
