import { useParams } from "react-router-dom"


const Profile = () => {

    const params = useParams();
    console.log(params);

    return(
        <>Hey, This is profile of user id {params?.id}</>
    )
}

export default Profile