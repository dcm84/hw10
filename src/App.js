import React from 'react';
import ServiceFilter from './features/Services/ServiceFilter';
import ServiceEdit from './features/Services/ServiceEdit';
import ServiceList from './features/Services/ServiceList';

function App() {
  return (
    <>
      <ServiceFilter />
      <ServiceEdit />
      <ServiceList />
    </>
  );
}

export default App;
