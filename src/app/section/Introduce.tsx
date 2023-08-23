import React from 'react'

import styles from '../Home.module.css';

export default function Introduce() {
  return (
    <section className={styles.section}>
      <div className="text-3xl font-semibold">안녕하세요.</div>
      <div className="text-3xl font-semibold">프론트엔드 엔지니어 이명호입니다!</div>
      <br />
      <div className="text-2xl">3년차 프론트엔드 엔지니어로 근무하고 있으며, 서비스 개발에 큰 관심을 가지고 있습니다.</div>
      <div className="text-2xl">항상 자기개발을 멈추지 않으려고 노력하고 있으며, 최근에는 앱 개발에 관심이 생겨,</div>
      <div className="text-2xl">저의 취미인 운동을 주제로 한 앱을 React Native로 개발하고 지속적으로 업데이트하고 있습니다.</div>
    </section>
  )
}
