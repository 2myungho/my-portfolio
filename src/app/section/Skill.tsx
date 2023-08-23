import React from 'react'

import Image from "next/image";
import styles from '../Home.module.css';

export default function Skill() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <div className={styles.bulletSquare} />
        <h2 >Skills</h2>
      </div>
      <article className="flex mb-8">
        <aside className="w-1/4 text-2xl font-semibold">
          Front-end
        </aside>
        <div className="flex items-center w-full flex-wrap">
          <div className="w-[25%]">React.js 3</div>
          <div className="w-[25%]">Next.js 2</div>
          <div className="w-[25%]">Vue.js 2</div>
          <div className="w-[25%]">Javascript 3</div>
          <div className="w-[25%]">Html / Css 3</div>
          <div className="w-[25%]">React Native 2</div>
        </div>
      </article>
      <hr className={styles.hr} />
      <article className="flex mb-8">
        <aside className="w-1/4 text-2xl font-semibold">
          Back-end
        </aside>
        <div className="flex items-center w-full flex-wrap">
          <div className="w-[25%]">Node.js 2</div>
          <div className="w-[25%]">Typescript 2</div>
          <div className="w-[25%]">Express 2</div>
          <div className="w-[25%]">Java 1</div>
          <div className="w-[25%]">Spring Boot 1</div>
        </div>
      </article>
      <hr className={styles.hr} />
      <article className="flex">
        <aside className="w-1/4 text-2xl font-semibold">
          ETC
        </aside>
        <div className="flex items-center w-full flex-wrap">
          <div className="w-[25%]">Git</div>
          <div className="w-[25%]">Jira</div>
          <div className="w-[25%]">Confluence</div>
          <div className="w-[25%]">AWS</div>
          <div className="w-[25%]">Docker</div>
          <div className="w-[25%]">Firebase</div>
          <div className="w-[25%]">Zeplin</div>
          <div className="w-[25%]">Figma</div>
        </div>
      </article>
    </section>
  )
}
