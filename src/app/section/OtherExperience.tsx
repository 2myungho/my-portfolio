import React from 'react'

import styles from '../Home.module.css';

export default function OtherExperience() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <div className={styles.bulletSquare} />
        <h2 >Other Experience</h2>
      </div>
      <article className="mb-4">
        <h3 className="text-xl font-semibold">티스토리 개발 블로그</h3>
        <div className="text-[#76787A]">2023.08 기준 일 평균 방문자 약200명</div>
        <div className="text-[#76787A]">Link: <a href="https://myung-ho.tistory.com/">https://myung-ho.tistory.com/</a></div>
      </article>
      <article className="mb-4">
        <h3 className="text-xl font-semibold">클라우드를 활용한 MSA 전문가 과정</h3>
        <div className="text-[#76787A]">(2020.7 ~ 2020.12)</div>
      </article>
      <article className="">
        <h3 className="text-xl font-semibold">스마트 디지털 UI/UX 앱 & 웹 디자인 과정</h3>
        <div className="text-[#76787A]">(2019.11 ~ 2020.03)</div>
      </article>
    </section>
  )
}
