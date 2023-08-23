import React from 'react'
import Image from 'next/image'

import styles from '../Home.module.css';

export default function AboutMe() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <div className={styles.bulletSquare} />
        <h2 >About Me</h2>
      </div>
      <article className="lg:flex" >
        <aside className="w-2/4 mb-4 lg:w-1/4 lg:mb-0">
          <Image
            src="/img/profile.jpg"
            alt="Profile"
            width={500}
            height={500}
            className='rounded-md'
          />
        </aside>
        <div className="flex flex-col lg:mx-4 gap-y-2">
          <div className="w-full lg:px-4">
            Name: 이명호
          </div>
          <div className="w-full lg:px-4">
            Mail: <a href="mailto:sky85210@gmail.com">sky85210@gmail.com</a>
          </div>
          <div className="w-full lg:px-4">
            Dev Blog: <a href="https://myung-ho.tistory.com/">https://myung-ho.tistory.com/</a>
          </div>
          <div className="w-full lg:px-4">
            Github: <a href="https://github.com/2myungho">https://github.com/2myungho</a>
          </div>
        </div>
      </article>
    </section>
  )
}
