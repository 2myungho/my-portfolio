import React from 'react'

import styles from '../Home.module.css';

interface ArticleType {
  title: string;
  items: string[];
}

const frontEnd: ArticleType = {
  title: 'Front-end',
  items: ['React.js 3', 'Next.js 2', 'Vue.js 2', 'Javascript 3', 'Html / Css 3', 'React Native 2']
}

const backEnd: ArticleType = {
  title: 'Back-end',
  items: ['Node.js 2', 'Typescript 2', 'Express 2', 'Java 1', 'Spring Boot 1']
}

const etc: ArticleType = {
  title: 'ETC',
  items: ['Git', 'Jira', 'Confluence', 'AWS', 'Docker', 'Firebase', 'Zeplin', 'Figma']
}

interface ArticleDisplayProps {
  article: ArticleType
  isHr?: boolean
}

const ArticleDisplay = ({article, isHr= true}: ArticleDisplayProps) => {
  const items = article.items.map(item => (
    <div key={item} className="w-[25%]">{item}</div>
  ))
  return (
    <>
      <article className="lg:flex mb-8">
        <aside className="w-1/4 text-2xl font-semibold mb-4 lg:mb-0">
            {article.title}
        </aside>
        <div className="flex items-center w-full flex-wrap">
          {items}
        </div>
      </article>
      {isHr && <hr className={styles.hr} />}
    </>
  )
}

export default function Skill() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionTitle}>
        <div className={styles.bulletSquare} />
        <h2 >Skills</h2>
      </div>
      <ArticleDisplay article={frontEnd} />
      <ArticleDisplay article={backEnd} />
      <ArticleDisplay article={etc} isHr={false}  />
    </section>
  )
}
