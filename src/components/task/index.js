import React, { useState } from "react";
import { connect } from "react-redux";

//assets
import folderIcon from '../../assets/img/folder.svg';
import { publicApi } from "../../redux/actions";

const Task = ({task, categories, importances, deleteTask}) => {
    let {importance, content, category} = task;
    const [deleteHover, setDeleteHover] = useState(false)
    return(
        <div className="w-11/12 bg-white rounded flex flex-col p-3 my-2">
            <div className="w-full flex justify-between items-center rtl">
            <div className="flex items-center">
                <img src={folderIcon} className="w-3 ml-1" />
            <p className="text-xs">
                    {categories.find(itm => itm.id == category).title}
                </p>
            </div>
                <p 
                onMouseOver={() => setDeleteHover(true)}
                onMouseLeave={() => setDeleteHover(false)}
                onClick={() => {
                    deleteTask({
                        id: task.id,
                        pId: task.pid
                    })
                }}
                className={`h-5 w-5 flex items-center text-xs p-1 text-white justify-center rounded-full cursor-pointer bg-${deleteHover ? 'red-500' : importances.find(itm => itm.id == importance)?.color}`}>
                    {deleteHover && "X"}
                </p>
            </div>
            <h1 className="w-full text-right pt-2 text-lg  ">
                    {content}
            </h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    categories: state.publicApi.categories,
    importances: state.publicApi.importances,
})
const mapDispatchToProps = {
    deleteTask: publicApi.deleteTask,
}
export default connect(mapStateToProps, mapDispatchToProps)(Task);

