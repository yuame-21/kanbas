import { Link } from "react-router-dom";
import db from "../Database";
import {FaPen} from "react-icons/fa6";
import './styles.css';

function Dashboard() {
    const courses = db.courses;
    return (
        <div className="pd-0 d-flex flex-column">
            <div>
                <h1>Dashboard</h1>
                <hr/>
            </div>
            <div className="wd-margin-left">
            <div>
                <h2 id="wd-sub">Published Courses ({courses.length})</h2>
                <hr/>
            </div>
            <div className="container gx-0 d-flex flex-row flex-wrap">
            <div className="row">
                {courses.map((course) => (

                    <div className="card wd-flex-card">
                        <img className="wd-card-img-top" src="../../Images/bluesquare.jpeg"
                             alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link key={course.id} to={`/Kanbas/Courses/${course.id}`} >
                                    {course.name}
                                </Link>
                                </h5>
                                <p className="card-text">
                                    {course.number}
                                    <div className="wd-small-text">{course.startDate} to {course.endDate}</div>
                                    <FaPen /></p>
                            </div>
                    </div>

                    ))}
                </div>
            </div>
            </div>
        </div>
    );
}
export default Dashboard;