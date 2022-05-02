import React, { useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import Task from './components/task';
import { publicApi } from './redux/actions';

const Board = ({board, loadData, tasks, changeCol}) => {
    useEffect(() => {
        if(localStorage.getItem('BoardData')){
            loadData()
        }
    }, [])

    const dragEndHandler = (result) => {
        console.log(result)
        if(result.destination !== result.source){
            changeCol({
                id: parseInt(result.draggableId),
                des: result.destination.droppableId
            })
        }
    };
    const dragStartHandler = (result) => {
        console.log(result)

    }
 return (
     <DragDropContext
     onDragStart={result => dragStartHandler(result)}
     onDragEnd={result => dragEndHandler(result)}
     >
     <div className='bg-black h-screen flex justify-between items-center px-2'>
          {
              board.map((col) => (
                  <Droppable droppableId={`${col.title}`}>
               {
                   (provided) => (
                       
                    <div className='h-4/5 mx-2 bg-green-500 bg w-1/5 flex flex-col items-center'>
                    <div className='w-full text-xl py-4 border-b-2 border-black '>{col.title}</div>
                    {provided.placeholder}
                    <div className='w-full flex flex-col items-center' {...provided.droppableProps} ref={provided.innerRef}>
                    {
                        tasks.filter(itm => itm.pid == col.id).map((task, index) => (
                            <Draggable draggableId={`${task.id}`} index={index} >
                                {
                                    (provided) => (
                                        <div className='w-full flex items-center justify-center'  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                <Task task={task} />
                                        </div>
                                    )
                                }
                            </Draggable>
                        ))
                    }
                    </div>
                </div>
                   )
               }
            </Droppable>
              ))
          }
     </div>
     </DragDropContext>
 )
};
const mapStateToProps = (state) => ({
    board: state.publicApi.board,
    tasks: state.publicApi.tasks,
});

const mapDispatchToProps = {
    loadData: publicApi.loadData,
    changeCol: publicApi.changeCol,
}
export default connect(mapStateToProps, mapDispatchToProps)(Board)