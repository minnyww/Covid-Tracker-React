import React from 'react';
import * as handLoading from '../loading/hand-loading.json';
import Lottie from 'react-lottie';

const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData: handLoading.default,
   rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
   },
};

export const HandLoading = () => {
   return (
      <Lottie
         options={defaultOptions}
         height={140}
         width={140}
         style={{
            position: 'absolute',
            margin: 'auto',
            left: '0px',
            right: '0px',
            top: '0px',
            bottom: '0px',
         }}
      />
   );
};
