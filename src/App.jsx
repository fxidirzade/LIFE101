import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/events" element={<div>Events</div>} />
          <Route
            path="/event/:id"
            element={
              <div>
                <h1>Event</h1>
                <p>Event detail</p>
                <Link to="/">Go back to home</Link>
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div>
                <h1>404</h1>
                <p>Page not found</p>
                <Link to="/">Go back to home</Link>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
