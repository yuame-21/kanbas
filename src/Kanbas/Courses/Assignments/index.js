import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import './styles.css';
import {FaPlus, FaEllipsisVertical, FaCircleCheck, FaPenToSquare} from "react-icons/fa6";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="d-flex flex-column">
        <div>
             {/*<!-- Assignment buttons -->}*/}
                <div className="float-start p-2 m-2">
                    <input placeholder="Search for Assignments"/>
                </div>
                <div className="float-end p-2 m-2">

                    <button className="m-1 btn btn-secondary"><FaPlus /> Group
                    </button>
                    <button className="m-1 btn btn-danger"><FaPlus />
                         Assignment
                    </button>
                    <button aria-expanded="false" className="btn btn-secondary m-1"
                            type="button">
                        <FaEllipsisVertical />
                    </button>
                </div>

        </div>
            {/*Assignment*/}
            <div className="wd-assignment-mod">
                {/* <!-- Assignment list-->*/}
                <div className="list-group m-2">
                    <li className="wd-a-list p-1 list-group-item list-group-item-secondary align-items-center">
                        <FaEllipsisVertical className="float-start m-2"
                                            style = {{"color": "grey"}}/>
                        <span
                            className="text-wrap wd-mod-wrap text-wrap wd-mod-wrap fw-semibold
                            position-absolute top-50 translate-middle-y">
                    Assignments</span>
                        <FaEllipsisVertical className="float-end m-2"
                                            style = {{"color": "grey"}}/>
                        <FaPlus className="float-end m-2" style = {{"color": "grey"}}/>
                        <div className="p-1 border border-2 border-secondary rounded-5 float-end">
                            40%
                            of Total
                        </div>
                    </li>
                {courseAssignments.map((assignment) => (
                    <li className="wd-border-left p-2 list-group-item align-items-center list-group-item-action">
                        <FaEllipsisVertical className="float-start m-1"
                                            style = {{"color": "grey"}}/>
                        <FaPenToSquare className="m-1" style={{"color": "forestgreen"}}/>
                        <Link
                            className="=p-1 position-absolute top-50 translate-middle-y"
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                        {assignment.title}
                    </Link>
                        <FaEllipsisVertical className="float-end"
                                            style = {{"color": "grey"}}/>
                        <FaCircleCheck className="float-end me-3" style={{"color":"forestgreen"}}/>
                    </li>
                ))}

            </div>
            </div>

        </div>
    );
}
export default Assignments;