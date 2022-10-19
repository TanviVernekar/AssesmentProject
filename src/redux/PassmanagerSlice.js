import {createSlice} from '@reduxjs/toolkit';

const initialState=[{
    sitename: 'Facebook',
    source: require('../assets/images/facebookIcon.png'),
    url: 'www.facebook.com',
    sitepassword:'facebook',
    notes:'Facebook notes',
    username:'tanvi',
    sector:'Social Media'
  },
  {
    sitename: 'Youtube',
    source: require('../assets/images/youtubeIcon.png'),
    url: 'www.youtube.com/ssmraok',
    sitepassword:'Youtube',
    notes:'Youtube notes',
    username:'tanvi',
    
    sector:'Social Media'
  },
  {
    sitename: 'Twitter',
    source: require('../assets/images/twitterIcon.png'),
    url: 'www.twitter.com',
    sitepassword:'Twitter',
    notes:'Twitter notes',
    username:'tanvi',
   
    folder:'Social Media'
  },
  {
    sitename: 'Instagram',
    source: require('../assets/images/instagramIcon.png'),
    url: 'www.instagram.com',
    sitepassword:'Instagram',
    notes:'Instagram notes',
    username:'tanvi',
    
    folder:'Social Media'
  },];

export const PassmanagerSlice = createSlice({
    name:'manager',
    initialState:{
        value:initialState,
    },
    reducers:{
        add:(state,action)=>{
            state.value.push(action.payload);
            console.log("kjfhjvkfhd",action.payload)
        },
    },
});

export const {add} =PassmanagerSlice.actions;

export default PassmanagerSlice.reducer;