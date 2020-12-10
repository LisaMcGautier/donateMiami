import axios from "axios";

export default {
  logIn:function(email,password) {
    return axios.post("/api/auth/login",{email,password});
  },
  verifyAuthentication:function() {
    return axios.get("/api/auth/login",{
      headers: {
        Authorization:localStorage.getItem("authorization-token")
      }
    })
  },

  signUp : function(userData) {
    return axios.post("/api/account", userData);
  },

  getNonProfits: function() {
    return axios.get("/api/nonProfits");
  },


  // addFavorite: function(id) {
  //   return axios.put("/api/nonProfits/:id");
  // },
  // push id into favorites array ??

  // deleteFavorite: function(id) {
  //   return axios.get("/api/nonProfits/:id");
  // }
  // filter nonProfits where id !=id



  saveTransaction: function(donationData) {
    return axios.post("/api/transaction", donationData);
  },

  getTransactions: function() {
    return axios.get("/api/transaction");
  },

  saveTime: function(volunteerData) {
    return axios.post("/api/time", volunteerData);
  }, 

  getTimes: function() {
    return axios.get("/api/time");
  },
  
};

