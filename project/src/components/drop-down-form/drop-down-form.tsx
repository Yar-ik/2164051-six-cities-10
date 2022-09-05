import { useState } from 'react';
import { Sort } from '../../const';

type Props = {
  sortBy: Sort;
  onSortChange: (sortBy: Sort) => void;
};

function DropDownForm({ sortBy, onSortChange }: Props): JSX.Element {
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = (type: Sort) => {
    onSortChange(type);
    setMenuActive(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        onClick={() => setMenuActive(!menuActive)}
        tabIndex={0}
      >
        {sortBy}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul
        className={`places__options places__options--custom ${
          menuActive ? ' places__options--opened' : ''
        }
       `}
      >
        <li
          className="places__option places__option--active"
          tabIndex={0}
          onClick={() => handleClick(Sort.Popular)}
        >
          Popular
        </li>
        <li
          className="places__option"
          tabIndex={0}
          onClick={() => handleClick(Sort.PriceAsc)}
        >
          Price: low to high
        </li>
        <li
          className="places__option"
          tabIndex={0}
          onClick={() => handleClick(Sort.PriceDesc)}
        >
          Price: high to low
        </li>
        <li
          className="places__option"
          tabIndex={0}
          onClick={() => handleClick(Sort.TopRated)}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}
export default DropDownForm;
