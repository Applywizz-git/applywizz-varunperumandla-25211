import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiChartBar, HiDatabase, HiLightningBolt, HiCode, HiCloud, HiCog } from 'react-icons/hi';

const highlights = [
  { icon: HiCode, label: 'Backend', description: 'Python, Java, Go' },
  { icon: HiCloud, label: 'Cloud', description: 'AWS & Azure' },
  { icon: HiCog, label: 'DevOps', description: 'Docker, K8s, CI/CD' },
  { icon: HiDatabase, label: 'Data', description: 'SQL, Redis, Kafka' },
  { icon: HiLightningBolt, label: 'Architecture', description: 'Microservices' },
  { icon: HiChartBar, label: 'Generative AI', description: 'Azure OpenAI, LangChain' },
];

const counters = [
  { value: 10, suffix: '+', label: 'Projects' },
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Delivery Accuracy' },
];

const skills = [
  { name: 'Python & Java', level: 95 },
  { name: 'Spring Boot & FastAPI', level: 92 },
  { name: 'AWS & Azure', level: 88 },
  { name: 'Docker & Kubernetes', level: 85 },
  { name: 'CI/CD Pipelines', level: 90 },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="counter-value">
      {count}{suffix}
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-gold-soft opacity-20" />
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Building scalable backend and cloud-native applications
          </p>
        </motion.div>

        {/* About Text */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-foreground/90 leading-relaxed text-lg">
              As a Software Developer with 4 years of hands-on experience, I have consistently delivered scalable and highly available backend systems. My work has led to a <span className="text-primary font-semibold">28% improvement in response time</span>, a <span className="text-primary font-semibold">40% reduction in release cycles</span>, and <span className="text-primary font-semibold">30% faster operational workflows</span> through AI integration. I specialize in turning complex architectural requirements into reliable distributed systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans the full software development lifecycle—from REST API design and microservices to cloud infrastructure and automated deployments. I work with industry-leading tools including <span className="font-medium text-foreground">Python, Java, Go, Spring Boot, and Docker</span>, along with cloud platforms like <span className="font-medium text-foreground">AWS and Azure</span>. I excel at building CI/CD pipelines, optimizing performance through database tuning, and integrating LLMs into robust backend services.
            </p>
          </motion.div>

          {/* Counters */}
          <motion.div
            className="grid grid-cols-3 gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {counters.map((counter, index) => (
              <motion.div
                key={counter.label}
                className="text-center p-6 glass rounded-2xl card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Counter target={counter.value} suffix={counter.suffix} />
                <p className="text-muted-foreground text-sm mt-2">{counter.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skill Bars */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-heading font-bold mb-8 text-center">Core Competencies</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-heading font-bold mb-8 text-center">Expertise Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className="group p-6 glass rounded-xl text-center hover-glow cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="w-10 h-10 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
