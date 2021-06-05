import './Header.css'
import avatar from '../../assets/alberto.jpg'
import githubWhite from '../../assets/icons/github-white.jpg'
import githubDark from '../../assets/icons/github-dark.jpg'
import inWhite from '../../assets/icons/in-white.png'
import inDark from '../../assets/icons/in-dark.png'
import twitterWhite from '../../assets/icons/twitter-white.png'
import twitterDark from '../../assets/icons/twitter-dark.png'

export default function Header() {
    return (
    <div className="HeaderContainer">
    
      <div className="LogoHeader">
        <div className="AvatarContainer">
          <img className="AvatarImg" src={avatar} alt="Avatar" />
        </div>
        <div className="LogoText">
          <div>apascualco.com</div>
          <div>Alberto Pascual</div>
        </div>
      </div>
      <div></div>
      <div>
        <div className="SocialNetworkContainer">
          <div className="FirstSocialNetworkIcon">
            <a href="https://github.com/apascualco">
              <img
                className="SocialNetworkHeader"
                src={githubDark}
                alt="GitHub"
                onMouseOver={(e) => e.currentTarget.src = githubWhite}
                onMouseOut={(e) => e.currentTarget.src = githubDark}
              />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/apascualco">
              <img
                className="SocialNetworkHeader"
                src={inDark}
                alt="Linkedin"
                onMouseOver={(e) => e.currentTarget.src = inWhite}
                onMouseOut={(e) => e.currentTarget.src = inDark}
              />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/apascualco">
              <img
                className="SocialNetworkHeader"
                src={twitterDark}
                alt="Twitter"
                onMouseOver={(e) => e.currentTarget.src = twitterWhite}
                onMouseOut={(e) => e.currentTarget.src = twitterDark}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    )
}
