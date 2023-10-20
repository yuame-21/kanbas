import ModuleList from "../Modules/ModuleList";
import '../styles.css';
import { FaFileImport, FaCircleChevronRight, FaCrosshairs, FaChartSimple, FaBullhorn, FaRegBell } from 'react-icons/fa6'

const status = [
    { status: 'Import Existing Content', icon: 'FaFileImport' },
    { status: 'Import From Commons', icon: 'FaCircleChevronRight' },
    { status: 'Choose Home Page', icon: 'FaCrosshairs' },
    { status: 'View Course Stream', icon: 'FaChartSimple' },
    { status: 'New Announcement', icon: 'FaBullhorn' },
    { status: 'New Analytics', icon: 'FaChartSimple' },
    { status: 'View Course Notification', icon: 'FaRegBell' }];

function Home() {

    return (
    <div className="row">
            <div className="col">
                <ModuleList />
            </div>
            <div className="col-md-auto mt-3">
                {
                    status.map((status, index) => (
                   <li className="wd-button-list text-left">
                       <button key={index} className="m-0 wd-status p-1 btn btn-secondary">
                           {status.icon === 'FaFileImport' && <FaFileImport className="me-2" />}
                            {status.icon === 'FaCircleChevronRight' && <FaCircleChevronRight className="me-2"/>}
                            {status.icon === 'FaCrosshairs' && <FaCrosshairs className="me-2" />}
                            {status.icon === 'FaChartSimple' && <FaChartSimple className="me-2" />}
                            {status.icon === 'FaBullhorn' && <FaBullhorn className="me-2" />}
                            {status.icon === 'FaRegBell' && <FaRegBell className="me-2" />}

                           {status.status}
                    </button>
                    </li>
                        ))}

                <div>
                    <h3>To Do</h3>
                    <hr/>
                    <ul className="wd-todo p-0">
                        <li>Grade A1 - ENV + HTML
                            <p>100 points</p>
                        </li>
                        <li>Grade A2 - CSS + Boostrap
                            <p>100 points</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Home;

