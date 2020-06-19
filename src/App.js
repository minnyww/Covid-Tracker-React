import React, { useEffect, useState } from 'react';
import { getGlobalCase } from './api/index';
import styled, { createGlobalStyle } from 'styled-components';
import { HandLoading } from './Components/Loading';

const GlobalStyle = createGlobalStyle`
  body {
   background: #6363e2;
  }
`;

const CardList = React.lazy(() => import('./Components/CardList'));

const Container = styled.div`
   margin: 18px;
`;

function App() {
   const [globalCase, setGlobalCase] = useState([]);

   useEffect(() => {
      fetchData();
   }, []);

   async function fetchData() {
      const data = await getGlobalCase();
      delete data['lastUpdate'];
      setGlobalCase(data);
   }

   return (
      <React.Fragment>
         <GlobalStyle />
         <Container>
            <React.Suspense fallback={<HandLoading />}>
               {Object.keys(globalCase).map((value) => (
                  <CardList value={value} key={value} globalCase={globalCase} />
               ))}
            </React.Suspense>
         </Container>
      </React.Fragment>
   );
}

export default App;
