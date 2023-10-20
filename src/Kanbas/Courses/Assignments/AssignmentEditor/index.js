import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import {FaEllipsisVertical, FaCircleCheck} from "react-icons/fa6";
import '../styles.css'

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };

    return (
        <div className="col">
            <div className="row">
                <div>
                    <button className="btn btn-secondary float-end m-2">
                        <FaEllipsisVertical />
                    </button>
                <span className="wd-pub float-end">
                    <FaCircleCheck className="m-2" style={{"color": "forestgreen"}} />Published</span>

                </div>
            </div>
            <hr/>
            <div className="row">
            <h3 className="p-0">Assignment Name</h3>
            <input value={assignment.title}
                   className="form-control mb-2" />
            <div>

            <button onClick={handleSave} className="btn btn-danger m-1 float-end">
                Save
            </button>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                      className="btn btn-secondary m-1 float-end">
                    Cancel
                </Link>
            </div>
            </div>
        </div>
    );
}


export default AssignmentEditor;