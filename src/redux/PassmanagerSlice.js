import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    sitename: 'Facebook',
    source: require('../assets/images/facebookIcon.png'),
    url: 'www.facebook.com',
    sitepassword: 'facebook',
    notes: 'Facebook notes',
    username: 'tanvi',
    sector: 'Social Media',
  },
  {
    id: 2,
    sitename: 'Youtube',
    source: require('../assets/images/youtubeIcon.png'),
    url: 'www.youtube.com/ssmraok',
    sitepassword: 'Youtube',
    notes: 'Youtube notes',
    username: 'tanvi',
    sector: 'Social Media',
  },
  {
    id: 3,
    sitename: 'Twitter',
    source: require('../assets/images/twitterIcon.png'),
    url: 'www.twitter.com',
    sitepassword: 'Twitter',
    notes: 'Twitter notes',
    username: 'tanvi',
    sector: 'Social Media',
  },
  {
    id: 4,
    sitename: 'Instagram',
    source: require('../assets/images/instagramIcon.png'),
    url: 'www.instagram.com',
    sitepassword: 'Instagram',
    notes: 'Instagram notes',
    username: 'tanvi',
    sector: 'Social Media',
  },
];

export const PassmanagerSlice = createSlice({
  name: 'manager',
  initialState: {
    value: initialState,
    filterValue: initialState,
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
      state.filterValue.push(action.payload);
    },
    edit: (state, action) => {
      state.value.map(sitedata => {
        if (sitedata.id === action.payload.id) {
          console.log(sitedata.id);
          console.log(action.payload.id);
          sitedata.sitename = action.payload.sitename;
          sitedata.url = action.payload.url;
          sitedata.password = action.payload.password;
          sitedata.sector = action.payload.sector;
          sitedata.username = action.payload.username;
          sitedata.notes = action.payload.notes;
        }
      });
    },
    deleteSite :(state,action) => {
      state.value = state.value.filter(value => value.id !== action.payload.id);
    },
    filter: (state, action) => {
      state.value = state.filterValue.filter(site =>
        site.sitename.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
  },
});

export const {add, filter,deleteSite, edit} = PassmanagerSlice.actions;

export default PassmanagerSlice.reducer;
