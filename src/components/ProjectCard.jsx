const ProjectCard = ({ project }) => {
    return (
      <div className="bg-white p-4 shadow-md">
        <img src={project.image} alt={project.name} className="w-full h-64 object-cover" />
        <h3 className="text-xl font-bold mt-2">{project.name}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    );
  };
  
  export default ProjectCard;
  