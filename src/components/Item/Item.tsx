import {ItemProps} from '../../App';
import sprinklr from "../../assets/sprinklr.png";
import logo from "../../assets/logo.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ForwardIcon from '@material-ui/icons/Forward';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import './Item.css';
function Item({ item} :{ item : ItemProps} ) {

    const formatDate = (s: string) => new Date(s).toLocaleDateString(undefined);
    return (
      <div className="item">
        {item.urlToImage &&
          <img className="thumbnail"
            alt=''
            src={item.urlToImage}
          />
        }
        {!item.urlToImage &&
          <img className="thumbnail"
            src={sprinklr}
          />
        }
        <h2 className="title">
          <a href={item.url}>{item.title}</a>
        </h2>
        <div className="meta">
          <span>{formatDate(item.publishedAt)}</span>
        </div>
        <p className="description">
          {item.description}
        </p>
        
         <div className="bottom">
         <div className="bottom_left">
           <div className="social_media">
             <img className="social_icons"src={twitter}/>
             <img className="social_icons"src={logo}/>
             <img className="social_icons"src={linkedin}/>
           </div>
           <div className="status">
             Not shared yet
           </div>
         </div>
         
          <button className="share">Share</button>
        
       </div>
       <div className="likes">
         <div className="likes_left">
       <FavoriteIcon/>
       <span>23</span>
       <ChatBubbleIcon/>
       <span>7</span>
       </div>
       <div className="likes_right">
         <BookmarkIcon/>
         <ForwardIcon/>
         <span>59 </span>
       </div>
      </div>
      </div>
    );
  }

  export default Item;