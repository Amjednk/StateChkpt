import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
function Profile(props){
    return(
        <div >
        <h3>{props.fullName} - {props.profession} </h3>
        <h5 style = {{color: "skyblue"}}>{props.bio}</h5>
        <Button variant="primary"  onClick={props.HN}>User Check</Button> 
        </div>  
    );
};
Profile.propTypes = {fullName: PropTypes.string, profession: PropTypes.string, bio: PropTypes.string }; 
Profile.defaultProps = {fullName : "Guest" , bio : "Unknown" , profession : "Unknown"};
export default Profile;