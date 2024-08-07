import React from 'react'
import { useState } from 'react'

function LoopEx() {
    const [task, settask] = useState(
        [
            { title: "Task1", desc: "This should be done first" },
            { title: "Task2", desc: "This should be done next" },
            { title: "Task3", desc: "This should be done last" }
        ]
    );

    const TaskCard = ({prop}) => {
        return (
            <>
                <div className="card">

                    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prop.title}</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">{prop.desc}</p>
                    </a>

                </div>
            </>
        )
    }


    return (
        <div className='flex py-4 justify-evenly'>
            {/* loop */}
            {task.map((taskItem) => (
                <TaskCard key={taskItem.title} prop={taskItem} />
            ))}
        </div>
    )
}

export default LoopEx
