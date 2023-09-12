import { Spinner } from 'react-bootstrap';
import './loadingIcon.style.css';

export function LoadingIcon() {
  return (
    <div className="loading-icon-container">
      <Spinner variant='secondary' animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
