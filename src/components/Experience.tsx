import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../data';

const ExperienceItem = ({ data, index }: { data: any, index: number }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{
                padding: '2rem',
                marginBottom: '2rem',
                borderLeft: '2px solid var(--accent)',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '0 10px 10px 0',
            }}
        >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{data.role}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--accent)' }}>
                <span style={{ fontWeight: 600 }}>{data.company}</span>
                <span>{data.period}</span>
            </div>
            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)' }}>
                {data.description.map((desc: string, i: number) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{desc}</li>
                ))}
            </ul>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" style={{ padding: 'var(--section-spacing) 0' }}>
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
                    <span style={{ borderBottom: '3px solid var(--accent)' }}>Experience</span>
                </motion.h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={exp.id} data={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
