import { Alert } from 'react-bootstrap';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import { useState } from 'react';

import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Accordion from 'react-bootstrap/Accordion';

export default function PackageSale(props) {
  const [expand, setExpand] = useState(false);

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      setExpand(expand ? false : true);
    });

    return (
      <div
        type="div"
        onClick={decoratedOnClick}
      >
        {children}
      </div>
    );
  }

  let newLocation = (
    <p className="topBannerInfo">

      <p>We are ecstatic to inform that we are moving to a new location as of January 22nd<br /><br />
        Our new address will be<br />
        <a
          href="https://www.google.com/maps/dir//2300+E+Valley+Rd+Renton,+WA+98057/@47.4582418,-122.2176882,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x54905d3eb3c916b7:0x5a21c2c5ee264d52"
          target="_blank"
          rel="noreferrer"
          alt="Google Maps Link"
        >
          <span>
            2300 East Valley RD Renton WA 98057
          </span>
        </a>
        <span>{" "}(located inside RCF CrossFit)</span>
      </p>
    </p>
  );

  return (
    <>
      <Accordion
        className="bannerBox"
        flush
        defaultActiveKey={['0']}
        alwaysOpen
      >
        <CustomToggle eventKey="0" className="bannerTitle">
          <div className="bannerTitle">
            We're moving!{' '}
            <span
              className={expand ? 'bannerOpen ' : 'closedBanner'}
              onClick={() => setExpand(expand ? false : true)}
            >
              <UnfoldMoreIcon sx={{ fontSize: 25 }} />
            </span>
            <span
              className={expand ? 'closedBanner' : 'bannerOpen'}
              onClick={() => setExpand(expand ? false : true)}
            >
              <UnfoldLessIcon sx={{ fontSize: 25 }} />
            </span>
          </div>
        </CustomToggle>
        <Accordion.Collapse eventKey="0">
          <div className="bannerBody">
            <hr />
            {newLocation}
            <hr />
            <p>
              Please email{' '}
              <Alert.Link href="mailto:support@arcmassageandwellness.com?subject=To ARC Massage and Wellness - Packages">
                support@arcmassageandwellness.com
              </Alert.Link>{' '}
              or call{' '}
              <Alert.Link href="tel:2064753574">(206) 475-3574</Alert.Link> for
              more information
            </p>
          </div>
        </Accordion.Collapse>
      </Accordion>
    </>
  );
}
