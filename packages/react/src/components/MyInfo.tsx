const MyInfo = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["TypeScript", "Java", "Python", "C#", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["React", "WebSockets", "REST API Integration", "Responsive Design", "Performance Optimization"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "FastAPI", "Fastify", "REST APIs", "Microservices", "Event-Driven Architecture"]
    },
    {
      title: "Cloud & AWS",
      skills: ["Lambda", "API Gateway", "S3", "DynamoDB", "RDS", "SQS", "SNS", "Step Functions", "CloudWatch", "IAM", "KMS"]
    },
    {
      title: "Infrastructure & DevOps",
      skills: ["AWS CDK", "Docker", "Kubernetes (EKS)", "ECS", "CI/CD", "GitHub Actions", "AWS CodePipeline"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Microsoft SQL Server", "DynamoDB", "Redis"]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-lg py-xl pt-sm">
      <h2 className="text-text text-3xl font-bold mb-md">My Work</h2>
      <div className="bg-surface border border-border rounded-lg p-lg mb-lg shadow-md">
        <p className="text-lg text-text leading-relaxed">
          I've been coding since 2015 and a professional software developer since 2021. 
          My most recent job at Amazon gave me a great deal of experience working with AWS services, creating complex serverless architecture.
          I learned to love the full software development lifecycle from design to deployment and monitoring. 
          The reason I make software is for the users, I always love to hear feedback from real people using my apps! 
        </p>
      </div>

      <h2 className="text-text text-3xl font-bold mb-md">My Life</h2>
      <div className="bg-surface border border-border rounded-lg p-lg mb-lg shadow-md">
        <p className="text-lg text-text leading-relaxed">
          While I spend a lot of time coding, that does not stop me from enjoying my other hobbies. 
          To name a few: scuba diving, log rolling, fish keeping, video games, swimming, and camping. 
          Aside from that I have also been pursuing a private pilots license and volunteering with the Boy Scouts of America.
        </p>
        <p className="text-text">Photos TBA: Scuba Diving, Flying, Fish Tank</p>
      </div>

      <h2 className="text-text text-3xl font-bold mb-md">This Site</h2>
      <div className="bg-surface border border-border rounded-lg p-lg mb-lg shadow-md">
        <p className="text-lg text-text leading-relaxed">
          This site and the apps I build are mostly created using React and a mix of php, Node.js, and python. 
          Every app is containerized and deployed to my locally owned ubuntu server via a github actions CI/CD pipeline. 
          I utilize Caddy and nginx to proxy requests securely between a network of containers. 
          I have grown to really appreciate this microservices architecture that allows me to quickly build, test, and deploy new apps using whatever new technologies I want to try out. 
        </p>
      </div>

      <h2 className="text-text text-3xl font-bold mb-md">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div 
            key={category.title}
            className="bg-surface border border-border rounded-lg p-md shadow-sm hover:shadow-md transition-shadow"
            style={{ transitionDuration: 'var(--transition-base)' }}
          >
            <h3 className="text-xl font-bold text-primary mb-sm">{category.title}</h3>
            <ul className="space-y-1">
              {category.skills.map((skill) => (
                <li key={skill} className="text-text-secondary flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInfo;