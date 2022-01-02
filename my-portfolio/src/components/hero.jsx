import React from 'react';
function Hero() {
  return (
    <div className="hero">
          <div className="hero__content">
          <div className='hero__textBox word-wrap'>
          <h3 className="hello"> HELLO 👋 </h3>
            <h4 className="name">I 'm Ovbije OnlyGod</h4>
            <p className="header_title text-wrapper letter ">
              A Creative <span className="highlight">Fullstack Web Developer</span>, who loves making awesome web
              apps using Python & Javascript.{' '}
            </p>
            <div className="wrap_button">
            <a href="#works">
              <button
                type="button"
                className="in mybutton "
              >
                View My Works
              </button>
            </a>

            <a href="mailto:onlygodovbije@gmail.com">
              {' '}
              <button
                type="button "
                className="mybutton text-secondary"
              >
                Get in Touch
              </button>
            </a>
          </div>
          </div>

          
          
        <div className="me"></div>

      </div>

      <div className="give_space"></div>
    </div>
  );
}

export default Hero;
