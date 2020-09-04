import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faDiscord from '@fortawesome/fontawesome-free-brands/faDiscord'
import Article from './Article';

 
const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/*<div className="logo">}    
            /*<span className="icon fa-diamond"></span>
            <span className="image main"><img src="/static/images/RU.png" alt="" /></span>
            <FontAwesomeIcon icon={faGem} transform="grow-18" />
            
</div>*/}

        <div className="content">
            <div className="inner">
                {/*<h1>Google DSC: Rowan University</h1>*/}
                <span className="image main"><img src="/static/images/Rowan University (White Text).svg" alt="" /></span>
                <p><b>Google Developer Student Clubs:</b> Building software solutions for community problems. Turning theory into practice</p>
                <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSdjJ7drngG40W2Xs1ATIs7unJDg0wuaYdERqtobxeMILOdhaw/viewform?usp=sf_link"><b>JOIN US</b></a> </p>
                <p><a href="javascript:;" onClick={() => {props.onOpenArticle('enlist us')}}><b>WORK WITH US</b></a></p>
                <ul className="icons">
                <li><a href="https://github.com/RowanDSC">
                  <FontAwesomeIcon icon={faGithub} />
                </a></li>
                <li><a href="https://discord.gg/uTVcDSv">
                  <FontAwesomeIcon icon={faDiscord} />
                </a></li>
                <li><a href="https://twitter.com/RowanDSC">
                  <FontAwesomeIcon icon={faTwitter} />
                </a></li>
                <li><a href="https://www.facebook.com/RowanUniversityDSC">
                  <FontAwesomeIcon icon={faFacebook} />
                </a></li>
                <li><a href="https://www.instagram.com/rowandsc">
                  <FontAwesomeIcon icon={faInstagram} />
                </a></li>
            
          </ul>
            </div>
        </div>
        
        <nav>
            <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#get_involved">Get Involved</a></li>
                <li><a href="#current_officers">Current Officers</a></li>
                <li><a href="#enlist_us">Enlist Us</a></li>
                
            </ul>
            
        </nav>
        <Article title={"Introduction"} articleId={"introduction"}>
          <p> What is a Developer Student Club? Well, what are you? Developers? Entrepeneurs? Problem solvers? A Developer Student Club is all of these things
            and more. A Developer Student Club is a place where you can learn the technologies you <i> want</i> to. A place to foster your personal projects. 
            A Google backed community of peers and mentors consistently supporting local organizations with software solutions.
          </p>
          <p><b>Projects: </b> Every week, the core officers of the club and dedicated members do a "code sprint", where we work on a project that 
          aims to solve a local problem with software.</p>
          <p><b>Events: </b> Every couple months or so, we host an event focused on learning a specific technology.</p>
          <p>It's important to emphasize that a Google Developer Student Club is not just another class. We're not here to lecture you. We're here 
            to grow with you. 
          </p>
          <p> What are you waiting for? Come to our <a href="https://docs.google.com/forms/d/e/1FAIpQLSdjJ7drngG40W2Xs1ATIs7unJDg0wuaYdERqtobxeMILOdhaw/viewform?usp=sf_link">Information Session</a> </p>
          </Article>

          <Article title={"Events"} articleId={"events"}>
          <div style={{display:"flex"}}>
            <span className="image main"><img src="/static/images/RU.png" alt="" /></span>
            <div style={{paddingLeft:"3em"}}>
              <p><b>Information Session: </b>
              Due to the times, the info session will be held virtually via <a href = "https://meet.google.com/pyk-vtoy-ubq"> google meet. </a> Come meet the team and 
              learn what Google Student Developer Clubs are, and how you can get involved. For a sneak peek, visit our introduction page.</p>
              <p> <a href = "https://forms.gle/kRQP5FytftWYvf139"><b>RSVP</b></a></p>
              <p>Also check out the <a href = "https://dsc.community.dev/rowan-university/"> events platform</a> Google provided.</p>
            </div>
          </div>
          </Article>

          <Article title={"Get Involved"} articleId={"get_involved"}>
          <p>Looking to get involved? First of all, check out our next event and RSVP. Second, join our discord and follow our social media (links below). Finally, 
            if you're interested in this club, odds are you're very passionate about what you do; tell us a little bit about yourself in the ice breakers section
            of the discord.
          </p>
          <p>Want to contribute? Check out our GitHub and let us know what you think.
          </p>
          <ul className="icons">
            <li><a href="https://github.com/RowanDSC">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
            <li><a href="https://discord.gg/uTVcDSv">
              <FontAwesomeIcon icon={faDiscord} />
            </a></li>
            <li><a href="https://twitter.com/RowanDSC">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="https://www.facebook.com/RowanUniversityDSC">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="https://www.instagram.com/rowandsc">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            
          </ul>
          </Article>

          <Article title={"Current Officers"} articleId={"current_officers"}>
          <div style={{display:"flex"}}>
          <div>
          <p><b>M Sarosh Khan: </b>
          Current DSC Lead. Pursuing Masters in Computer Science and Bachelors in Mathematics. Sarosh works as a Mathematics tutor as well as a student researcher.
          He spends much of his time learning new skills, solving puzzles, and writing. khanmo67@students.rowan.edu</p>
          <p><b>Lucas LaValva: </b>
          DSC Developer. Pursuing Bachelors in Computer Science and in Mathematics. Luke spends his time tutoring middle schoolers in 
          Mathematics and Computer Programming. He is always willing to learn something new, and will approach any new topic with enthusiasm. 
          He has recently developed a passion for graphics, and plans to learn more about them. lavalv46@students.rowan.edu</p>
          <p><b>Mark Vadeika: </b>
          DSC Developer. Pursuing Masters in Computer Science. Mark tutors other computer science students within the CS department and runs the Rowan Association for 
          Computing Machinery. He also enjoys programming websites and working on new and interesting projects. vadeik42@students.rowan.edu</p>
          <p><b>Matthew Bisiccia: </b>
          DSC Developer. Pursuing Bachelors in Electrical and Computer Engineering with a minor in Computer Science. Matthew has a passion for software and electrical engineering principles, and likes to strive 
          to understand the physics of how things work. He hopes to serve in biomedical engineering efforts and he enjoys web and game development. 
          He hopes to learn about the applications of machine learning and one day hopefully apply them in industry.</p>
          <p><b>Elena Vilceanu: </b>
          DSC Marketting and Media Manager. Pursuing Masters in Computer Science and Bachelors in Mathematics. Elena is interested in all complex algorithms and 
          puzzles. In her free time she works on number games such as Sudoku, Kakuro, and Solitaire. vilcea55@students.rowan.edu</p>
          <p><b>Evan Pearce</b>
          DSC Technical Advisor. Pursuing Bachelors in Computer Science and minoring in Mathematics. Evan has experience developing software from years of development with 
          companies and on personal projects. Along with experience, his skill inventory provides insight on how to tackle challenges the club is facing.
          </p>

          <p>Interested in being an officer? We are always looking for dedicated members. Email the DSC Lead directly with a paragraph describing yourself, and why
            you think you would be a good fit for an officer position. Feel free to attach supporting documents, and thank you for expressing interst in Google
            Developer Student Clubs.
          </p>
          </div>
          </div>
          </Article>

          <Article title={"Enlist Us"} articleId={"enlist_us"}>
          <p> Looking to enlist the Google DSC at Rowan University?</p>
          <p> Write up a requirements document detailing what we can do for you. Then, send an email to rowandevelopers@gmail.com 
            with your association in the subject line. Be sure to include the names of who we would be collaborating with, and we 
            will get back to you as soon as possible! </p>

          </Article>
        
 
    </header>



)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool
}

export default Header
