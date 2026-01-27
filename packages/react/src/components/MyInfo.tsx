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
      <div className="bg-surface border border-border rounded-lg p-lg mb-lg shadow-md">
        <p className="text-lg text-text leading-relaxed">
          I'm a Software Development Engineer with 6+ years of experience building scalable, distributed systems. 
          Most recently, I spent 2+ years at Amazon architecting compliance automation systems and modernizing 
          infrastructure, where I led projects handling 50k+ daily events across multi-region deployments. 
          Previously at Asure Software, I solved complex multi-tenant data modeling challenges and improved 
          application performance by 60%. Currently, I'm maintaining technical currency through active project 
          work while managing family caregiving responsibilities, building modern web applications with React, 
          TypeScript, and AWS services.
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