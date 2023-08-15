import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './card.style.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { ConfirmModal, GameStatusSelect, GlobalModal } from '../../index';
import customToggle from './customToggle';
import { useDeleteGame, useEditGame } from '../../../hook/index';

export function GameCard({
  image,
  gameName,
  link,
  children,
  date,
  showDots,
  gameId,
}) {
  const { statusInput, handleGameInputChange, onEditGameClick } = useEditGame();
  const { onDeleteGameClick } = useDeleteGame();

  return (
    <Card style={{ width: '20rem', border: 'none' }} bg="dark" text="light">
      {showDots && (
        <Dropdown className="dots-menu" drop="start">
          <Dropdown.Toggle as={customToggle}></Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <GlobalModal
                button={<span className="edit-game-dropdown">Edit</span>}
                modalTitle="Edit Game."
                confirmButtonText="Edit"
                onClick={() => onEditGameClick(gameId)}
              >
                <div className="select-status-padding">
                  <p>What is the actual status of your game?</p>
                  <GameStatusSelect
                    handleGameInputChange={handleGameInputChange}
                    statusInput={statusInput}
                  />
                </div>
              </GlobalModal>
            </Dropdown.Item>
            <Dropdown.Item>
              <ConfirmModal
                button={<span className="edit-game-dropdown">Delete</span>}
                confirmButtonText="Delete"
                onClick={() => onDeleteGameClick(gameId)}
              >
                <div className="select-status-padding">
                  <h4>Are you sure that you want to delete this game?</h4>
                </div>
              </ConfirmModal>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
      <Card.Img variant="top" src={image} />
      <Card.Body>
        {date && <p className="card-date">{date}</p>}
        <Card.Title>{gameName}</Card.Title>
        <Link to={link} className="link-decoration">
          <div className="game-details-link">
            <p>
              <AiOutlineArrowRight /> Find out more
            </p>
          </div>
        </Link>
      </Card.Body>
      <ListGroup className="list-group-flush">{children}</ListGroup>
    </Card>
  );
}
