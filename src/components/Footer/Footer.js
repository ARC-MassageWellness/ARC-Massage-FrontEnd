import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './footer.css';
import FaxIcon from '@mui/icons-material/Fax';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import { hours } from '../About/db/db';


export default function Footer(props) {
  const hoursSection = hours.map((el) => {
    return (
      <Grid container>
        <Grid item md={6}>
          <div className="footerHours">{el.day}</div>
        </Grid>
        <Grid item md={6} >
          <div>{el.hours}</div>
        </Grid>
      </Grid>
    );
  });

  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="footerContainer">
          <nav className="navContainerFooter">
            <ul className="navContainer2">
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4} md>
                  <span>
                    <Link className="linkComponent2" to="/">
                      Home
                    </Link>
                  </span>
                </Grid>
                <Grid item xs={6} sm={4} md>
                  <span>
                    <Link className="linkComponent2 " to="/location">
                      Location
                    </Link>
                  </span>
                </Grid>
                <Grid item xs={6} sm={4} md>
                  <span>
                    <Link className="linkComponent2" to="/services">
                      Services
                    </Link>
                  </span>
                </Grid>
                <Grid item xs={6} sm={4} md>
                  <span>
                    <Link className="linkComponent2" to="/medical">
                      Insurance
                    </Link>
                  </span>
                </Grid>
                <Grid item xs={6} sm={4} md>
                  <span>
                    <Link className="linkComponent2" to="/therapist">
                      Team
                    </Link>
                  </span>
                </Grid>
                <Grid item xs={6} sm={4} md>
                  <span>
                    <Link className="linkComponent2" to="/about">
                      Contact
                    </Link>
                  </span>
                </Grid>
              </Grid>
            </ul>
          </nav>

          <span className="footerBusName">ARC Massage and Family Wellness</span>
          <br />

          <hr style={{ height: '2px' }}></hr>

          <div className="footerSections">
            <div>
              <Grid container>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                  <section className="busInfo">
                    <div className="Headers">Contact Us:</div>
                    <div className="addressLink">
                      <a
                        href="https://www.google.com/maps/place/2300+E+Valley+Rd,+Renton,+WA+98057/@47.4582558,-122.2279665,15z/data=!3m1!4b1!4m6!3m5!1s0x54905d3eb3c916b7:0x5a21c2c5ee264d52!8m2!3d47.4582418!4d-122.2176882!16s%2Fg%2F11f40m4jsp?entry=ttu"
                        target="_blank"
                        rel="noreferrer"
                        alt="Google Maps Link"
                      >
                        <div>
                          2300 East Valley RD <br /> 
                          Renton WA 98057
                        </div>
                      </a>
                    </div>
                    <div>
                      <PermPhoneMsgIcon />
                      <a href="tel:2064753574">(206) 475-3574</a>
                    </div>
                    <div>
                      <FaxIcon />
                      (206) 258-8843
                    </div>
                    <span>
                      <i className="bi bi-envelope envelope"></i>{' '}
                    </span>
                    <a
                      className="emailLink"
                      href="mailto:support@arcmassageandwellness.com?subject=To ARC Massage and Wellness"
                    >
                      support@arcmassageandwellness.com
                    </a>
                  </section>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4}>
                  <section className="hoursSection">
                    <div className="Headers"> Hours </div>
                    {hoursSection}
                  </section>
                </Grid>
              </Grid>
            </div>
          </div>
          <section className="logos">
            <span>
              <div className="chamberOfCommerce">
                <a
                  href="https://www.gorenton.com/info_logs/log_chamber?redirect=https://www.gorenton.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://bloqs.s3.amazonaws.com/1247-6902/504588_ProudMemberLogosColor.png"
                    alt="PROUD MEMBER OF THE RENTON CHAMBER OF COMMERCE"
                    className="chamberOfCommerceImg"
                  />
                </a>
              </div>
            </span>
            <span>
              <a
                href="https://www.bbb.org/us/wa/renton/profile/massage-therapist/arc-massage-and-family-wellness-center-llc-1296-1000141830/#sealclick"
                target="_blank"
                rel="nofollow noreferrer"
              >
                <img
                  src="https://seal-alaskaoregonwesternwashington.bbb.org/seals/blue-seal-250-52-bbb-1000141830.png"
                  className="BBB"
                  alt="Arc Massage And Family Wellness Center  LLC BBB Business Review"
                />
              </a>
            </span>
          </section>

          <div className="copyright">
            &#169; {year} ARC Massage and Family Wellness Center, LLC 
          </div>
          <div className="copyright">All Rights Reserved</div>
        </div>
      </footer>
    </>
  );
}
