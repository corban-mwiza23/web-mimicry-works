
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';
import { useProjectStore, Project } from '@/store/projectStore';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Edit, Trash, Plus, LogIn } from 'lucide-react';
import ProjectForm from '@/components/admin/ProjectForm';
import ChatNotifications from '@/components/admin/ChatNotifications';

const AdminDashboard = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { projects, deleteProject } = useProjectStore();
  
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<number | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate('/');
  };

  const handleDeleteClick = (id: number) => {
    setProjectToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (projectToDelete !== null) {
      deleteProject(projectToDelete);
      toast({
        title: "Project deleted",
        description: "The project has been successfully deleted",
      });
      setIsDeleteDialogOpen(false);
      setProjectToDelete(null);
    }
  };

  const handleEditClick = (project: Project) => {
    setEditingProject(project);
    setIsFormOpen(true);
  };

  const handleAddNew = () => {
    setEditingProject(null);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingProject(null);
  };

  if (!isAuthenticated) {
    return null; // Will redirect due to useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <ChatNotifications />
            <Button variant="outline" onClick={handleLogout}>
              <LogIn className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Projects Management</h2>
            <Button onClick={handleAddNew}>
              <Plus className="mr-2 h-4 w-4" />
              Add New Project
            </Button>
          </div>

          {/* Projects Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Completion Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>{project.id}</TableCell>
                    <TableCell className="font-medium">{project.title}</TableCell>
                    <TableCell>{project.category}</TableCell>
                    <TableCell>{project.client}</TableCell>
                    <TableCell>{project.location}</TableCell>
                    <TableCell>{new Date(project.completionDate).toLocaleDateString('en-US', {year: 'numeric', month: 'long'})}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleEditClick(project)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700" onClick={() => handleDeleteClick(project.id)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the project.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-red-500 hover:bg-red-700">Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Project Form */}
      {isFormOpen && (
        <ProjectForm
          project={editingProject}
          onClose={closeForm}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
