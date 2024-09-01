import axios from "axios";

const Test=()=>{
    const Testfunction=async()=>{
        const Getapi = await axios.post('http://localhost:3000/projectData',)
        console.log(Getapi.data)
    }
    return(
        <>
            <button onClick={()=>{Testfunction()}}>Test</button>
        </>
    )
}

export default Test;    