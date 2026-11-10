import { NameAndLinks, ProjectGrid } from "../components"

const ProjectsPage = () => {
  return (
    <>
      <p className="px-4 py-3 text-center font-semibold text-yellow-500">
        Due to a corrupted hard drive, services are currently being restored and data may be missing
      </p>
      <NameAndLinks />
      <ProjectGrid />
    </>
  )
}

export default ProjectsPage;