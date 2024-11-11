
import { useNavigate } from "react-router-dom"
export const Appbar = ({value, letter}) => {
    const navigate = useNavigate();
    function changepage(){
        navigate("/profile")

    }
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            SimplPay
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                {value}
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl"  >
                    <button onClick={changepage}> {letter}</button>

                
                   
                </div>
            </div>
        </div>
    </div>
}