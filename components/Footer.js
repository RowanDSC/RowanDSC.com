import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faDiscord from '@fortawesome/fontawesome-free-brands/faDiscord'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        {/*<ul><image className="image main"><img src="/static/images/gd.png" style={{display:"flex-shrink"}} alt="" /></image></ul>*/}
        
        <p className="copyright">&copy; Next.js Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://github.com/zeit/next.js">Next.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
