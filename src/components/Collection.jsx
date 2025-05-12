import React from 'react';
import { motion } from 'framer-motion';
import collectionlogo from '../assets/collectionlogo.png';
import '../components/Collection.css';
import swarnaleela from '../assets/swarnaleela.png';
import navya from '../assets/navya.png';
import celestia from '../assets/celestia.png';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const Collection = () => {
    return (
        <>
            <motion.div
                className='collectionentry'
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                id='collectionentry'
            >
                <hr />
                <div className="collectiontextlogo">
                    <img src={collectionlogo} alt="Collection Logo" />
                    <h4>OUR COLLECTION</h4>
                </div>
                <hr />
            </motion.div>

            <motion.h3
                className='collectionglow'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                The Latest Expressions of Luxury, Just Arrived
            </motion.h3>

            <div className="imgcontainer">
                <motion.div
                    className="left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <img src={swarnaleela} alt="SwarnaLeela" />
                    <p>SwarnaLeela</p>
                </motion.div>

                <div className="right">
                    <motion.div
                        className="top"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                    >
                        <img src={navya} alt="Navya" />
                        <p>Necklace of Navya</p>
                    </motion.div>

                    <motion.div
                        className="bottom"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        transition={{ delay: 0.4 }}
                    >
                        <img src={celestia} alt="Celestia" />
                        <p>Celestia</p>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Collection;
