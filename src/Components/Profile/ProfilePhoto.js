
import myPhoto from "./Myphoto.png";
function ProfilePhoto(props){
        return (
        <div> 
        <img className="myPhotoSize"  src={myPhoto} alt ="Myphoto" />
        {props.children}
        </div>
        )
}

export default ProfilePhoto;
