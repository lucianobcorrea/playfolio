import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import useGlobalUser from '../../../context/user.context';
import { useEditProfile, useGetAllUserGames } from '../../../hook/index';
import { Header } from '../../components/header/header.component';
import { FaGamepad } from 'react-icons/fa';
import { HiPencilAlt } from 'react-icons/hi';
import { ToastContainer } from 'react-toastify';
import './profileScreen.style.css';
import { AllDetailsCard } from '../../components/allDetailsCard/allDetailsCard.component';
import { getStandartDateTime } from '../../../helpers/dateFunctions';
import { selectStatusClass } from '../../../helpers/selectStatusClass';
import { GlobalModal } from '../../components/modal/modal.component';
import { TextInput } from '../../components/textInput/textInput.component';

export function Profile() {
  const [user] = useGlobalUser();
  const { games, fetchAllGames, isLoading } = useGetAllUserGames();
  const { profileInputs, handleProfileChange, handleProfileSubmit } =
    useEditProfile();

  useEffect(() => {
    fetchAllGames();
  }, []);

  return (
    <>
      <ToastContainer />
      <Header />
      <Container>
        <div className="profile-data-container">
          <GlobalModal
            button={<HiPencilAlt size={30} />}
            modalTitle="Edit Profile."
            confirmButtonText="Edit"
            onClick={handleProfileSubmit}
          >
            <TextInput
              placeholder="Ex.: Beatriz dos Santos"
              labelText="Name*"
              inputType="text"
              inputName="name"
              forId="name"
              inputValue={profileInputs.name}
              onChange={handleProfileChange}
            />
            <TextInput
              placeholder="Ex.: https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg"
              labelText="Profile Image"
              inputType="text"
              inputName="image"
              forId="image"
              inputValue={profileInputs.image}
              onChange={handleProfileChange}
            />
          </GlobalModal>
          <img src={user.image} alt={user.name} />
          <h1>{user.name}</h1>
          <h2>{user.email}</h2>
          <div className="game-quantity-details">
            <h2>{games.length} Games</h2>
            <FaGamepad size={70} />
          </div>
        </div>
        <div className="cards-container">
          {games.map(
            ({ image, name, publishDate, status, appId, id }, index) => {
              const formattedDate = getStandartDateTime(publishDate);
              const className = selectStatusClass(status);
              return (
                <AllDetailsCard
                  key={index}
                  formattedDate={formattedDate}
                  className={className}
                  status={status}
                  name={name}
                  appId={appId}
                  userImage={user.image}
                  userName={user.name}
                  image={image}
                  gameId={id}
                  index={index}
                  showDots={true}
                />
              );
            }
          )}
        </div>
      </Container>
    </>
  );
}
