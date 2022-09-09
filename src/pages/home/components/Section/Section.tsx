import * as React from 'react';
import styles from './Section.module.css'
import { Stack, Divider } from '@mui/material'

export interface ISectionProps {
    children: React.ReactNode,
    title: string
}

function Section (props: ISectionProps) {
  return (
    <Stack className={styles.section}>
        <h2> {props.title} </h2>
        <Stack className={styles.children}>
            {props.children}
        </Stack>
        <Divider/>
    </Stack>
  );
}

export default Section