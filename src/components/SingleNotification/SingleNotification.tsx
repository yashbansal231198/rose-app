import "./SingleNotification.css";
import  {ArticleProps} from "../../components/Recent/Recent";
const SingleNotification = ({article}: {article: ArticleProps}) => {
    return (
        <div className="single">
          <img className="single_left"
            src={article.urlToImage}
          />
          <div className="single_right">
        <h2 className="title">
          {article.title}
        </h2>
        <p className="description">
          {article.description}
        </p>
          <span>1 day ago</span>
       
        </div>
        </div>
    )
}

export default SingleNotification;