import { useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/dashboard");
    }

    return (
        <>
           <h1>Welcome to Rick & Morty API</h1>
           <button onClick={handleClick}> 
              Get Started
            </button>
        </>
    )
}

export default Home;