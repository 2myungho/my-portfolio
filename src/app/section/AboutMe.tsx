import React from "react";
import Image from "next/image";
import { BsPhone } from "react-icons/bs";

import styles from "../Home.module.css";

export default function AboutMe() {
  const isPublic = process.env.REACT_APP_PUBLIC === "true";
  const phoneNumber = isPublic
    ? "010-0000-0000"
    : process.env.REACT_APP_PHONE_NUMBER;
  return (
    <section className={styles.section}>
      <div className={styles.firstSectionTitle}>
        <div className={styles.bulletSquare} />
        <h2>About Me</h2>
      </div>
      <article className="lg:flex">
        <aside className="w-2/4 mb-4 lg:w-1/4 lg:mb-0">
          <Image
            src="/img/profile.jpg"
            alt="Profile"
            width={500}
            height={500}
            className="rounded-md"
          />
        </aside>
        <div className="lg:mx-4 flex flex-col justify-between lg:px-4 gap-y-8 lg:gap-y-0">
          <div className="w-full flex flex-col gap-y-2">
            <div className="w-full">Name: 이명호</div>
            <div className="w-full">Phone: {phoneNumber}</div>
            <div className="w-full">
              Mail: <a href="mailto:sky85210@gmail.com">sky85210@gmail.com</a>
            </div>
            <div className="w-full">
              Dev Blog:{" "}
              <a href="https://myung-ho.tistory.com/">
                https://myung-ho.tistory.com/
              </a>
            </div>
            <div className="w-full">
              Github:{" "}
              <a href="https://github.com/2myungho">
                https://github.com/2myungho
              </a>
            </div>
          </div>
          {isPublic && (
            <div className="bg-[#f2f2f2] pl-2 pr-10 py-1 rounded-md flex items-center gap-x-1">
              <BsPhone />
              문의 사항은 이메일로 연락 부탁드립니다.
            </div>
          )}
        </div>
      </article>
    </section>
  );
}
