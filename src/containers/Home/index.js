import React from 'react';
import './style.css';
import RecentPosts from './RecentPosts';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';

const Home  = props => {
   
    return (
        <div>  
            <Navigation/> 
            <Layout>
                <RecentPosts style={{width: '70%'}}/>
            </Layout>
        </div>
    );
}
export default Home;