import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--accent)',
                filter: 'blur(150px)',
                opacity: 0.1,
                borderRadius: '50%'
            }} />

            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '2rem' }}
                >
                    <img
                        src={profileImg}
                        alt={personalInfo.name}
                        style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '4px solid var(--accent)',
                            boxShadow: '0 0 20px rgba(100,255,218,0.3)'
                        }}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ maxWidth: '800px' }}
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ color: 'var(--accent)', marginBottom: '1rem', fontWeight: 500 }}
                    >
                        Hi, my name is
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{
                            fontSize: 'clamp(3rem, 8vw, 5rem)',
                            lineHeight: 1.1,
                            fontWeight: 800,
                            marginBottom: '1rem',
                            background: 'linear-gradient(to right, #ccd6f6, #8892b0)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        {personalInfo.name}.
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3rem)',
                            color: 'var(--text-secondary)',
                            marginBottom: '2rem',
                            fontWeight: 600
                        }}
                    >
                        {personalInfo.role}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        style={{
                            fontSize: '1.2rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '600px',
                            margin: '0 auto 3rem'
                        }}
                    >
                        {personalInfo.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
                    >
                        <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                        </a>
                        <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                        <a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
