import React from 'react';
import { Card, Typography } from 'antd';
import { useCountUp } from 'react-countup';
import styled from 'styled-components';

const InfoCard = styled(Card)`
   border: none;
   width: 100%;
   border-radius: 10px;
   /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); */

   background: linear-gradient(145deg, #5959cb, #6a6af2);
   box-shadow: 5px 5px 31px #5252bc, -5px -5px 31px #7474ff;

   margin-bottom: 1rem;
`;

const CountValue = styled(Typography.Title)`
   color: #d6d4e2 !important;
`;

const Title = styled(Typography.Title)`
   color: rgba(208, 211, 230, 0.85) !important;
`;

export default ({ value, globalCase }) => {
   const { countUp } = useCountUp({ end: globalCase[value].value });
   return (
      <>
         <InfoCard>
            <Title level={4} strong>
               {value}
            </Title>
            <CountValue level={2} strong style={{ marginTop: '1px' }}>
               {countUp}
            </CountValue>
         </InfoCard>
      </>
   );
};
