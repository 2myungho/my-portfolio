import React from "react";

import styles from "../Home.module.css";

export default function ContentsHeader() {
  return (
    <section className={styles.section}>
      <div className="text-3xl font-semibold">개발이 즐거운 개발자</div>
      <br />
      <div className="text-2xl">3년 차, 개발이 즐거운 개발자 이명호입니다.</div>
    </section>
  );
}
