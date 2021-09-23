import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = "http://localhost:8084/auth/api/v1/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "authenticate", {"userName":
        username,
        "password":password
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data.token));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  loggedIn(){
    return axios.post(API_URL+'authorize',null,{ headers: authHeader() }).then((response)=>{return response.data});
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();