import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiPython, SiTableau } from 'react-icons/si';
import { HiDatabase, HiChartBar, HiTrendingUp, HiCloud, HiCode } from 'react-icons/hi';

const projects = [
  {
    title: 'E-Commerce Backend Services & API Platform',
    description: 'Built multi-language backend services using Python, Java, and Go with Spring Boot and FastAPI. Implemented REST API design and microservices architecture to handle high-volume transactions with improved throughput and low latency. Automated CI/CD pipelines.',
    icon: HiDatabase,
    image: '/ecommerce_backend.png',
    technologies: ['Python', 'Java', 'FastAPI', 'Spring Boot', 'AWS'],
    gradient: 'from-primary to-bronze',
    highlights: ['Microservices', 'High Throughput', 'CI/CD Pipelines'],
  },
  {
    title: 'LLM-Powered Commerce Automation Platform',
    description: 'Developed LLM-integrated backend services using Python, FastAPI, LangChain, and Azure OpenAI, enabling automated decision workflows. Designed serverless backend components using AWS Lambda.',
    icon: HiCloud,
    image: '/llm_commerce.png',
    technologies: ['Python', 'FastAPI', 'LangChain', 'Azure OpenAI', 'AWS Lambda'],
    gradient: 'from-secondary to-primary',
    highlights: ['LLM Integration', 'Serverless', 'Automation Workflow'],
  },
  {
    title: 'Real-Time Event Streaming & Caching Platform',
    description: 'Integrated backend services using event-driven architecture with Apache Kafka and Spring Boot, enabling real-time data streaming. Implemented caching strategies using Redis, reducing database load and improving API response time.',
    icon: HiTrendingUp,
    image: '/realtime_streaming.png',
    technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'Redis', 'Docker'],
    gradient: 'from-bronze to-secondary',
    highlights: ['Event-Driven architecture', 'Real-Time Streaming', 'Caching Strategy'],
  },
];

const techIcons: { [key: string]: React.ElementType } = {
  'Python': SiPython,
  'Java': HiCode,
  'FastAPI': HiCode,
  'Spring Boot': HiCode,
  'AWS': HiCloud,
  'LangChain': HiCode,
  'Azure OpenAI': HiCloud,
  'AWS Lambda': HiCloud,
  'Apache Kafka': HiDatabase,
  'Redis': HiDatabase,
  'Docker': HiCloud,
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            Impactful data solutions delivering real business value
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass rounded-3xl overflow-hidden card-hover group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Header with image */}
              <div className={`h-48 md:h-64 bg-muted relative overflow-hidden flex flex-col justify-between p-6 md:p-8 group`}>
                {project.image && (
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <motion.div
                  className="absolute inset-0 bg-gradient-gold-soft opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                />
                
                <div className="relative z-10 flex justify-end">
                  <div className="p-2 bg-background/20 backdrop-blur-md rounded-xl">
                    <project.icon className="w-6 h-6 text-white drop-shadow-md" />
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white drop-shadow-lg leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <motion.div
                      key={hIndex}
                      className="text-center p-3 rounded-xl bg-muted/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.2 + hIndex * 0.1 }}
                    >
                      <HiTrendingUp className="w-5 h-5 mx-auto mb-1 text-primary" />
                      <span className="text-xs text-foreground font-medium">{highlight}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => {
                    const Icon = techIcons[tech];
                    return (
                      <motion.span
                        key={techIndex}
                        className="tech-badge flex items-center gap-1.5"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.2 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {Icon && <Icon className="text-xs" />}
                        {tech}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
