import { Link } from 'react-router-dom';

const ModalLevel = ({ setIsVisibleModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div onClick={() => setIsVisibleModal(false)} className="modal__close">
          Закрыть
        </div>
        <div className="modal__level">Выбери сложность</div>
        <div className="modal__buttons">
          <Link to={'/play-easybot'}>
            <button>Начальная</button>
          </Link>
          <Link to={'/play-advanced'}>
            <button>Продвинутая</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalLevel;
