
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  // Project categories
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "automation", label: "Automation" },
    { id: "energy", label: "Energy" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "infrastructure", label: "Infrastructure" },
  ];

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Smart Factory Automation System",
      category: "automation",
      client: "Samsung Electronics",
      location: "Hwaseong, Korea",
      completionDate: "2023-06",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      description: "Implementation of a fully automated smart factory system with IoT connectivity and real-time monitoring capabilities.",
    },
    {
      id: 2,
      title: "Solar Power Integration Project",
      category: "energy",
      client: "Korea Electric Power Corporation",
      location: "Jeju Island, Korea",
      completionDate: "2023-03",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      description: "Design and implementation of a 50MW solar power plant with grid integration and smart monitoring systems.",
    },
    {
      id: 3,
      title: "Semiconductor Manufacturing Line",
      category: "manufacturing",
      client: "SK Hynix",
      location: "Icheon, Korea",
      completionDate: "2022-12",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      description: "Engineering and installation of clean room manufacturing equipment for semiconductor production.",
    },
    {
      id: 4,
      title: "Railway Signaling System Upgrade",
      category: "infrastructure",
      client: "Korea Rail Network Authority",
      location: "Seoul-Busan Line",
      completionDate: "2022-09",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Modernization of railway signaling systems with advanced safety features and digital controls.",
    },
    {
      id: 5,
      title: "Pharmaceutical Production Automation",
      category: "automation",
      client: "Yuhan Corporation",
      location: "Ochang, Korea",
      completionDate: "2022-05",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      description: "Design and implementation of automated production lines for pharmaceutical manufacturing with GMP compliance.",
    },
    {
      id: 6,
      title: "Water Treatment Plant Control System",
      category: "infrastructure",
      client: "K-water",
      location: "Daejeon, Korea",
      completionDate: "2022-04",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      description: "Development of advanced control systems for municipal water treatment with real-time monitoring and quality assurance.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h1>
            <p className="text-lg text-gray-700 mb-8">
              Explore our portfolio of successful engineering projects across various industries.
              ISAN Engineering has delivered excellence in automation, energy solutions, manufacturing, and infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Display */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="inline-flex h-auto p-1 bg-gray-100">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className="px-5 py-2 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {/* All Projects Tab */}
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          {/* Category Tabs */}
          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === category.id)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Customized Solution?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our engineering team is ready to help you with your specific project requirements.
            Contact us today to discuss your needs.
          </p>
          <Button size="lg" asChild>
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
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
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
        <Button variant="outline" className="mt-4 w-full">View Details</Button>
      </div>
    </Card>
  );
};

export default Projects;
