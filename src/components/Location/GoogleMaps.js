const GoogleMaps = () => {
  return (

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.6841704026992!2d-122.22203338156524!3d47.45709561725171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905d3eb3c916b7%3A0x5a21c2c5ee264d52!2s2300%20E%20Valley%20Rd%2C%20Renton%2C%20WA%2098057!5e0!3m2!1sen!2sus!4v1703995553582!5m2!1sen!2sus"
        width="100%"
        height="450"
        style={{border:"0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="googleMaps"
        title="google maps"
      ></iframe>
  );
};
export default GoogleMaps;

