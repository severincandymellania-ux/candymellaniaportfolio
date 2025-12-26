import { motion } from 'framer-motion';
import { projects } from '../data';

const ProjectItem = ({ data, index }: { data: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '15px',
                padding: '2rem',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }}
        >
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>{data.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{data.description}</p>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                {data.tech.map((tech: string, i: number) => (
                    <span
                        key={i}
                        style={{
                            fontSize: '0.85rem',
                            padding: '0.4rem 0.8rem',
                            background: 'rgba(100,255,218,0.1)',
                            color: 'var(--accent)',
                            borderRadius: '15px',
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" style={{ padding: 'var(--section-spacing) 0' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '2.5rem',
                        marginBottom: '3rem',
                        textAlign: 'center'
                    }}
                >
                    <span style={{ borderBottom: '3px solid var(--accent)' }}>Projects</span>
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <ProjectItem key={project.id} data={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
