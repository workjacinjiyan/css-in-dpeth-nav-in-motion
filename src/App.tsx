import { motion } from 'framer-motion';
import { useState } from 'react';
import './App.css';

const spanVariants = {
  // dynamic with the 'custom' props
  hidden: (i: number) => ({
    x: '-1em',
    opacity: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      x: {
        // bounce effect
        ease: [0.2, 0.9, 0.3, 1.3],
        // ease: 'linear',
        duration: 0.4,
      },
      opacity: {
        ease: 'linear',
        duration: 0.4,
      },
    },
  }),
};

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <header>
        <h1 className="page-header">The Yolk Factory</h1>
      </header>
      <motion.nav
        className="main-nav"
        whileHover={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          transition: {
            duration: 0.5,
          },
        }}
      >
        <motion.ul
          className="nav-links"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <li>
            <a href="/">
              <motion.img
                src="https://raw.githubusercontent.com/CSSInDepth/css-in-depth/master/ch16/images/home.svg"
                className="nav-links__icon"
                alt="home"
                whileHover={{
                  scale: 1.3,
                  transition: { ease: 'easeOut', duration: 0.2 },
                }}
              />
              <motion.span
                className="nav-links__label"
                variants={spanVariants}
                animate={isHovered ? 'visible' : 'hidden'}
                initial={false}
                whileHover={{
                  color: 'hsl(40, 100%, 70%)',
                }}
              >
                Home
              </motion.span>
            </a>
          </li>
          <li>
            <a href="/">
              <motion.img
                src="https://raw.githubusercontent.com/CSSInDepth/css-in-depth/master/ch16/images/calendar.svg"
                className="nav-links__icon"
                alt="events"
                whileHover={{
                  scale: 1.3,
                  transition: { ease: 'easeOut', duration: 0.2 },
                }}
              />
              <motion.span
                className="nav-links__label"
                variants={spanVariants}
                initial={false}
                animate={isHovered ? 'visible' : 'hidden'}
                custom={1}
                whileHover={{
                  color: 'hsl(40, 100%, 70%)',
                }}
              >
                Events
              </motion.span>
            </a>
          </li>
          <li>
            <a href="/">
              <motion.img
                src="https://raw.githubusercontent.com/CSSInDepth/css-in-depth/master/ch16/images/members.svg"
                className="nav-links__icon"
                alt="members"
                whileHover={{
                  scale: 1.3,
                  transition: { ease: 'easeOut', duration: 0.2 },
                }}
              />
              <motion.span
                className="nav-links__label"
                variants={spanVariants}
                initial={false}
                animate={isHovered ? 'visible' : 'hidden'}
                custom={2}
                whileHover={{
                  color: 'hsl(40, 100%, 70%)',
                }}
              >
                Members
              </motion.span>
            </a>
          </li>
          <li>
            <a href="/">
              <motion.img
                src="https://raw.githubusercontent.com/CSSInDepth/css-in-depth/master/ch16/images/star.svg"
                className="nav-links__icon"
                alt="about"
                whileHover={{
                  scale: 1.3,
                  transition: { ease: 'easeOut', duration: 0.2 },
                }}
              />
              <motion.span
                className="nav-links__label"
                variants={spanVariants}
                initial={false}
                animate={isHovered ? 'visible' : 'hidden'}
                custom={3}
                whileHover={{
                  color: 'hsl(40, 100%, 70%)',
                }}
              >
                About
              </motion.span>
            </a>
          </li>
        </motion.ul>
      </motion.nav>
    </>
  );
}

export default App;
