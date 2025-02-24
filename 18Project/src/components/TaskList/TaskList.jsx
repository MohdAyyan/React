import React from 'react'
import AcceptTask from './AcceptTaskList'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({data}) {
  if (!data?.tasks) {
    return null;
  }

  return (
    <div id='tasklist' className='h-[50%] py-5 w-full mt-10 flex  
    overflow-x-auto
    items-center justify-start gap-4 flex-nowrap '>
         {data.tasks.map((elem) => {
                if (elem.active) {
                    return <AcceptTask key={elem.id} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={elem.id} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={elem.id} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={elem.id} data={elem} />
                }
                return null;
            })}
    </div>
  )
}

export default TaskList