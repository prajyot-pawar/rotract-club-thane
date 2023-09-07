import React from 'react'
import classNamesPortfolio from './HeroSection.module.css';

const HeroSectionPortFolio = () => {
  return (
  <div className={classNamesPortfolio.canvas}>
  <main className={classNamesPortfolio.main}>
    <div className={classNamesPortfolio.intro}>
    <div className={classNamesPortfolio.intro_head}>Hello,<br/></div>
    I’m <div className={classNamesPortfolio.intro_head}>Yash<br/></div>   
    <div className={classNamesPortfolio.intro_sub}>UI/UX Designer<br/></div>

    lorem ipsumlorem ipsumlorem</div>
    My Blogs
    <div className={classNamesPortfolio.avatar_section}>
    <img src="img_avatar.png" alt="Avatar" className={classNamesPortfolio.avatar}></img>
    </div>
  </main>
  </div>    
  )
}

export default HeroSectionPortFolio;