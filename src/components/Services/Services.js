import './services.css';
import Intakeq from './type/Buttons/intakeq/intakeq';
import MassageServices from './type/MasssageServices';
import GiftCardButton from './type/Buttons/GiftCards/giftCardButton';
// import PackageSale from './sale/PackageSale';

export default function Services(props) {
  return (
    <div className="serviceContainer">
      <div>
        <h2 className="servicesTitle">Services</h2>
        <div className="servicesInfo">
          Here's what to consider when you book with us. 
        </div>
            <MassageServices />
      </div>
      <section className="bookAppContainer">
        <GiftCardButton />
        <Intakeq />
      </section>
    </div>
  );
}
