import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="home__title">Крестики-нолики</div>
      <div className="home__buttons">
        <Link to={'/play-friend'}>
          <button className="button">Игра на двоих</button>
        </Link>
        <Link to={'/play-bot'}>
          <button className="button">Игра с ботом</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
