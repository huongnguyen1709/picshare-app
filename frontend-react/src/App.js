import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Login } from './components';
import Home from './container/Home';

const App = () => {
  return (
    <GoogleOAuthProvider
      clientId={process.env.REACT_APP_PUBLIC_GOOGLE_API_TOKEN}
    >
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
};

export default App;
