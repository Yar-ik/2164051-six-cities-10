import { useSelector } from 'react-redux';

type Props = {
  cities: string[];
};

function CityList({ cities }: Props) {
  const currentCity = useSelector((state: any) => state.city);
  // console.log(currentCity);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    // Достать текущий город из event и отправить его через dispatch в store
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <a
                className="locations__item-link tabs__item"
                href="#todo"
                onClick={handleClick}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityList;
