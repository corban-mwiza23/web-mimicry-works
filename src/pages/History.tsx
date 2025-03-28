
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const History = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Company History",
      description: "Explore the journey of ISAN Engineering through the years",
    });
  }, [toast]);

  // Timeline events
  const timeline = [
    {
      year: "1990",
      title: "Foundation",
      description: "ISAN Engineering was established as a small engineering consultancy firm with just 5 employees."
    },
    {
      year: "1995",
      title: "Expansion",
      description: "The company expanded its operations into manufacturing, opening its first production facility."
    },
    {
      year: "2000",
      title: "International Growth",
      description: "ISAN Engineering began serving international clients and opened its first overseas office."
    },
    {
      year: "2005",
      title: "Automation Division",
      description: "Launch of the Automation Systems division, focusing on industrial automation solutions."
    },
    {
      year: "2010",
      title: "Smart Factory Initiative",
      description: "Introduction of the Smart Factory initiative, integrating IoT and AI into manufacturing processes."
    },
    {
      year: "2015",
      title: "Global Recognition",
      description: "ISAN received the Global Engineering Excellence Award for innovative solutions."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Complete digital transformation of operations and launch of remote engineering services."
    },
    {
      year: "Present",
      title: "Continued Innovation",
      description: "Continuing to lead the industry with cutting-edge solutions and expanding global presence."
    },
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
              backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6')",
              transform: "translateZ(-10px) scale(2)", 
              backgroundAttachment: "fixed" 
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">Our History</h1>
            <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
              The journey of ISAN Engineering from its humble beginnings to industry leadership
            </p>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Journey Through the Years</h2>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
              
              {/* Timeline events */}
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="md:w-1/2 mb-6 md:mb-0 px-4">
                      <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-primary">
                        <h3 className="text-xl font-bold text-primary mb-1">{event.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">{event.year}</p>
                        <p className="text-gray-700">{event.description}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center z-10 relative">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Legacy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="ISAN Engineering early days" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Legacy of Excellence</h2>
              <p className="text-gray-700 mb-6">
                From our humble beginnings in 1990, ISAN Engineering has grown into a global leader in engineering solutions.
                Our journey has been marked by a relentless pursuit of excellence, innovation, and a commitment to solving
                the most complex engineering challenges.
              </p>
              <p className="text-gray-700 mb-6">
                Through economic ups and downs, technological revolutions, and changing market dynamics, we have remained
                steadfast in our mission to deliver exceptional value to our clients. Our history is not just a timeline
                of events but a testament to our resilience, adaptability, and forward-thinking approach.
              </p>
              <p className="text-gray-700">
                As we look to the future, we carry forward the lessons of our past and the values that have defined us.
                We continue to write our story, one innovation at a time, driven by the same passion and commitment
                that has guided us from the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default History;
