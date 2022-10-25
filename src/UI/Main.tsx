
const Main=(props: any)=>{
    return(
        <main className=" min-h-screen overflow-hidden  px-4  bg-[#FFF7F0] pt-4  sm:px-[39px] sm:pt-[34px] lg:px-[164px]">
                {props.children}
        </main>
    );
};
export  default  Main;