import React, { useState, useEffect } from "react";
import useCountdown from "../../logic/useCountdown";
import styles from "../styles/EraseUnaVezCountdown.module.css";

const EraseUnaVezCountdown = ({ weddingDate }) => {
  const timeLeft = useCountdown(weddingDate);

  return (
    <section className={`${styles.section} mt-4 py-5`}>
      <h2 className={`${styles.title} mb-4`}>Solo faltan....</h2>
      <div className={`${styles.numbers} mt-4 pt-5`}>
        <div className={styles.item}>
          <span className={styles.number}>
            {timeLeft.days.toString().padStart(2, "0")}
          </span>
          <span className={styles.label}>Días</span>
        </div>
        <div className={styles.item}>
          <span className={styles.number}>
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
          <span className={styles.label}>Horas</span>
        </div>
        <div className={styles.item}>
          <span className={styles.number}>
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
          <span className={styles.label}>Minutos</span>
        </div>
        <div className={styles.item}>
          <span className={styles.number}>
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
          <span className={styles.label}>Segundos</span>
        </div>
      </div>
    </section>
  );
};

export default EraseUnaVezCountdown;
