import { createBrowserRouter } from 'react-router-dom';
import { AddGame, GameDetails, HomeScreen, LoginScreen, Profile } from '../ui/index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginScreen />,
  },
  {
    path: '/home',
    element: <HomeScreen />,
  },
  {
    path: '/add-game',
    element: <AddGame />,
  },
  {
    path: '/game-details/:appId',
    element: <GameDetails />,
  },
  {
    path: "/profile",
    element: <Profile/>,
  }
]);
