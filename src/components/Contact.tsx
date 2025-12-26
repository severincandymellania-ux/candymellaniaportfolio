import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: 'var(--section-spacing) 0', textAlign: 'center' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '1.5rem' }}
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px',
                        margin: '0 auto 3rem'
                    }}
                >
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </motion.p>

                <motion.a
                    href={`mailto:${personalInfo.email}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        display: 'inline-block',
                        padding: '1rem 2rem',
                        border: '1px solid var(--accent)',
                        color: 'var(--accent)',
                        borderRadius: '5px',
                        fontSize: '1.1rem',
                        fontWeight: 600
                    }}
                >
                    Say Hello
                </motion.a>

                <footer style={{
                    marginTop: '5rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                }}>
                    <p style={{ marginBottom: '0.5rem' }}>Designed & Built by {personalInfo.name}</p>
                    <p>Phone: {personalInfo.phone} | Address: {personalInfo.address}</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
