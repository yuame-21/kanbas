import KanbasNavigation from "./KanbasNavigation";

function Kanbas() {
    return (
        <div className="d-flex">
            <div>
                <KanbasNavigation/>
            </div>
            <div>
                <h1>Account</h1>
                <h1>Dashboard</h1>
                <h1>Courses</h1>
            </div>
        </div>
    );
}
export default Kanbas;

