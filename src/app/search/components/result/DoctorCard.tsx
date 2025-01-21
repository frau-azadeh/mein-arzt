"use client";

import React from "react";
import styles from "./doctorCard.module.css";
import Link from "next/link";

interface DoctorCardProps {
  id: number;
  name: string;
  gender: string;
  specialty: string;
  degree: string;
  workTime: string;
  image: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  id,
  name,
  gender,
  specialty,
  degree,
  workTime,
  image,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.detail}>تخصص: {specialty}</p>
        <p className={styles.detail}>جنسیت: {gender}</p>
        <p className={styles.detail}>درجه: {degree}</p>
        <p className={styles.detail}>زمان کار: {workTime}</p>
      </div>
      <div className={styles.action}>
        <Link href={`/doctor/${id}`} className={styles.button}>
          نوبت دهی آنلاین
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
