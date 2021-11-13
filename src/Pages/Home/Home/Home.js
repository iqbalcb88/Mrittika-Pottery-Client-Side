import { CircularProgress } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import BestRated from '../BestRated/BestRated';
import Gallery from '../Carousel/Carousel';
import HomeBanner from '../HomeBanner/HomeBanner';
import ImgBtn from '../ImageBtn/ImgBtn';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import UserReview from '../UserReview/UserReview';

const Home = () => {
  const { loading } = useAuth();
  if (loading) {
    return <CircularProgress />;
  }
  return (
    <>
      <Navigation />
      <HomeBanner />
      <ImgBtn />
      <BestRated />
      <Gallery />
      <UserReview />
      <Footer />
    </>
  );
};

export default Home;
