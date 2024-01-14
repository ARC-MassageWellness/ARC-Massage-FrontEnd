import './Banner.css';
import Newlocation from './newLocation/newLocation'

/* Year Month Day TIME(T) Hour Minute Seconds*/
let setStartDate = new Date('2023-05-01T00:00:01');
let setEndDate = new Date('2024-06-13T23:59:00');

let startDate = setStartDate.getTime();
let endDate = setEndDate.getTime();
let now = Date.now();

export default function Banner(props) {
  return (
    <>
      {now > startDate && now < endDate ? (
        <>
          <Newlocation />
        </>
      ) : (
        ''
      )}
    </>
  );
}
