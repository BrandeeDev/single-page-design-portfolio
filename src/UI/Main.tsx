
const Main=(props: any)=>{
    return(
        <main className=" appearance-none min-h-screen  bg-[#FFF7F0] px-4  pt-4  sm:px-[39px] sm:pt-[34px] lg:px-[164px]">
                {props.children}
        </main>
    );
};
export  default  Main;