const ProjectGrid = () => {
  const projects: { name: string, description: string, link: string, color: string }[] = [
    { name: 'File Share', description: 'Public file sharing board, no account required', link: 'https://files.ericgi231.me', color: 'bg-green-600' },
    { name: 'Mora Jai Boxes Online', description: 'Every Mora Jai box from Blue Prince recreated online', link: 'https://mora-jai.ericgi231.me', color: 'bg-blue-400' },
    { name: 'Animal Race Bets', description: 'A multiplayer animal race betting game', link: 'https://animal-race.ericgi231.me', color: 'bg-orange-600' },
    { name: 'Mewgenics Companion App', description: 'Companion app for Mewgenics', link: 'https://mewgenics.ericgi231.me', color: 'bg-purple-600' },
  ];

  return (
    <div className="flex justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <a
            key={project.name + idx}
            href={project.link}
            rel="noopener noreferrer"
            className="rounded-2xl shadow-md w-full max-w-80 h-48 flex flex-col overflow-hidden no-underline"
          >
            <div className="bg-text px-4 py-2">
              <h2 className="text-xl font-bold text-text-inverse text-center">{project.name}</h2>
            </div>
            <div className={`${project.color} flex-1 flex items-center justify-center px-6 py-4`}>
              <p className="text-xl text-white text-center leading-relaxed">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectGrid;