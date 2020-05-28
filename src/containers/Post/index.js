import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation'

const Post = (props) => { 
   return(
    <div>
        <Navigation />
        
        <Layout>
          <BlogPost {...props} />
        </Layout>
   </div>
   );
}
export default Post;