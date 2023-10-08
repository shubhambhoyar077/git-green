import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import IndexLayout from './pages/IndexLayout';
import Repository from './pages/Repository';
import GitProfile from './pages/GitProfilr';
import Commits from './pages/Commits';
import ScheduleCommit from './pages/ScheduleCommit';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgetPassword from './pages/ForgetPassword';
import ConfirmationMail from './pages/ConfirmationMail';
import ConfirmationPage from './pages/ConfirmationPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<IndexLayout />}>
      <Route index element={<Home />} />
      <Route path="gitprofile" element={<GitProfile />} />
      <Route path="repository" element={<Repository />} />
      <Route path="commit" element={<Commits />} />
      <Route path="schdulecommit" element={<ScheduleCommit />} />
      <Route path="sign_up" element={<SignUp />} />
      <Route path="sign_in" element={<SignIn />} />
      <Route path="forget_password" element={<ForgetPassword />} />
      <Route path="confirmation_mail" element={<ConfirmationMail />} />
      <Route path="confirmation_page" element={<ConfirmationPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
