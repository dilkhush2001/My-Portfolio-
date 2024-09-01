import { useEffect, useState } from 'react';
import '../css/skills.css';
import axios from 'axios';

const Skills = () => {
    const [Skill, setSkill] = useState([]);
    const [showAddSkill, setShowAddSkill] = useState(false);
    const [formData, setFormData] = useState({
        heading: "",
        skills: [
            { title: "none", progress: "" },
            { title: "none", progress: "" },
            { title: "none", progress: "" },
            { title: "none", progress: "" },
            { title: "none", progress: "" },
        ],
    });

    useEffect(() => {
        axios.get('http://localhost:3000/Skillspage')
            .then(output => {
                setSkill(output.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleSkillChange = (index, field, value) => {
        const updatedSkills = [...formData.skills];
        updatedSkills[index][field] = value;
        setFormData({ ...formData, skills: updatedSkills });
    };

    const Updatejson=()=>{
        axios.post('http://localhost:3000/Skillspage',formData).then((res)=>{
            console.log(res.data)
            setShowAddSkill(false)
            window.location.reload()
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className='skill_cards'>
            <div className='skill_text'>
                <h1>Skills & Languages</h1>
                <div>Skilled in a variety of programming languages and technologies, with a strong ability to adapt and solve complex problems efficiently.</div>
            </div>
            <div className='skill_allcards'>
                {Skill.map((sub, index) => (
                    <div key={index} className='cardparent'>
                        <div className='skill_card'>
                            <div className='cardtitle'>{sub.heading}</div>
                            <div className='cardbody'>
                                {sub.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} style={{display:`${skill.title}`}}>
                                        <div className='cardtext'>
                                            <div>{skill.title}</div>
                                            <div>{skill.progress}</div>
                                        </div>
                                        <div className='rangeparent'>
                                            <div style={{ width: `${skill.progress}%` }} className='rangechild'></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='btndiv'>
                <button onClick={() => setShowAddSkill(true)}>ADD SKILL</button>
            </div>
            {showAddSkill &&
                <div className='addskill'>
                    <div className='addskillparent'>
                        <div className='addskillhead'>Add Skill</div>
                        <div className='domain'>
                            <div className='domaintext'>Domain</div>
                            <input
                                type="text"
                                value={formData.heading}
                                onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
                            />
                        </div>
                        <div className='skillsinputs'>
                            <div className='skillsinputhead'>Skills</div>
                            <div className='skillslable'>
                                <div>Skill</div>
                                <div>Proficiency (%)</div>
                            </div>
                            <div className='inputs'>
                                {formData.skills.map((skill, index) => (
                                    <div key={index}>
                                        <input
                                            type="text"
                                            className='input1'
                                            value={skill.title}
                                            onChange={(e) => handleSkillChange(index, 'title', e.target.value)}
                                        />
                                        <input
                                            type="text"
                                            className='input2'
                                            value={skill.progress}
                                            onChange={(e) => handleSkillChange(index, 'progress', e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='addskillbtns'>
                            <div className='addskillbtn'>
                                <button className='addskillbbtn1' onClick={()=>{Updatejson()}}>ADD SKILL</button>
                            </div>
                            <div className='addskillbbtn2' onClick={() => setShowAddSkill(false)}>CANCEL</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Skills;
