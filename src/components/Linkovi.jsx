import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutubeSquare,
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import stil from "./stil.css";
  import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
  
  export default function DonjiDeo() {
    const stil = {
      kontakt: {
        position: "absolute",
        left: "5px",
        top: "25px",
      },
    };
    return (
      <section>
        <div style={{ position: "relative" }}>
          <div style={stil.kontakt}>
            <p
              style={{
                textAlign: "justify",
                marginTop: "2px",
                marginBottom: "0px",
              }}
            >
              <FontAwesomeIcon icon={faPhone} />
              {"   "}Call centar: 032/222-211
            </p>
            <p style={{ textAlign: "justify", marginTop: "5px" }}>
              <FontAwesomeIcon icon={faEnvelope} />
              {"  "}
              petshoppaws032@gmail.com
            </p>
          </div>
          <h4>Copyright©2024 Pet Shop Paws®</h4>
          <menu>
            <a
              className={stil}
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faYoutubeSquare} />
              YouTube
            </a>
            <a
              className={stil}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagramSquare} />
              Instagram
            </a>
  
            <a
              className={stil}
              href="https://twitter.com/?lang=sr"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
              Twitter
            </a>
            <a
              className={stil}
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
              Facebook
            </a>
          </menu>
        </div>
      </section>
    );
  }