import React from 'react';
import { Link } from 'react-router-dom';
import ModalLevel from '../components/modals/modalLevel/ModalLevel';

const Home = () => {
	const [isVisibleModal, setIsVisibleModal] =  React.useState(false);
  return (
    <div className="home">
      <div className="home__title">Крестики-нолики</div>
      <div className="home__buttons">
        <Link to={'/play-friend'}>
          <button className="button">Игра на двоих</button>
        </Link>
        <button onClick={() => setIsVisibleModal(true)} className="button">Игра с ботом</button>
      </div>
			{isVisibleModal && <ModalLevel setIsVisibleModal={setIsVisibleModal}/>}
    </div>
  );
};

export default Home;
