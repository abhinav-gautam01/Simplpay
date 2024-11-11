import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom"


export const Profile = () => {
  
 
    return <>
    <div className="pt-4">
          <Button onClick={async () => {
            const response = await axios.get("http://localhost:3000/api/v1/user/profile", {
                headers: {
                  Authorization: `Bearer ${token}`, // Send the token in Authorization header
                },
              });
            //   console.log(response);
           

            // to delte the item
            // localStorage.removeItem(key);

           
          }}   />
        </div></>
}