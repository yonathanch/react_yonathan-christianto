import React from 'react';

const RandomNumber = () => {
  const buttonRandom = () => {
    const randomNum = Math.floor(Math.random() * 300);
    alert(`Random Number : ${randomNum}`);
  };

  return (
    <div className="container"> 
      <button type="submit" className="btn btn-success " onClick={buttonRandom}>Random Number</button>
    </div>
  );
};

export default RandomNumber