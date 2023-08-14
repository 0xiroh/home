import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';

function Home() {
  // Sample data for the ProjectCard component
  const projects = [
    {
      name: 'Project 1',
      description: 'Description for Project 1',
      image: 'image_url_1.jpg',
    },
    {
      name: 'Project 2',
      description: 'Description for Project 2',
      image: 'image_url_2.jpg',
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <Header />
      <main className="w-[90vw] mx-auto flex-col">
        <Hero imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQ6r9edQVBW9Uikb-seM0x24tyPg96cFvhg&usqp=CAU"/>
        <h1 className="text-2xl font-bold mb-4">My Projects</h1>
        <iframe src="https://dune.com/embeds/2614494/4337448" height={500} width={1000} className='bg-white'></iframe>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Me</h2>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
