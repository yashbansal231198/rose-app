import React from "react";
import ryan from "../../assets/ryan.jpeg";
import joel from "../../assets/joel.jpeg";
import vansh from "../../assets/vansh.jpeg";
import _2nd from "../../assets/2nd.png";
import _3rd from "../../assets/3rd.png";
import crown from "../../assets/crown.png";
import stars1 from "../../assets/stars1.png";
import stars2 from "../../assets/stars2.png";
import stars3 from "../../assets/stars3.png";
import coins from "../../assets/coins.png";
import default_profile from "../../assets/default_profile.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";
import profile4 from "../../assets/profile4.png";
import profile5 from "../../assets/profile5.png";
import {List, AutoSizer} from "react-virtualized";
import Divider from '@material-ui/core/Divider';
let func=(index : number) => 
    {
        if(index%5==0)
        return `${default_profile}`;
        if(index%5==1)
        return `${profile2}`;
        if(index%5==2)
        return `${profile3}`;
        if(index%5==3)
        return `${profile4}`;
        if(index%5==4)
        return `${profile5}`;
    }
    let func2=(index : number) => 
    {
        if(index%5==0)
        return "Sarthak Saxena";
        if(index%5==1)
        return "Rachit Pathak";
        if(index%5==2)
        return "Aayush Vashist";
        if(index%5==3)
        return "Archana Linson"
        if(index%5==4)
        return "Rishabh Mittal";
    }
function RankList()
{   
    return(
    <div className="leaderboard_middle">
            <h2>Members</h2>
             
            <div className="points_list">
            <div className="featured">
                 <div className="leader1">
                <img className="position" src={_2nd}/>
                 <img className="featured1" src={ryan}/>
                 <div className="box">
                 <img className="star" src={stars1}/>
                 <span> 35</span>
                 </div>
                 <h5>Ryan Parr</h5>
                 <h6>Portland,OR</h6>
                 </div>
                 <div className="leader2">
                <img className="position1" src={crown}/>
                 <img className="featured2" src={joel}/>
                 <div className="box">
                 <img className="star" src={stars1}/>
                 <span>90</span>
                 </div>
                 <h5>Joel Lindheimer</h5>
                 <h6>San Fransisco, CA</h6>
                 </div>
                 <div className="leader1">
                <img className="position" src={_3rd}/>
                 <img className="featured1" src={vansh}/>
                 <div className="box">
                 <img className="star" src={stars1}/>
                 <span>30</span>
                 </div>
                 <h5>Vansh Batra</h5>
                 <h6>Gurgaon, India</h6>
                 </div>
             </div>
             <h5>HIGH ACHIEVERS</h5>
             <div style={{ width: "100%", height: "10000px" }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={100}
              rowCount={1000}
              rowRenderer={({ key, index, style, parent }) => {
                

                return (
                  <div>
                <div className="row">
                <h3>{index+4}</h3>
                <img className="profile" src={func(index)}/>
                <div className="meta">
                    <h5>{func2(index)}</h5>
                    <h6>Bangalore, India</h6>
                </div>
                <div className="row_right">
                  <img src={coins} className="coins"/>
                  <span>{(20-index)>0 ? (20-index) : 3}</span>
                </div>
              </div> 
               <Divider/>
               </div>
              );
              }}
            />
          )}
        </AutoSizer>
      </div>
            </div>
    </div>
    )
            
}

export default RankList;