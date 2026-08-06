import { Outlet } from "react-router";
import { useParams } from "react-router";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
import DefaultProfile from "./DefaultProfile";

const Profile = () => {
    const { name } = useParams(); 
    return(
        <>
        <div>
            <h1>Hello, from Profile</h1>
            <p>So, how are you?</p>
            <hr />
            <h2>Profile Visited: </h2>
            {name === 'popeye' ? (<Popeye />) :
            name === 'spinach' ? (<Spinach />) :
            (<DefaultProfile />)}
        </div>
        </>
    );
};
export default Profile;