import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoin } from '../features/bıt';
import './Page.css'
const Page = () => {
  const dispatch = useDispatch();
  const { bitcoinAr, loading, error } = useSelector((state) => state.bit);

  useEffect(() => {
    dispatch(fetchCoin());

    const intervalId = setInterval(() => {
      dispatch(fetchCoin());
    }, 10000);


    return () => clearInterval(intervalId);

  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="title">Bitcoin Price (USD)</h1>
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      {bitcoinAr && <p className="price">Price: ${bitcoinAr}</p>}
    </div>
  );
};

export default Page;
