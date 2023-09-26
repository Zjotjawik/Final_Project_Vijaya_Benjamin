import Axios from 'axios';
import '../styles/Logout.css';
import { useNavigate } from 'react-router-dom';

export function Logout({ setIsLoggedIn }){
  const navigate = useNavigate()

  const handleLogout = () => {
    Axios.delete('http://localhost:3000/auth/logout', {
      withCredentials: true, // Include cookies
    })
      .then((response) => {
        if (response.status === 200) {
          setIsLoggedIn(false); // Set isLoggedIn to false upon successful logout
          navigate("/")
        } else {
          console.error('Logout failed');
        }
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
// export default Logout