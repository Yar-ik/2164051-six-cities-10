import Main from '../../pages/main/main';

type AppMainProps = {
  rentalOffers: number;
};

function App({ rentalOffers }: AppMainProps): JSX.Element {
  return <Main rentalOffers={rentalOffers} />;
}

export default App;
