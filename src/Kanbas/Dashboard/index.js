import { Link } from "react-router-dom";
import db from "../Database";
import {FaPen} from "react-icons/fa6";
import './styles.css';
import {useState} from 'react';

function Dashboard({ courses, course, setCourse, addNewCourse,
                       deleteCourse, updateCourse }
) {
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
                <div className="m-3 wd-form">
                    <h5>Course</h5>
                    <input value={course.name} className="form-control"
                           onChange={(e) => setCourse({ ...course, name: e.target.value }) } />

                    <input value={course.number} className="form-control"
                           onChange={(e) => setCourse({ ...course, number: e.target.value }) } />

                    <input value={course.startDate} className="form-control" type="date"
                           onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>

                    <input value={course.endDate} className="form-control" type="date"
                           onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

                    <button className="btn btn-success wd-btn"
                    onClick={addNewCourse}>Add</button>
                    <button className="btn btn-primary wd-btn"
                    onClick={updateCourse}>Update</button>
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

                                    <button className="btn btn-warning wd-btn ms-0"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }
                                    }> <FaPen /> Edit</button>

                                    <button className="btn btn-danger wd-btn ms-0"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course.id);
                                    }}>Delete</button>
                                </p>
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