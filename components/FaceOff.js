import React, { useState } from 'react';
import styles from '../styles/Services.module.css';

export const FaceOff = () => {
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);
  const toggleLeftHovered = () => { setLeftHovered(!leftHovered) };
  const toggleRightHovered = () => { setRightHovered(!rightHovered) };

  return (
    <section className={styles.FaceOff}>
      <div
        className={`${styles.FaceOff_left} ${leftHovered ? styles.hover_left : ""} ${rightHovered ? styles.hover_rightOther : ""}`}
        onMouseEnter={toggleLeftHovered}
        onMouseLeave={toggleLeftHovered}
      >
        <h4>Residential</h4>
      </div>
      <div
        className={`${styles.FaceOff_right} ${rightHovered ? styles.hover_right : ""} ${leftHovered ? styles.hover_leftOther : ""}`}
        onMouseEnter={toggleRightHovered}
        onMouseLeave={toggleRightHovered}
      >
        <h4>Commercial</h4>
      </div>
    </section>
  )
};