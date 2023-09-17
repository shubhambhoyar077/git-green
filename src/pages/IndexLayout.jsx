import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function IndexLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main id="main">
        <Outlet />
      </main>
    </>
  );
}
