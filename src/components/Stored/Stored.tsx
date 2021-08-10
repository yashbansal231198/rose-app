import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import default_profile from "../../assets/default_profile.png";
import coins from "../../assets/coins.png";
import "./Stored.css";
import AddIcon from '@material-ui/icons/Add';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
type ProfileProps={
    firstName: string,
    lastName: string,
    mail: string,
    location: string,
    department: string
}
type StoredProps = {
    onclick:() => void,
    profile: ProfileProps
}
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
function Stored({profile,onclick}: StoredProps)
{
    const classes = useStyles();
    return (
        <div className="info">
          <div className="info_top">
              <div className="top_left">
               <img src={default_profile}/>
               <div className="name">
               <h2>{profile.firstName}</h2>
               <h2 className="lastname">{profile.lastName}</h2>
               </div>
               <h5>{profile.mail}</h5>
              </div>
          <button onClick={onclick}>
            Edit Profile
          </button>
          </div>
          <Divider/>
          <div className="mystats">
          <div className="mystats_total1">
              <div className="data">
                  <img className="coins3" src={coins}/>
                  <span>0</span>
              </div>
              <h4>Total points earned</h4>
          </div>
          <div className="mystats_week1">
              <div className="data"> 
                  <img className='coins3' src={coins}/>
                  <span>0</span>
              </div>
              <h4>Points Earned this Week</h4>
          </div>
        </div>
          <Divider/>
          <div className="awards">
              <h4>AWARDS</h4>
              <div className="circles">
                 <div className="circle">
                 </div>
                 <div className="circle">
                 </div>
                 <div className="circle">
                 </div>
              </div>
              <h5>Check more ways to earn awards</h5>
          </div>
          <div className="meta_data">
              <h4>PROFILE INFO</h4>
              <div className="department">
                  <h5>Department</h5>
                  <h4>{profile.department}</h4>
              </div>
              <div className="location">
                  <h5>Location</h5>
                  <h4>{profile.location}</h4>
              </div>
              <div className="language">
                  <h5>Preferred Language</h5>
                  <h4>English</h4>
              </div>
          </div>
          <div className="accounts">
              <div className="heading">
              <h4>ACCOUNTS(0)</h4>
              <div className="add">
                <AddIcon fontSize="small"/>
                <h5>Add</h5>
              </div>
              </div>
              <h3>Connect your accounts</h3>
              <h5>Please "Add" to connect your social accounts to complete your profile and earn awards</h5>
          </div>
          <div className="language1">
              <h4>DISPLAY LANGUAGE</h4>
              <h5>Choose your preferred language for headlines, buttons, and other text to personalize your experience on this website</h5>
              <FormControl className={classes.formControl}>
       
        <Select
          native
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option>English</option>
          <option>German</option>
          
        </Select>
      </FormControl>
          </div>
          <button>
            Logout
          </button>
        </div>
    )
}
export default Stored;