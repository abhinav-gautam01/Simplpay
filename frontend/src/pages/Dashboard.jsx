import { useEffect } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useState } from "react"
import axios from "axios";

export const Dashboard = () => {
    const [balance, setBalance] = useState(0);
    // const [username, setUsername]= useState("welcome");
    
  
    const getBalance = async () => {
      try {
        // Retrieve the token from localStorage
        const token = localStorage.getItem('token');
        console.log(token);
  
        // Check if token exists
        if (!token) {
          console.error('Token not found');
          return;
        }
  
        // Make API request to retrieve balance
        const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
          headers: {
            Authorization: `Bearer ${token}`, // Send the token in Authorization header
          },
        });
        console.log(response.data.balance)
  
        // Update state with the retrieved balance
        setBalance(response.data.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    const username = localStorage.getItem('firstName');

  
    // Call getBalance when the component mounts
    useEffect(() => {
      getBalance();
    }, [balance]);

    



    



    return <div>
        <Appbar  value={username} letter={username[0].toUpperCase()}/>
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}