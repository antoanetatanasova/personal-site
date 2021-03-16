import React from 'react';
import RecentArticleComponent from './RecentArticleComponent'
import InterestsComponent from './InterestsComponent'
import AboutComponent from '../AboutComponent';

const HomePageComponent = () => {
    return (
    <>
        <RecentArticleComponent />
        <InterestsComponent />
        <AboutComponent />
    </>
    );
}

export default HomePageComponent;