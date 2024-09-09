//props stand for the properties
//they r some properties that we may want to pass to our react components which it could use
//lets say i want to display some names

//then i need to pass that value in that

//REMEMBER: the component that has props u need to mention props, when u call it in App.jsx u need to pass in App.jsx

export function SinglePropCard(props) {//means this function can receive some passed props
//here i will use name and desc as props

    return (
        <>


            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Name: {props.name}</div>
                    <p className="text-gray-700 text-base">
                        Character: {props.desc}
                    </p>
                </div>
               
            </div>










        </>
    )
}


//suppose u wanna pass many such cards from an arr of cars
// The component that receives props and displays a list of items
export function MultiplePropCard({ arr }) { // Destructuring `arr` from props
    //default value could be passed like this ({arr=[]})

    return (
        <div className="flex flex-wrap gap-4 bg-gray-300 justify-center">
            {arr.map((item, index) => (
                <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Name: {item.name}</div>
                        <p className="text-gray-700 text-base">
                            Character: {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

