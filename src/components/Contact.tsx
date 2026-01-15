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
                    paddingTop: '3rem',
                    paddingBottom: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem',
                        marginBottom: '2rem'
                    }}>
                        {/* About Section */}
                        <div>
                            <h3 style={{
                                fontSize: '1.2rem',
                                marginBottom: '1rem',
                                background: 'linear-gradient(135deg, var(--accent), var(--accent-hover))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 700
                            }}>
                                {personalInfo.name}
                            </h3>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.95rem',
                                lineHeight: '1.6'
                            }}>
                                {personalInfo.role} passionate about leveraging data to drive innovation and insights.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 style={{
                                fontSize: '1rem',
                                marginBottom: '1rem',
                                color: 'var(--text-primary)',
                                fontWeight: 600
                            }}>
                                Contact
                            </h4>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                <p style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span>📧</span> {personalInfo.email}
                                </p>
                                <p style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span>📱</span> {personalInfo.phone}
                                </p>
                                <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span>📍</span> {personalInfo.address}
                                </p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 style={{
                                fontSize: '1rem',
                                marginBottom: '1rem',
                                color: 'var(--text-primary)',
                                fontWeight: 600
                            }}>
                                Connect
                            </h4>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <motion.a
                                    href={personalInfo.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '45px',
                                        height: '45px',
                                        borderRadius: '10px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: 'var(--text-primary)',
                                        fontSize: '1.3rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(0, 119, 181, 0.2)';
                                        e.currentTarget.style.borderColor = '#0077b5';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    💼
                                </motion.a>

                                <motion.a
                                    href={personalInfo.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '45px',
                                        height: '45px',
                                        borderRadius: '10px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: 'var(--text-primary)',
                                        fontSize: '1.3rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(88, 166, 255, 0.2)';
                                        e.currentTarget.style.borderColor = '#58a6ff';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    🐙
                                </motion.a>

                                <motion.a
                                    href={personalInfo.social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '45px',
                                        height: '45px',
                                        borderRadius: '10px',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        color: 'var(--text-primary)',
                                        fontSize: '1.3rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(29, 161, 242, 0.2)';
                                        e.currentTarget.style.borderColor = '#1da1f2';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    🐦
                                </motion.a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div style={{
                        paddingTop: '2rem',
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                        textAlign: 'center'
                    }}>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem',
                            marginBottom: '0.5rem'
                        }}>
                            Designed & Built with 💜 by {personalInfo.name}
                        </p>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem',
                            opacity: 0.7
                        }}>
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
