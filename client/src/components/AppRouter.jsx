import React from 'react';
import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Context } from '../index';
import { authRouter, publicRouter } from '../router';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
  const {user} = useContext(Context);
  return (
    <Routes>
      {user.isAuth &&
        authRouter.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

      {publicRouter.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
