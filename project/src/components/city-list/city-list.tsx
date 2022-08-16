import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setCity } from '../../store/action';

type Props = {
  cities: string[];
};

function CityList({ cities }: Props) {
  const dispatch = useDispatch();

  // (Получать текущее состояние) Возвращает текущее состояние (текущий город из стора)
  const currentCity = useSelector((state: any) => state.city);
  // eslint-disable-next-line no-console
  console.log(currentCity);
  // Функция обработчик(клик по ссылке)
  const handleClick = (e: React.MouseEvent<HTMLElement>, city: string) => {
    // eslint-disable-next-line no-console
    console.log(city);

    e.preventDefault();

    // отправляю выбранные город через dispatch в store (обновляю города в сторе)
    dispatch(setCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li className="locations__item" key={city}>
              <a
                className={`locations__item-link tabs__item ${
                  currentCity === city ? 'tabs__item--active' : ''
                }`}
                href="#todo"
                onClick={(e) => handleClick(e, city)}
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
