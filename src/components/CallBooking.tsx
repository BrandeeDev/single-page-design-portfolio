
const CallBooking=()=>{
    return(

            <div className="w-full  bg-[#030303] grow rounded-[10px] flex flex-col justify-center items-center py-[49px]
             font-plus_jakarta_s font-medium text-base leading-[26px] text-center sm:pt-[56px] sm:pb-[64px] lg:flex-row lg:justify-between lg:py-[80px] lg:pl-[65px] lg:pr-[95px] ">
                <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:text-left">
                    <h3 className="text-[#FFF7F0] sm:text-[32px] sm:leading-[40px] lg:text-[40px] lg:leading-[50px]">Book a call with me</h3>
                    <p className=" w-[295px] sm:w-[540px] mt-6 sm:mt-[26px] text-[#FFF7F0] sm-text-lg sm:leading-7" >I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</p>

                </div>
                <button className="font-plus_jakarta_s font-bold text-sm leading-7 mt-6 sm:mt-[26px] w-[176px] h-[44px] sm:w-[228px] sm:h-[56px] flex justify-center items-center  text-center text-[#FFF7F0] bg-[#EB7565] rounded-[28px] sm:text-base sm:leading-7 hover:bg-[#F6A560]">Free Consultation</button>

            </div>
    );
};
export  default  CallBooking;