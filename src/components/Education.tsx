import { motion } from 'framer-motion';
import { education } from '../data';

const EducationItem = ({ data, index }: { data: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
                marginBottom: '2rem',
                paddingLeft: '1.5rem',
                borderLeft: '2px solid var(--accent)',
            }}
        >
            <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{data.degree}</h3>
            <div style={{ color: 'var(--accent)', fontWeight: 500, marginBottom: '0.3rem' }}>{data.school}</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{data.period}</div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <section id="education" style={{ padding: 'var(--section-spacing) 0' }}>
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
                    <span style={{ borderBottom: '3px solid var(--accent)' }}>Education</span>
                </motion.h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {education.map((item, index) => (
                        <EducationItem key={item.id} data={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
