import React, { useState } from "react";
import { connect } from "react-redux";
import { publicApi } from "../../redux/actions";

const Modal = ({
    setClose,
    categories,
    importances,
    addCategory,
    addTask
}) => {
    const [newTaskData, setNewTaskData] = useState({
        importance: 0,
        category: 1,
        content: '',
    })
    const [addCatModal, setAddCatModal] = useState(false);
    const [newCatValue, setNewCatValue] = useState()

    return (
        <div className="z-10 w-full h-screen flex items-center rtl justify-center bg-black bg-opacity-10 backdrop-blur-lg fixed top-0">
            <div className="w-1/2 bg-black rounded-xl flex flex-col items-center p-6 shadow-lg">
                <div className="w-full ">
                    <div className="w-8 h-8 text-white text-sm rounded-md cursor-pointer flex justify-center items-center  bg-red-500" onClick={setClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 15.044 15.044">
                            <g id="vuesax_linear_card-remove" data-name="vuesax/linear/card-remove" transform="translate(-252.46 -511.461)">
                                <g id="card-remove" transform="translate(253.309 512.31)">
                                    <path id="Vector" d="M0,13.347,13.347,0" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2" />
                                    <path id="Vector-2" data-name="Vector" d="M13.347,13.347,0,0" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="2" />
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <h1 className="text-2xl w-11/12 text-white font-bold mt-4">
                    افزودن تسک جدید
                </h1>
                <div className="flex w-11/12 my-3 justify-between items-center">
                    {
                        addCatModal ?
                            <div className="w-5/6 flex items-center justify-between">
                                <input
                                    className="w-full h-10 px-6 rounded bg-dark text-white outline-none"
                                    placeholder='نام دسته بندی جدید'
                                    value={newCatValue}
                                    onChange={e => setNewCatValue(e.target.value)}
                                />
                                <button
                                    onClick={() => { setAddCatModal(false); setNewCatValue() }}
                                    className="mr-2 w-1/4  bg-red-500 h-10 rounded">
                                    انصراف
                                </button>
                            </div>
                            :
                            <>
                                <select
                                    onChange={e => {
                                        setNewTaskData({ ...newTaskData, importance: parseInt(e.target.value) })
                                    }}
                                    className={`w-1/3 ml-2 h-10 outline-none rounded px-2 shadow-lg bg-${importances.find(itm => itm.id == newTaskData.importance).color} text-white`}>

                                    {
                                        importances.map((importance) => (
                                            <option key={`IMPORTANCE_NO_${importance.id}`} value={importance.id} >{importance.title}</option>
                                        ))
                                    }
                                </select>
                                <select
                                    onChange={e => {
                                        setNewTaskData({ ...newTaskData, category: parseInt(e.target.value) })
                                    }}
                                    className={`w-1/3 mx-2 h-10 outline-none rounded px-2 shadow-lg bg-dark text-white`}>

                                    {
                                        categories.map((category) => (
                                            <option key={`CAT_NO_${category.id}`} value={category.id} >{category.title}</option>
                                        ))
                                    }
                                </select>
                            </>
                    }
                    <button
                        onClick={() => {
                            if (addCatModal) {
                                if (newCatValue) {
                                    addCategory(newCatValue)
                                }
                                setAddCatModal(false)
                                setNewCatValue()

                            }
                            else {
                                setAddCatModal(true)
                            }
                        }}
                        className={`text-black0 text-md rounded shadow-md flex items-center justify-center p-1 h-10 ${addCatModal ? 'w-1/6' : 'w-1/3'} mr-2 bg-green-500`}>
                        {
                            addCatModal ? 'ثبت' : 'افزودن دسته بندی جدید'
                        }
                    </button>

                </div>
                <div className="w-11/12">
                    <input
                        className="w-full h-10 px-6 rounded bg-dark text-white outline-none"
                        placeholder='متن تسک جدید'
                        value={newTaskData.content}
                        onChange={e => setNewTaskData({
                            ...newTaskData,
                            content: e.target.value
                        })}
                    />
                </div>
                <div className="w-11/12 mt-5 flex items-center justify-end">
                        <button 
                        onClick={() => {
                            addTask(newTaskData);
                            setClose()
                        }}
                        className="w-32 h-10 bg-green-500 text-sm rounded">
                            افزودن تسک
                        </button>
                </div>

            </div>
        </div>
    )
};
const mapStateToProps = (state) => ({
    categories: state.publicApi.categories,
    importances: state.publicApi.importances
});
const mapDispatchToProps = {
    addCategory: publicApi.addCategory,
    addTask: publicApi.addTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)