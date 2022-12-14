import Image from 'next/image';
import {ICountry} from '../../types/country';
import styles from './country-details.module.scss';

type TCountryDetails = {
  selectedCountry: ICountry | undefined;
};

function CountryDetails({selectedCountry}: TCountryDetails) {
  return (
    <>
      <div className={styles.countryDetails}>
        <div className={styles.title}>
          <Image
            src={`data:image/png;base64,${selectedCountry?.flag_png}`}
            alt={selectedCountry?.admin || ''}
            width={20}
            height={20}
          />
          <h4>{selectedCountry?.admin}</h4>
        </div>

        <div className={styles.information}>
          <span>Sovereignt</span>
          <span>{selectedCountry?.sovereignt}</span>
        </div>
        <div className={styles.information}>
          <span>Scalerank</span>
          <span>{selectedCountry?.scalerank}</span>
        </div>
        <div className={styles.information}>
          <span>Labelrank</span>
          <span>{selectedCountry?.labelrank}</span>
        </div>
      </div>
    </>
  );
}
export default CountryDetails;
