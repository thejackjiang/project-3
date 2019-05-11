import axios from "../../node_modules/axios";


// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  // getIndieArtistEvents: function() {
  //   return axios.get("http://localhost:3001/api/events/ticketMaster ")    
  // },

  // USERAUTH
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (username, email, password) => {
    return axios.post('api/Signup', {username: username, email: email, password: password});
  }
};

