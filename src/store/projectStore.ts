
import { create } from 'zustand';

export interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  location: string;
  completionDate: string;
  image: string;
  description: string;
}

// Define what's required when adding a new project (everything except 'id')
export type NewProject = Omit<Project, 'id'>;

interface ProjectStore {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  addProject: (project: NewProject) => void;
  updateProject: (id: number, updatedProject: Partial<Project>) => void;
  deleteProject: (id: number) => void;
}

// Initial projects data with Dubai building themed images
const initialProjects: Project[] = [
  {
    id: 1,
    title: "Burj Khalifa Automation System",
    category: "automation",
    client: "Emaar Properties",
    location: "Downtown Dubai, UAE",
    completionDate: "2023-06",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
    description: "Implementation of a fully automated smart building system for the iconic Burj Khalifa with IoT connectivity and real-time monitoring capabilities.",
  },
  {
    id: 2,
    title: "Dubai Solar Park Integration",
    category: "energy",
    client: "Dubai Electricity & Water Authority",
    location: "Dubai, UAE",
    completionDate: "2023-03",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
    description: "Design and implementation of a 100MW solar power plant with grid integration for Dubai's sustainable energy initiative.",
  },
  {
    id: 3,
    title: "Palm Jumeirah Infrastructure",
    category: "manufacturing",
    client: "Nakheel",
    location: "Palm Jumeirah, Dubai, UAE",
    completionDate: "2022-12",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
    description: "Engineering and installation of advanced manufacturing processes for Palm Jumeirah's artificial island extensions.",
  },
  {
    id: 4,
    title: "Dubai Metro Signaling System",
    category: "infrastructure",
    client: "Roads and Transport Authority",
    location: "Dubai Metro Network, UAE",
    completionDate: "2022-09",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
    description: "Modernization of Dubai Metro signaling systems with advanced safety features and digital controls.",
  },
  {
    id: 5,
    title: "Dubai Mall Building Automation",
    category: "automation",
    client: "Emaar Malls",
    location: "Downtown Dubai, UAE",
    completionDate: "2022-05",
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
    description: "Design and implementation of automated building management systems for the world's largest mall.",
  },
  {
    id: 6,
    title: "Dubai Water Canal Project",
    category: "infrastructure",
    client: "Dubai Municipality",
    location: "Dubai, UAE",
    completionDate: "2022-04",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
    description: "Development of advanced control systems for the Dubai Water Canal with real-time monitoring and quality assurance.",
  },
];

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: initialProjects,
  setProjects: (projects) => set({ projects }),
  addProject: (project) => set((state) => ({
    projects: [...state.projects, { ...project, id: Math.max(0, ...state.projects.map(p => p.id)) + 1 }]
  })),
  updateProject: (id, updatedProject) => set((state) => ({
    projects: state.projects.map((project) =>
      project.id === id ? { ...project, ...updatedProject } : project
    ),
  })),
  deleteProject: (id) => set((state) => ({
    projects: state.projects.filter((project) => project.id !== id),
  })),
}));
