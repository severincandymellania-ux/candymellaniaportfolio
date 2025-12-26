import { motion } from 'framer-motion';
import { skills } from '../data';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const Skills = () => {
    return (
        <section id="skills" style={{ padding: 'var(--section-spacing) 0', background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Skills & Technologies
                </h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '1.5rem',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill}
                            variants={itemVariants}
                            whileHover={{ scale: 1.1, backgroundColor: 'var(--accent)' }}
                            style={{
                                padding: '1rem 2rem',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '50px',
                                cursor: 'default',
                                transition: 'background-color 0.3s'
                            }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
