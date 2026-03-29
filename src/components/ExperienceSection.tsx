import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiBriefcase, HiLocationMarker, HiCalendar, HiChartBar, HiCode, HiTable, HiDatabase, HiCloud, HiServer, HiCog } from 'react-icons/hi';
import { SiPython } from 'react-icons/si';

const experiences = [
  {
    title: 'Software Developer',
    company: 'Goldman Sachs',
    location: 'Richardson, TX',
    period: 'May 2023 - Present',
    bullets: [
      'Designed and built Python-based backend services with REST API design using microservices architecture, improving response time by 28%.',
      'Streamlined deployment workflows by implementing CI/CD pipelines with Jenkins and GitHub Actions, leveraging Docker and Kubernetes.',
      'Established scalable cloud environments through Terraform-driven Infrastructure as Code on Azure cloud services.',
      'Introduced LLM-powered automation using Azure OpenAI and LangChain into backend workflows.',
      'Optimized system reliability and high availability by configuring Azure-based monitoring and observability solutions.',
      'Built and scaled microservices using Python and FastAPI.',
      'Integrated TypeScript-driven frontend layers with backend APIs.'
    ],
    technologies: ['Python', 'FastAPI', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'LangChain', 'Azure OpenAI'],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Legato Health Technologies',
    location: 'Hyderabad, India',
    period: 'Jul 2021 - Aug 2022',
    bullets: [
      'Built Spring Boot-based backend services and REST APIs in Java, improving response time by 22%.',
      'Reduced deployment effort by setting up CI/CD pipelines using Jenkins, integrating Docker containers and Kubernetes orchestration.',
      'Deployed scalable services on AWS using EC2 and S3, which improved application availability.',
      'Brought consistency to infrastructure by implementing Terraform-based IaC.',
      'Enhanced backend performance through SQL optimization and data modeling.',
      'Introduced microservices architecture using Spring Boot.'
    ],
    technologies: ['Java', 'Spring Boot', 'AWS', 'EC2', 'S3', 'Docker', 'Kubernetes', 'Jenkins', 'SQL'],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techIcons: { [key: string]: React.ElementType } = {
    'Python': SiPython,
    'Java': HiCode,
    'FastAPI': HiCode,
    'Spring Boot': HiCode,
    'Azure': HiCloud,
    'AWS': HiCloud,
    'Docker': HiServer,
    'Kubernetes': HiServer,
    'Jenkins': HiCog,
    'Terraform': HiCog,
    'SQL': HiDatabase,
  };

  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-gold-soft opacity-10" />
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle mx-auto">
            Building scalable microservices and resilient cloud architectures
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-gold transform md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ originY: 0 }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 shadow-glow z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
              />

              {/* Content card */}
              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <motion.div
                  className="glass rounded-2xl p-6 md:p-8 card-hover"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Header */}
                  <div className={`mb-6 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="flex items-center gap-2 mb-2 flex-wrap justify-start md:justify-start">
                      <HiBriefcase className="text-primary text-xl" />
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-lg text-primary font-semibold mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <HiLocationMarker className="text-primary" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiCalendar className="text-primary" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-6 text-left">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <motion.li
                        key={bulletIndex}
                        className="flex items-start gap-3 text-foreground/80"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + bulletIndex * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => {
                      const Icon = techIcons[tech];
                      return (
                        <motion.span
                          key={techIndex}
                          className="tech-badge flex items-center gap-1.5"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.8 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {Icon && <Icon className="text-xs" />}
                          {tech}
                        </motion.span>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
