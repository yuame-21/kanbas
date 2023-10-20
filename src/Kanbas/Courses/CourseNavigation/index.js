import { Link, useParams, useLocation } from "react-router-dom";
import '../styles.css';
import db from "../../Database";

function CourseNavigation() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course.id === courseId);
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
        <ul className="wd-links">

            {links.map((link, index) => (
                <li>
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`wd-active-link ${pathname.includes(link) && "active"}`}>
                    {link}
                </Link>
                </li>
            ))}
        </ul>
    );
}


export default CourseNavigation;