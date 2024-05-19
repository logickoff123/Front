'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Footer.module.scss'

export default function Footer() {
    return (
        <div className= {styles.footer}>
            <div className = {styles.square}>
                <span>я лох</span>
            </div>
        </div>
)
}
