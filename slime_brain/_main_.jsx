import { SplineDark, SplineLight } from "./spline";


export default function Spline() {

    return <div className="w-full md:w-1/2 flex justify-center items-center relative t">
        <div className="flex flex-col items-center relative transform -translate-y-10 translate-x-10">
            <SplineDark/>
            <SplineLight/>
            <div className="absolute bottom-6 right-4 w-[120px] h-[40px] md:w-[180px] rounded-2xl z-20 translate-x-[20%] translate-y-[20%] flex items-center justify-center bg-white dark:bg-card/80 backdrop-blur-lg">
                Cerebrum.ai
            </div>
        </div>
    </div>;
}