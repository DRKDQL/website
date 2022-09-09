import * as React from 'react';
import styles from './ProjectCard.module.css'
import { Stack, Divider } from '@mui/material'
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface IProjectCardProps {
    title: string,
    description: string,
    imgSrc: string,
    href: string
}

function ProjectCard (props: IProjectCardProps) {
  return (
    <motion.div
        whileHover={{scale: 1.1}}
        className={styles.projectCard} 
        style={{ backgroundImage: `url(${props.imgSrc})`}}
        onClick={() => window.location.href = props.href}
    > 
        <Stack 
            height={"200px"}
            width={"300px"}
            justifyContent={"end"} 
        >
            <Stack className={styles.text}> 
                <h3> {props.title} </h3>
                <p> {props.description} </p>
            </Stack>
        </Stack>
    </motion.div>
  );
}

export default ProjectCard