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
