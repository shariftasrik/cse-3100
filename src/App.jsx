import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout';
import Home from './views/Home';
import AvailableCats from './views/AvailableCats';
import ContactUs from '../pages/ContactUs';
import AboutUs from '../pages/AboutUs';
import Donate from '../pages/Donate';

function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >

        <Route path={'/'} element={<Home />} />
        <Route path={'/available-cats'} element={<AvailableCats />} />
        <Route path={'/about-us'} element={<AboutUs />} />
        <Route path={'/contact-us'} element={<ContactUs />} />
        <Route path={'/donate'} element={<Donate />} />
      </Route>
    </Routes>
  );
}

export default App;
