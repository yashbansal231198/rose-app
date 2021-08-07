
import './App.css';
import React from 'react';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Navbar from "./components/Navbar/Navbar";
import Item from "./components/Item/Item";
import {List, AutoSizer} from "react-virtualized";
import StarIcon from '@material-ui/icons/Star';
export type ItemProps= {
  urlToImage: string,
  title: string,
  url: string,
  description: string,
  publishedAt: string
}
async function searchNews(q : string ) {
  q = encodeURIComponent(q);
  const response = await fetch(`https://newsapi.org/v2/everything?q=${q}&from=2021-07-07&sortBy=publishedAt&language=en&apiKey=e8f88e032eee479b96b08f42b235a13f`);
  
  const body = await response.json();
  while(body.articles.length%3!=0) {
    body.articles.splice(0,1);
  }
  return body.articles;
}
function App() {
  const [query, setQuery] = React.useState("tesla");
  const [list, setList] = React.useState([]);

  const search = (e : React.FormEvent)  => {
    e.preventDefault();
    searchNews(query).then(res=> setList(res));
  };
  return (
    <div className="app">
      <Navbar/>
      <div className="right">
      <form onSubmit={search}>
        <input
          autoFocus
          value={query}
          placeholder="Search Content"
          onChange={e => setQuery(e.target.value)}
        />
        <button>Search</button>
        
      </form>
      <div className="right_middle">
          <StarIcon/>
          <span>Recommended For you</span>
      </div>
      {!list
        ? null
        : list.length === 0
          ? <p><i>No results</i></p>
          : 
        <div style={{ width: "100%", height: "100vh" }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={450}
              rowCount={500}
              rowRenderer={({ key, index, style, parent }) => {
                

                return (<div className="posts">
                {list.map((item: ItemProps, i : number) => (
                  <Item key={i} item={item} />
                ))}
              </div> );
              }}
            />
          )}
        </AutoSizer>
      </div>
 } </div>
    </div>
  );
}


export default App;
