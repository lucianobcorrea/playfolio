import Button from 'react-bootstrap/Button';
import { ToastContainer } from 'react-toastify';
import leon from '../../../assets/leon-login.png';
import { useLoginInputs } from '../../../hook/useLoginInputs/useLoginInputs.hook';
import { useRegisterFormInputs } from '../../../hook/useRegisterFormInputs/useRegisterFormInputs.hook';
import { GlobalModal, PasswordInput, TextInput } from '../../index';
import './loginScreen.style.css';

export function LoginScreen() {
  const { formInputs, handleChange, handleSubmit } = useLoginInputs();
  const { registerInputs, handleRegisterChange, handleRegisterSubmit } =
    useRegisterFormInputs();

  return (
    <>
      <ToastContainer />
      <section className="login-section">
        <div className="login-container">
          <div className="login-message">
            <img src={leon} alt="Leon from Resident Evil 2" />
            <div>
              <h1>
                Join Our
                <span />
                Community.
              </h1>
              <p>
                Store your games in progress
                <span />
                or completed ones and share
                <span />
                with other users.
              </p>
            </div>
          </div>
          <div className="login-form">
            <h1>
              Hello!
              <span />
              Welcome Back.
            </h1>
            <form onSubmit={handleSubmit}>
              <TextInput
                placeholder="Ex.: luciano@gmail.com"
                labelText="Email"
                inputType="email"
                inputName="username"
                forId="email"
                inputValue={formInputs.username}
                onChange={handleChange}
              />
              <PasswordInput
                labelText="Password"
                inputName="password"
                forPassword="password"
                inputValue={formInputs.password}
                onChange={handleChange}
              />
              <div className="sign-in-button">
                <Button size="lg" type="submit" variant="light">
                  Sign In
                </Button>
              </div>
            </form>
            <form>
              <p>
                Don't have an account?
                <GlobalModal
                  button={
                    <Button
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                      }}
                      variant="link"
                    >
                      Create Account!
                    </Button>
                  }
                  modalTitle="Create Account."
                  confirmButtonText="Register"
                  onClick={handleRegisterSubmit}
                >
                  <TextInput
                    placeholder="Ex.: Luciano da Silva"
                    labelText="Name*"
                    inputName="name"
                    forId="name"
                    inputValue={registerInputs.name}
                    onChange={handleRegisterChange}
                  />
                  <TextInput
                    placeholder="Your image url (png, jpg or jpeg)"
                    labelText="Image"
                    inputName="image"
                    forId="image"
                    inputValue={registerInputs.image}
                    onChange={handleRegisterChange}
                  />
                  <TextInput
                    placeholder="Ex.: luciano@gmail.com"
                    labelText="Email*"
                    inputType="email"
                    inputName="email"
                    forId="email"
                    inputValue={registerInputs.email}
                    onChange={handleRegisterChange}
                  />
                  <PasswordInput
                    labelText="Password*"
                    inputName="password"
                    forPassword="password"
                    inputValue={registerInputs.password}
                    onChange={handleRegisterChange}
                  />
                </GlobalModal>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
