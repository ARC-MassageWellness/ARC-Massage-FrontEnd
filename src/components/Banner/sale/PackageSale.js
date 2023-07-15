import { Alert } from 'react-bootstrap';

let JanuarySale = (
  <p>
    <p>
      Buy 5 massages and get <strong>two</strong> free!
    </p>
    <p>This wont last long, grab them before January 14th!</p>
    <p>
      Buy 5 massages and get, wait for it, <strong>two</strong> free!
    </p>
  </p>
);

export default function PackageSale(props) {
  return (
    <>
      <Alert variant="warning">
        <div className="width1024 packageBanner">
          <Alert.Heading>Our Packages are on Sale!</Alert.Heading>

          {JanuarySale}

          <hr />
          <p>Buy online through IntakeQ or contact us using the links below</p>
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
      </Alert>
    </>
  );
}

// let OctoberSale = (
//   <p>
//     <p>
//       Normally our packages are only buy 5 massages, get <strong>one</strong>{" "}
//       free, we are running a sale until the <strong>31st of October </strong>
//       for:
//     </p>
//     <p>
//       Buy 5 massages and get, wait for it, <strong>two</strong> free!
//     </p>
//   </p>
// );
