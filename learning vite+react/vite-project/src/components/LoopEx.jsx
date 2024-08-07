import React from 'react'
import { useState } from 'react'

function LoopEx() {
    const [task, settask] = useState(
        [
            { title: "Task1", desc: "This should be done first" },
            { title: "Task2", desc: "This should be done next" },
            { title: "Task3", desc: "This should be done last" },
            { title: "Task4", desc: "This should be done final" },
            { title: "Task5", desc: "This should be done semifinal" },
            { title: "Task6", desc: "This should be done superfinal" },
        ]
    );

    const TaskCard = ({prop}) => {
        return (
            <>
                <div className="card py-4 px-4">

                    <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{prop.title}</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">{prop.desc}</p>
                    </a>

                </div>
            </>
        )
    }


    return (
        <div className='grid grid-cols-3 '>
            {/* loop */}
            {task.map((taskItem) => (//key needs to be given
                <TaskCard key={taskItem.title} prop={taskItem} />
            ))}
        </div>
    )
}

export default LoopEx
