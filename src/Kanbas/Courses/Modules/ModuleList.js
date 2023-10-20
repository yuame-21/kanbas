import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import '../styles.css';
import {FaPlus, FaEllipsisVertical} from 'react-icons/fa6'

function ModuleList() {
    const { courseId } = useParams();
    const modules = db.modules;
    return (
        <div className="d-flex flex-column">

        {/*navigation buttons*/}
            <div className="d-flex mt-3 me-0 justify-content-end">

                <button className="m-1 top-button btn btn-secondary" type="button">View Progress</button>
                <button className="m-1 top-button btn btn-secondary" type="button">Collapse All</button>
                <button className="m-1 top-button btn btn-secondary" type="button">Publish</button>
                <button className="m-1 top-button btn btn-danger" type="button">
                    <FaPlus /> Module
                </button>
                <button className= "m-1 top-button btn btn-secondary"><FaEllipsisVertical/> </button>

            </div>
            <hr/>

    <div>
            {

                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index}  id="wd-mod" className="wd-mod p-2 m-5 ms-0 me-0 list-group-item
                        list-group-item-secondary align-items-center ">
                            <h3
                                 className="text-wrap wd-mod-wrap text-wrap wd-mod-wrap fw-semibold">
                                 {module.name}</h3>
                            <p>{module.description}</p>

                        </li>
                    ))
            }
        </div>
    </div>
    );
}
export default ModuleList;