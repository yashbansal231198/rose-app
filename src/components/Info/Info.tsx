import React, {useState} from "react";
import "./Info.css";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import default_profile from "../../assets/default_profile.png";
import Stored from "../../components/Stored/Stored";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

  const locations = [
    {
        value:"Amsterdam, Netherlands"
    },
    {
      value: "Austin, TX",
      
    },
    {
      value: 'Chicago, IL',
      
    },
    {
      value: 'Bangalore, India',
      
    },
    {
        value: 'Dubai, UAE',
        
      },
      {
        value: 'Gurgaon, India',
        
      },
      {
        value: 'NYC, HQ',
        
      },

  ];
  const departments = [
    {
        value:"Marketing"
    },
    {
      value: "IT",
      
    },
    {
      value: 'Culture and Talent',
      
    },
    {
      value: 'Engineering',
      
    },
    {
        value: 'Finance',
        
      },
      {
        value: 'Sales',
        
      },
      {
        value: 'Others',
        
      },

  ];
function Info()
{   

    const [open,setOpen] = React.useState(false);
    const [profile, setProfile] = React.useState({
        firstName: "Yash",
        lastName: "Bansal",
        mail:"yash.bansal@sprinklr.com",
        location:"Gurgaon, India",
        department:"Engineering"
    })
    let handleChange=(e: React.ChangeEvent) =>
    {   
        let cur= e.target.id;
        console.log(e.target);
        setProfile({
     ...profile, [cur]: (e.target as HTMLInputElement).value
        });
    }
    let handleChange1=(e: React.ChangeEvent) =>
    {   
        let cur= (e.target as HTMLInputElement).name;
        setProfile({
     ...profile, [cur]: (e.target as HTMLInputElement).value
        });
    }
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    return(
        <div className="main">
        <h2>Profile</h2>
      <Stored profile={profile} onclick={handleClickOpen}/>
     
      <Dialog
        open={open}
        scroll="body"
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
            <div className="title">
               <CloseIcon/>
               <h4>Edit Profile</h4>
          <button className="save" onClick={handleClose}>
            Save
          </button>
            </div>
            </DialogTitle>
            <Divider/>
        <DialogContent>
          <div className="dialog_content">
              <img src={default_profile}/>
              <h5>Hurray! You have completed all the steps</h5>
              <div className="bar">
                  
              </div>
          </div>
        </DialogContent>
        <DialogActions>
        <TextField
            autoFocus
            margin="normal"
            id="firstName"
            label="First Name"
            fullWidth
            onChange={handleChange}
            value={profile.firstName}
            InputLabelProps={{
                shrink: true,
              }}
          />
          </DialogActions>
           <DialogActions>
          <TextField
            
            margin="normal"
            id="lastName"
            label="Last Name"
            fullWidth
            onChange={handleChange}
            value={profile.lastName}
            InputLabelProps={{
                shrink: true,
              }}
          />
          </DialogActions>
          <DialogActions>
          <TextField
            
            margin="normal"
            id="mail"
            label="Sprinklr email address"
            fullWidth
            value={profile.mail}
            onChange={handleChange}
            InputLabelProps={{
                shrink: true,
              }}
          />
           
        </DialogActions>
        <DialogActions>
        <TextField
         margin="normal"
          id="location"
          select
          label="Location"
          fullWidth
          name="location"
          value={profile.location}
          onChange={handleChange1}
        >
          {locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
          
          </DialogActions>
           <DialogActions>
           <TextField
            margin="normal"
          id="department"
          select
          label="Department"
          fullWidth
          name="department"
          value={profile.department}
          onChange={handleChange1}
        >
          {departments.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
          
          </DialogActions>

      </Dialog>
     
      </div>
    );
}

export default Info;