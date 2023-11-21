import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import '../styles.css';
import {FaPlus, FaEllipsisVertical} from 'react-icons/fa6'
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import * as client from "./client";
import { findModulesForCourse, createModule } from "./client";

function ModuleList() {
    const { courseId } = useParams();

    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                      dispatch(setModules(modules))
            );
    }, [courseId]);

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };


    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();


    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };


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
        <div className="d-flex flex-row">
                <div className="d-flex flex-column">
                <input className="m-1 mt-0" value={module.name}
                       onChange={(e) =>
                           dispatch(setModule({ ...module, name: e.target.value }))}
                />
                <textarea className="m-1" value={module.description}
                          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                />
                </div>
            <div className="m-3 mt-0">
            <button className="btn btn-success m-1 wd-btn"
                    onClick={handleAddModule}>
                Add</button>
                <button className="btn btn-primary m-1 wd-btn"
                        onClick={() => handleUpdateModule(module.id)}>
                    Update
                </button>

            </div>
        </div>
            {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index}  id="wd-mod" className="wd-mod p-2 m-5 ms-0 me-0 list-group-item
                        list-group-item-secondary align-items-center ">
                            <div className="row justify-content-md-center">
                            <div className="col"><h3
                                 className="text-wrap wd-mod-wrap text-wrap wd-mod-wrap fw-semibold">
                                 {module.name}</h3>
                            <p>{module.description}</p>
                            </div>
                            <div className="col-md-auto">
                                <button className="btn btn-success wd-btn float-end"
                                        onClick={() => dispatch(setModule(module))}>
                                    Edit
                                </button>
                            <button className="btn btn-danger wd-btn float-end"
                                    onClick={() => handleDeleteModule(module.id)}>
                                Delete
                            </button>
                            </div>
                            </div>

                        </li>
                    ))
            }
        </div>
    </div>
    );
}
export default ModuleList;