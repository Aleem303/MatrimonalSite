import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';
import { Button } from 'react-bootstrap';

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '30px'}}>
            <div className="postImageWrapper">
                <img src={require('../../../blogPostImages/affection-baby-baby-girl-beautiful-377058.jpg')}  alt=""  />           
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Featured</span>
                <h2>Make Marriage Simple</h2>
                <span>posted onJuly 21, 2016 by ISDP Blogging Tips</span>
                <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firm... Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six rapt...</p>

                <Button variant="secondary">Read More</Button>     

            </div>
        </Card>

        <Card style={{marginBottom: '20px'}}>
        <div className="postImageWrapper">
                <img src={require('../../../blogPostImages/affection-baby-baby-girl-beautiful-377058.jpg')}  alt=""  />           
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Featured</span>
                
                <h2>Make Marriage Simple</h2>
                <span>posted onJuly 21, 2016 by ISDP Blogging Tips</span>
                <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firm... Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six rapt...</p>

                <Button variant="secondary">Read More</Button>     

            </div>
        </Card>
    </div>
   )
}
export default RecentPosts