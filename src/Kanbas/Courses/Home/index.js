import ModuleList from "../Modules/ModuleList";
import '../styles.css';

const status = ["Import Existing Content",
                "Import From Commons",
                "Choose Home Page",
                "View Course Stream",
                "New Announcement",
                "New Analytics",
                "View Course Notification"]

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
                        {status}
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

