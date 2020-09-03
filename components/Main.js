import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faDiscord from '@fortawesome/fontawesome-free-brands/faDiscord'
import Article from "./Article"


class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
          
        <article id="introduction" className={`${this.props.article === 'introduction' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Introduction</h2>
          <span className="image main"><img src="/static/images/front.png" alt="" /></span>
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
          {close}
        </article>

        <article id="events" className={`${this.props.article === 'events' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Events</h2>
          <div style={{display:"flex"}}>
          {/*<span className="image main"><img src="/static/images/DSCLogo.png" alt="" /></span>*/}
          <span className="image main"><img src="/static/images/RU.png" alt="" /></span>
          <div>
          <p><b>Information Session: </b>
          Due to the times, the info session will be held virtually via <a href = "https://meet.google.com/pyk-vtoy-ubq"> google meet. </a> Come meet the team and 
          learn what Google Student Developer Clubs are, and how you can get involved. For a sneak peek, visit our introduction page.</p>
          <p> <a href = "https://forms.gle/kRQP5FytftWYvf139"><b>RSVP</b></a></p>
          <p>Also check out the <a href = "https://dsc.community.dev/rowan-university/"> events platform</a> Google provided.</p>
          {close}
          </div>
          </div>
        </article>

        <article id="get involved" className={`${this.props.article === 'get involved' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Get Involved</h2>
          <span className="image main"><img src="/static/images/front.png" alt="" /></span>
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
          {close}
        </article>

        <article id="current officers" className={`${this.props.article === 'current officers' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
        <h2 className="major">Current Officers</h2>
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

          <p>Interested in being an officer? We are always looking for dedicated members. Email the DSC Lead directly with a paragraph describing yourself, and why
            you think you would be a good fit for an officer position. Feel free to attach supporting documents, and thank you for expressing interst in Google
            Developer Student Clubs.
          </p>
          {close}
          </div>
          </div>
        </article>

        <article id="enlist us" className={`${this.props.article === 'enlist us' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Enlist Us</h2>
          <span className="image main"><img src="/static/images/front.png" alt="" /></span>
          <p> Looking to enlist the Google DSC at Rowan University?</p>
          <p> Write up a requirements document detailing what we can do for you. Then, send an email to rowandevelopers@gmail.com 
            with your association in the subject line. Be sure to include the names of who we would be collaborating with, and we 
            will get back to you as soon as possible! </p>
          {/*<form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
  </form>*/}
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
          {close}
        </article>
        
        

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main