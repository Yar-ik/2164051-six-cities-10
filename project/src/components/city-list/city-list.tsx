type Props = {
  cities: string[];
  city: string;
  onCityChange: (city: string) => void;
};

function CityList({ cities, city, onCityChange }: Props) {
  const handleClick = (v: string) => {
    onCityChange(v);
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((cityItem, index) => (
            <li className="locations__item" key={`${index}-${city}`}>
              <a
                className={`locations__item-link tabs__item ${
                  cityItem === city ? 'tabs__item--active' : ''
                }`}
                href="#todo"
                onClick={() => handleClick(cityItem)}
              >
                <span>{cityItem}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityList;
