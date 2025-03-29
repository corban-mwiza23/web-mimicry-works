
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

// Initial projects data
const initialProjects: Project[] = [
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
