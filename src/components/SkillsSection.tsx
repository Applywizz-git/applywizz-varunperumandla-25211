import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiTableau,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiSnowflake,
  SiDatabricks,
  SiJira,
  SiConfluence,
  SiGit,
} from 'react-icons/si';
import {
  HiChartBar,
  HiCode,
  HiDatabase,
  HiCloud,
  HiCog,
  HiLightningBolt,
  HiDocumentReport,
  HiTrendingUp,
  HiServer,
  HiCollection,
  HiShare,
  HiClipboardList,
  HiTable,
  HiSparkles,
} from 'react-icons/hi';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: HiCode,
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'Java', icon: HiCode },
      { name: 'Go', icon: HiCode },
      { name: 'TypeScript', icon: HiCode },
      { name: 'SQL', icon: HiDatabase },
    ],
  },
  {
    title: 'Backend & API Development',
    icon: HiServer,
    skills: [
      { name: 'Spring Boot', icon: HiCode },
      { name: 'FastAPI', icon: HiLightningBolt },
      { name: 'Node.js', icon: HiCode },
      { name: 'REST API Design', icon: HiShare },
      { name: 'Microservices Architecture', icon: HiCollection },
      { name: 'Distributed Systems', icon: HiServer },
      { name: 'API Security', icon: HiCode },
      { name: 'API Gateway', icon: HiLightningBolt },
    ],
  },
  {
    title: 'Frontend',
    icon: HiChartBar,
    skills: [
      { name: 'TypeScript', icon: HiCode },
      { name: 'JavaScript', icon: HiCode },
      { name: 'HTML5', icon: HiCode },
      { name: 'CSS3', icon: HiCode },
    ],
  },
  {
    title: 'Cloud & Platform Engineering',
    icon: HiCloud,
    skills: [
      { name: 'AWS (EC2, ECS, Lambda, S3, IAM, CloudWatch)', icon: HiCloud },
      { name: 'Serverless Architecture', icon: HiLightningBolt },
      { name: 'Cloud-Native Systems', icon: HiCloud },
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    icon: HiCog,
    skills: [
      { name: 'Docker', icon: HiServer },
      { name: 'Kubernetes', icon: HiCollection },
      { name: 'Terraform', icon: HiCog },
      { name: 'Jenkins', icon: HiCog },
      { name: 'GitHub Actions', icon: HiCode },
      { name: 'CI/CD Pipelines', icon: HiShare },
      { name: 'Deployment Automation', icon: HiLightningBolt },
    ],
  },
  {
    title: 'Data & Messaging',
    icon: HiDatabase,
    skills: [
      { name: 'Relational Databases', icon: HiDatabase },
      { name: 'SQL Optimization', icon: HiTrendingUp },
      { name: 'Data Modeling', icon: HiCollection },
      { name: 'Redis', icon: HiServer },
      { name: 'Apache Kafka', icon: HiShare },
    ],
  },
  {
    title: 'AI / Generative AI',
    icon: HiSparkles,
    skills: [
      { name: 'Azure OpenAI', icon: HiCloud },
      { name: 'LangChain', icon: HiCode },
      { name: 'LLM Integration', icon: HiLightningBolt },
      { name: 'Prompt Engineering', icon: HiDocumentReport },
    ],
  },
  {
    title: 'Engineering Practices',
    icon: HiClipboardList,
    skills: [
      { name: 'System Design', icon: HiCollection },
      { name: 'Design Patterns', icon: HiCode },
      { name: 'Secure Coding', icon: HiCode },
      { name: 'Testing', icon: HiCog },
      { name: 'Observability', icon: HiChartBar },
      { name: 'Performance Optimization', icon: HiTrendingUp },
      { name: 'Debugging', icon: HiCode },
      { name: 'Agile/Scrum', icon: HiShare },
    ],
  },
];

const topSkills = [
  { name: 'Python & Java', level: 95 },
  { name: 'Spring Boot & FastAPI', level: 92 },
  { name: 'AWS & Azure', level: 88 },
  { name: 'Docker & Kubernetes', level: 85 },
  { name: 'CI/CD Pipelines', level: 90 },
];

const ProgressRing = ({ progress, size = 80, strokeWidth = 6 }: { progress: number; size?: number; strokeWidth?: number }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="progress-ring" width={size} height={size}>
      <circle
        className="stroke-muted"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <motion.circle
        className="stroke-primary progress-ring-circle"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          strokeDasharray: `${circumference} ${circumference}`,
        }}
      />
    </svg>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-gold-soft opacity-10" />
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive expertise across the modern data stack
          </p>
        </motion.div>

        {/* Top Skills with Progress Rings */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {topSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="relative">
                <ProgressRing progress={skill.level} />
                <span className="absolute inset-0 flex items-center justify-center font-bold text-lg text-primary">
                  {skill.level}%
                </span>
              </div>
              <span className="mt-3 font-medium text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="glass rounded-2xl p-6 card-hover group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all cursor-default group/skill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <skill.icon className="w-4 h-4 text-primary group-hover/skill:rotate-12 transition-transform" />
                    <span className="text-sm text-foreground/80">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
