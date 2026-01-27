import { NameAndLinks, ProjectGrid } from "../components"

const ProjectsPage = () => {
  return (
    <>
      <NameAndLinks />
      <p className="flex content-center justify-center text-lg text-text">NOTE: Projects are being ported to new containerized infrastructure, please check back later.</p>
      <ProjectGrid />
    </>
  )
}

export default ProjectsPage;