import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// import { About, Footer, Header, Skills, Work, Experience } from './container';
// import { Navbar } from './components';
import './App.scss';

const App = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    const handleLoading = () => {
        setIsLoading(false);
    }
    
    useEffect(()=>{
        window.addEventListener("load",handleLoading);
        return () => window.removeEventListener("load",handleLoading);
    },[])

    const pageLoadVariants = {
        show: {
            opacity: 1
        },
        hidden: { 
            opacity: 0,
            transition: {
                duration: 2
            } 
        }
    }

    const navContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
              delay: 2,
              delayChildren: 2
            }
        }
    }

    const componentsContainer = {
        hidden: { opacity: 0 },
        show: { 
            opacity: 1
        }
    }
    
    return !isLoading ? (
        <div className="app">        
            <motion.div
                variants={pageLoadVariants}
                initial="show"
                animate="hidden"
                className="app__load-container"
            >
                <div className="app__load-finish"></div>
            </motion.div>
            <motion.div
                variants={navContainer}
                initial="hidden"
                animate="show"
            >
                Navbar goes here
                <br />
                <br />
                <motion.div
                    variants={componentsContainer}
                >
                  Header goes here
                </motion.div>
            </motion.div>
        </div>
    ):
    (
        <div className="app__load-container">
            <div className="app__load" />
        </div>
    )
}

export default App;