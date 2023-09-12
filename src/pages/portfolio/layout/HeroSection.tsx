
import classNamesPortfolio from './HeroSection.module.css';
import ClubLogoWhiteWheel from '../../../assets/images/ClubLogoWhiteWheel.png'

const HeroSectionPortFolio = () => {
  return (
  <div className={classNamesPortfolio.canvas}>
  <main className={classNamesPortfolio.main}>
    <div className={classNamesPortfolio.lefttitle}>
    <div className={classNamesPortfolio.intro}>
    <div className={classNamesPortfolio.intro_head}>Hello,<br/>
    I’m</div> <div className={classNamesPortfolio.intro_subhead}>Yash<br/></div>   
    <div className={classNamesPortfolio.intro_sub}>UI/UX Designer<br/></div>
    <div className={classNamesPortfolio.intro_subtext}>lorem ipsumlorem ipsumloremlorem ipsumlorem ipsumloremlorem ipsumlorem ipsumloremlorem ipsumlorem ipsumloremlorem ipsumlorem ipsumloremlorem ipsumlorem ipsumlorem</div>
    </div> 
    </div> 
  <div className={classNamesPortfolio.avatar_section}>    
    <img src={ClubLogoWhiteWheel} alt="Avatar" className={classNamesPortfolio.profileImage}></img>
    <img src={ClubLogoWhiteWheel} alt="Avatar" className={classNamesPortfolio.avatar}></img>
    </div>
  </main>  
  </div>
  )
}

export default HeroSectionPortFolio;