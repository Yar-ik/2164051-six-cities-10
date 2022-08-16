import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Page404(): JSX.Element {
  return (
    <Link to={AppRoute.Main}>
      <h1>404 Not Found</h1>
    </Link>
  );
}

export default Page404;
