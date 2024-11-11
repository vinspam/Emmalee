import PropTypes from 'prop-types';
import './About.scss';
import SectionHeading from '../SectionHeading/SectionHeading';

const About = ({ data }) => {
  const { imgLink, title, subtitle, text, cvPdf } = data;
  return (
    <section id="about" className="st-about-wrap">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"About Me"} />
      <div className="container">
        <div className="row">
          <div>
            <div className="st-vertical-middle">
              <div className="st-vertical-middle-in">
                <div className={`st-text-block st-style1`} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
                  <h2 style={{ display: 'flex', justifyContent: 'center' }} className="st-text-block-title">{title}</h2>
                  <h4 style={{ display: 'flex', justifyContent: 'center' }} className="st-text-block-subtitle">{subtitle}</h4>
                  <div className="st-text-block-text">
                    <p style={{ lineHeight: '28px' }}>{text}</p>
                  </div>

                  <div className="st-text-block-btn">
                    <a className='st-btn st-style1 st-color1' href={cvPdf} download>Download CV</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

About.propTypes = {
  data: PropTypes.object
}

export default About;



