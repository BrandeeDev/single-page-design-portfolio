import {useState} from "react";
import slide1 from "../assets/image-slide-1.jpg";
import slide2 from "../assets/image-slide-2.jpg";
import slide3 from "../assets/image-slide-3.jpg";
import slide4 from "../assets/image-slide-4.jpg";
import slide5 from "../assets/image-slide-5.jpg";
import left from "../assets/icon-arrow-left.svg";
import right from "../assets/icon-arrow-right.svg";

const slides=[slide1,slide2,slide3,slide4,slide5]
const Work=()=>{
    const increment=(n :number)=>{
        return((n+1)%5);
    }
    const decrement=(n:number)=>{
        return (n-1)<0? 4: --n;
    }
    const[index,setIndex]=useState({previous:4,current:0,next:1});

    const nextHandler=()=>{


            setIndex((prevState:{previous:number,current:number,next:number})=>{
               return {
                   previous: increment(prevState.previous),
                   current: increment(prevState.current),
                   next: increment(prevState.next)
               }
            });

    };
    const previousHandler=()=>{
        setIndex((prevState:{previous:number,current:number,next:number})=>{
            return {
                previous: decrement(prevState.previous),
                current: decrement(prevState.current),
                next: decrement(prevState.next)
            }
        });
    };

    return(
        <div className="flex flex-col justify-center items-center my-[100px] sm:my-[120px] lg:my-[88px] " >
            <h3 className="mt-8 font-plus_jakarta_s font-bold  not-italic text-2xl leading-[30px] text-center text-[#030303] sm:text-[32px] sm:leading-[40px]">My Work</h3>
            <div className="flex flex-row gap-x-[15px] mt-8 sm:mt-[56px] sm:gap-x-[30px]">
                <img src={slides[index.previous] } className=" w-[270px] h-[180px] overflow-visible ml-[-249px] rounded-xl sm:ml-[-495px] sm:w-[540px] sm:h-[360px]"/>
                <img src={slides[index.current]} className=" w-[270px] h-[180px] rounded-xl sm:w-[540px] sm:h-[360px]" />
                <img src={slides[index.next]} className="  w-[270px] h-[180px] overflow-visible mr-[-248px] sm:mr-[-495px] rounded-xl sm:w-[540px] sm:h-[360px]"/>
            </div>
            <div className="flex flex-row justify-between items-center gap-x-4  mt-8 sm:mt-[56px] mx-[115px]">
                <button className=" bg-[#030303] w-[64px] h-[64px] flex justify-center items-center rounded-full hover:bg-[#755CDE] " onClick={previousHandler}>
                    <img src={left}/>
                </button>
                <button className=" bg-[#030303] w-[64px] h-[64px] flex justify-center items-center rounded-full hover:bg-[#755CDE] " onClick={nextHandler}>
                    <img src={right}/>
                </button>

            </div>
        </div>

    );
};
export default  Work;

