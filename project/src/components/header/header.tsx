import Logo from './../logo/logo';
import Email from './../email/email';

import { AppRoute } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch } from './../../hooks/index';

function Header() {
  const dispatch = useAppDispatch();
  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(logoutAction());
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Email />
              </li>

              <li className="header__nav-item">
                <a
                  href={AppRoute.Login}
                  onClick={handleSignOut}
                  className="header__nav-link"
                >
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
