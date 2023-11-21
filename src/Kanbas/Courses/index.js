import db from "../../Kanbas/Database";
import {Navigate, Route, Routes, useLocation, useParams} from "react-router-dom";
import './styles.css';
import CourseNavigation from "./CourseNavigation";
import Modules from  "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import {FaGlasses} from "react-icons/fa6";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
    const { courseId } = useParams();
    const URL = "http://localhost:4000/api/courses";
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);


    const links = ["Home",
                   "Modules",
                   "Piazza",
                   "Zoom Meetings",
                   "Assignments",
                   "Quizzes",
                   "Grades",
                   "People",
                   "Panopto Video",
                   "Discussions",
                   "Announcements",
                   "Pages",
                   "Files",
                   "Rubrics",
                   "Outcomes",
                   "Collaborations",
                   "Syllabus",
                   "Settings"];
    const { pathname } = useLocation();

    return (
        <div>
            <button className="float-end btn btn-secondary">
                <FaGlasses />      Student View</button>

        <nav className="m-3 mb-0 wd-bread" id="wd-breadcrumb1" style={{ "--bs-breadcrumb-divider": "'>'" }}
             aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">{course.name}</a></li>
                <li className="breadcrumb-item active" aria-current="page">
                    {links.find(link => pathname.includes(link))}</li>
            </ol>
        </nav>
            <hr className="m-1"/>
        <div className="row">
            <div className="col-md-auto">

            <CourseNavigation />
            </div>

                <div className="col-md-auto">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor/>}/>
                        <Route path="Grades" element={<h1>Grades</h1>} />
                    </Routes>
                </div>


        </div>
        </div>
    );
}
export default Courses;