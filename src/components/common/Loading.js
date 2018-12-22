import React from 'react';
import loading from '../../assets/loading.gif'

const Loading = () => {
  return (
    <img src={loading} className="loading-img mx-auto d-block" alt="loading" style={{width: '220px'}}/>
  );
};

export default Loading;