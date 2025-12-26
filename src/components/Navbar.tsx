import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['About', 'Experience', 'Projects', 'Education', 'Skills', 'Contact'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: '1.5rem 0',
                background: scrolled || isOpen ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
                backdropFilter: scrolled || isOpen ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-1px', zIndex: 101 }}>
                    Portfolio<span style={{ color: 'var(--accent)' }}>.</span>
                </a>

                {/* Desktop Menu */}
                <ul style={{ display: 'none', gap: '2rem', listStyle: 'none' }} className="desktop-menu">
                    {navItems.map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        display: 'none',
                        flexDirection: 'column',
                        gap: '6px',
                        zIndex: 101,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                    className="mobile-btn"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        style={{ width: '25px', height: '2px', background: 'var(--text-primary)', display: 'block' }}
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        style={{ width: '25px', height: '2px', background: 'var(--text-primary)', display: 'block' }}
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        style={{ width: '25px', height: '2px', background: 'var(--text-primary)', display: 'block' }}
                    />
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            background: 'var(--bg-primary)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2rem',
                            zIndex: 100
                        }}
                    >
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                style={{ fontSize: '1.5rem', fontWeight: 600 }}
                            >
                                {item}
                            </a>
                        ))}
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
