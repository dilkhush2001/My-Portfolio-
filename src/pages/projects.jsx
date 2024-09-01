import { useEffect, useState } from "react";
import styles from "../css/projects.module.css";
import axios from "axios";

const Projects = () => {
    const [DataList, setDataList] = useState('')
    useEffect(() => {
        axios.get("http://localhost:3000/projectData/").then((res) => {
            setDataList(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    // console.log(DataList)
    return (
        <div className={styles.parent}>
            <div className={styles.heading}>
                <h1>Projects</h1>
                <p>"Showcasing a range of innovative projects that highlight my front-end development skills and problem-solving abilities using modern technologies."</p>
            </div>
            <div className={styles.cards}>
                {DataList && DataList.map((ele)=>{
                    return(
                        <div className={styles.card} key={ele.id}>
                            <div className={styles.cardimage}> <img src={ele.bg}/></div>
                            <div className={styles.cardcontent}>
                                <div className={styles.cardtext}>
                                    <h5>{ele.tittle}</h5>
                                    <p>{ele.text}</p>
                                </div>
                                <div className={styles.cardtools}>
                                    {ele.tools && ele.tools.map((e)=>{
                                        return(
                                            <div>{e}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;