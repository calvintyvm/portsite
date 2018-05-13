import React from 'react'
import FontAwesome from 'react-fontawesome'
import Link from 'gatsby-link'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import mongo from '../images/mongo.svg'
import pic03 from '../images/pic03.jpg'
import sql from '../images/sql.svg'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faReact from '@fortawesome/fontawesome-free-brands/faReact'
import faHtml5 from '@fortawesome/fontawesome-free-brands/faHtml5'
import faSass from '@fortawesome/fontawesome-free-brands/faSass'
import faWordpress from '@fortawesome/fontawesome-free-brands/faWordpress'
import faNode from '@fortawesome/fontawesome-free-brands/faNode'
import faPhp from '@fortawesome/fontawesome-free-brands/faPhp'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import Swiper from 'react-id-swiper'
import '../assets/scss/swiper.scss'

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

class Main extends React.Component {
  render() {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Calvin Ting</h2>
          <div className="intro-container">
            <span className="image main">
              <img src={pic01} alt="" />
            </span>
            <div className="intro-words-container">
              <p>
                I am an aspiring Full Stack Developer currently studying at RED.
              </p>
              <p>
                Before RED, I went to Langara for Sociology, pursuing an career
                in Education when I stumbled across an Intro to Programming
                course, based in Javascript.
              </p>
              <p>
                Ever since then, I becomed obsessed with Programming and decided
                to make a career change into Tech.
              </p>
              <p>
                With Programming, I enjoy turning complex problems into simple,
                beautiful and intuitive solutions.
              </p>
              <p>I am born and raised in Vancouver.</p>
            </div>
          </div>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <div className="skills-container">
            <h2> Front End</h2>
            <div className="front-end">
              <FontAwesomeIcon icon={faReact} size="5x" fill="colored" />
              <FontAwesomeIcon icon={faHtml5} size="5x" />
              <FontAwesomeIcon icon={faSass} size="5x" />
              <FontAwesomeIcon icon={faWordpress} size="5x" />
            </div>
            <h2 className="back-end-title"> Back End</h2>
            <div className="back-end">
              <img src={mongo} alt="" />
              <FontAwesomeIcon icon={faNode} size="5x" />
              <FontAwesomeIcon icon={faPhp} size="5x" />
              <img src={sql} alt="" style={{ width: 150, height: 80 }} />
            </div>
            <div className="skills-words-container">
              <p>
                Adipiscing magna sed dolor elit. Praesent eleifend dignissim
                arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat.
                Praesent urna nisi, fringila lorem et vehicula lacinia quam.
                Integer sollicitudin mauris nec lorem luctus ultrices.
              </p>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
                dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                amet feugiat tempus.
              </p>
            </div>
          </div>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <div className="carousel">
            <Swiper {...params}>
              <div>
                <h2 className="project-title">Spread Calculator</h2>
                <img
                  src="https://i.gyazo.com/f65bb8010202d85c86c371d8148723f4.png"
                  alt="https://gyazo.com/f65bb8010202d85c86c371d8148723f4"
                  width="1277"
                />
                <p>
                  Description: Spread Calculator was my very first application
                  built. It is a simple home/away score counter for sports that
                  involves scoring. During my time building this application, I
                  was fairly new to Javascript and simply built something that
                  would aim to make my life easier.
                </p>
                <p>Built With: Javascript, HTML and CSS.</p>
                <p>
                  GitHub:<a
                    href="https://github.com/calvintyvm/calculator"
                    target="_blank"
                  >
                    {' '}
                    https://github.com/calvintyvm/calculator
                  </a>
                </p>
              </div>
              <div>
                <h2 className="project-title">Aloha</h2>
                <img
                  src="https://i.gyazo.com/85b53c44e1b0ab4ebd206f5c3c194490.jpg"
                  alt="https://gyazo.com/85b53c44e1b0ab4ebd206f5c3c194490"
                  width="1280"
                />
                <p>
                  Description: Aloha was my very first project built at RED
                  Academy. Aloha is a simple and responsive ecommerce site
                  mockup built to simply please the eye. Aloha did not focus so
                  much on the functionality of an ecommerce site but more on the
                  appearances and details of the site.
                </p>
                <p>Built With: Javascript, HTML and CSS.</p>
                <p>
                  {' '}
                  GitHub:<a
                    href="https://github.com/calvintyvm/aloha"
                    target="_blank"
                  >
                    {' '}
                    https://github.com/calvintyvm/aloha
                  </a>
                </p>
              </div>
              <div>
                <h2 className="project-title">Instanews</h2>
                <img
                  src="https://i.gyazo.com/c60f62a2822b60fd340863ea51f97cfa.jpg"
                  alt="https://gyazo.com/c60f62a2822b60fd340863ea51f97cfa"
                  width="1280"
                />
                <p>
                  Description: Instanews is a one page responsive application
                  site that allows user to filter top news story categories via
                  the New York Times API with just a click of a button.
                  Instanews focused more on API fetching and filtering with
                  Javascript along with CSS animations.
                </p>
                <p>Built With: Jquery, HTML and SASS.</p>
                <p>
                  {' '}
                  GitHub:<a
                    href="https://github.com/calvintyvm/Instanews"
                    target="_blank"
                  >
                    {' '}
                    https://github.com/calvintyvm/Instanews
                  </a>
                </p>
              </div>
              <div>
                <h2 className="project-title">AirPong</h2>
                <img
                  src="https://i.gyazo.com/3cd8e8671954d7ba38c3e3df96a09b3d.png"
                  alt="https://gyazo.com/3cd8e8671954d7ba38c3e3df96a09b3d"
                  width="1279"
                />
                <p>
                  Description: AirPong was my very first game built with
                  Javascript. AirPong includes the usage of SVG rendering on top
                  of Javascript and the use of Object Orientated programming.
                  AirPong taught me the uniqueness of Javascript as it wasn't
                  only being used for application/web development but also used
                  for game development.
                </p>
                <p>Built With: Jquery, Vanilla Javascript, HTML and SASS.</p>
                <p>
                  GitHub:<a
                    href="https://github.com/calvintyvm/AirPong"
                    target="_blank"
                  >
                    {' '}
                    https://github.com/calvintyvm/AirPong{' '}
                  </a>
                </p>
              </div>
              <div>
                <h2 className="project-title">Inhabitent</h2>
                <img
                  src="https://i.gyazo.com/64db907187bebef2cb6895998537de3c.jpg"
                  alt="https://gyazo.com/64db907187bebef2cb6895998537de3c"
                  width="1280"
                />
                <p>
                  Description: Inhabitent is a fully fletched blogging site
                  built on top of Wordpress. Inhabitent features easy usage for
                  bloggers and clients who simply just want to output content
                  without having to worry about coding. Inhabitent also features
                  many different functions such as a shopping catalogue, forms
                  and customized widgets.
                </p>
                <p>
                  Built With: Wordpress, PHP, HTML, Jquery, Vanilla Javascript
                  and SASS.
                </p>
                <p>
                  GitHub:{' '}
                  <a
                    href="https://github.com/calvintyvm/inhabitent"
                    target="_blank"
                  >
                    https://github.com/calvintyvm/inhabitent
                  </a>
                </p>
              </div>
              <div>
                <h2 className="project-title">Quotes On Dev</h2>
                <img
                  src="https://i.gyazo.com/cd63375f190738d5632d9d08e9220a72.png"
                  alt="https://gyazo.com/86341e59d682a1bfc47f3f774e125ff4"
                  width="1278"
                />
                <p>
                  Description: Quotes on Dev if a fully responsive Wordpress
                  site that focused on the usage of API fetching along with
                  using the POST method with Wordpress's REST API. With Quotes
                  on Dev, you are able to filter through random API requests
                  that outputs a random quote. You are also able to submit your
                  own quote that adds onto that API database.
                </p>
                <p>
                  Built With: Wordpress, PHP, HTML, Jquery, Vanilla Javascript
                  and SASS.
                </p>
                <p>
                  GitHub:{' '}
                  <a href="https://github.com/calvintyvm/Quotes-On-Dev">
                    https://github.com/calvintyvm/Quotes-On-Dev{' '}
                  </a>
                </p>
              </div>
              <div>
                <h2 className="project-title">LincEdge</h2>
                <img
                  src="https://i.gyazo.com/86341e59d682a1bfc47f3f774e125ff4.jpg"
                  alt="https://gyazo.com/86341e59d682a1bfc47f3f774e125ff4"
                  width="1278"
                />
                <p>
                  Description: LincEdge was my very first client project. It was
                  done in a group of 3 and our task was to remodel Lincedge.com
                  site with the help of the UI/UX designers. The old Lincedge
                  was built with Wix but it is now built with Wordpress. Thew
                  new Lincedge is a fully responsive site that takes advantage
                  Wordpress CMS which allows our client to easily customize and
                  add content. The new Lincedge features a Blog, Contact forms
                  and many customized functions built solely for our client.
                </p>
                <p>
                  Built With: Wordpress, PHP, HTML, Jquery, Vanilla Javascript
                  and SASS.{' '}
                </p>
                <p>
                  GitHub:{' '}
                  <a
                    href="https://github.com/redacademy/linc-winter-2018"
                    target="_blank"
                  >
                    https://github.com/redacademy/linc-winter-2018
                  </a>
                </p>
              </div>
              <div>
                <h2 className="project-title">BoomTown</h2>
                <img
                  src="https://i.gyazo.com/18c8a18b336c94dcc0d6c8ed3266514b.jpg"
                  alt="https://gyazo.com/18c8a18b336c94dcc0d6c8ed3266514b"
                  width="1275"
                />
                <p>
                  Description: BoomTown is a fully fletch React application that
                  allows users to share and borrow items.
                </p>
                <p>Built With: React, NodeJS, PostgresSQL, Express, Apollo </p>
                <p>
                  GitHub:{' '}
                  <a href="https://github.com/calvintyvm/BoomTown-Root">
                    {' '}
                    https://github.com/calvintyvm/BoomTown-Root{' '}
                  </a>
                </p>
              </div>
            </Swiper>
          </div>
          {close}
        </article>
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form
            method="POST"
            action="https://formspree.io/calvinting@protonmail.com"
          >
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
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <h2 className="major">Find me On</h2>
          <ul className="icons">
            <a
              href="https://www.linkedin.com/in/calvin-ting-77578a156/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="5x" />
            </a>
            <a href="https://github.com/calvintyvm/" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="5x" />
            </a>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool,
}

export default Main
