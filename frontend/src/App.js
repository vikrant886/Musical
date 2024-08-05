import React from 'react';
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom';
import Landing from './component/Landing/Landing';


export default function App() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path='/' element={<Landing />} />
      </RouterRoutes>
    </BrowserRouter>
  )
}