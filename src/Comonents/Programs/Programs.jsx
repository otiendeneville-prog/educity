import React from "react";
import "../Programs/programs.css";
import program1 from "../../assets/program1.jpg";
import program2 from "../../assets/program2.jpg";
import program3 from "../../assets/program3.jpg";
import program4 from "../../assets/program4.jpg";

const Programs = () => {
    const programsArray = [program1, program2, program3, program4];
    return (
        <div id="program" className="program">
            {programsArray.map((program) => (
                <img className="program_img" key={program.id} src={program} />
            ))}
        </div>
    );
};
export default Programs;
