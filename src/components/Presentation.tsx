import photo from "../assets/image-amy.webp";
const Presentation=()=>{
    return(
        <div className="my-[100px] sm:my-[120px] flex flex-col justify-center  items-center sm:flex-row sm:gap-x-[69px] lg:w-full lg:justify-between">
            <img src={photo} alt="photo" className="w-[300px] h-[300px] sm:w-[364px] sm:h-[364px] sm:ml-[-84px] sm:overflow-visible lg:ml-0 lg:w-[445px] lg:h-[445px]"/>
            <div className="flex flex-col justify-center  items-center sm:justify-start sm:items-start sm:w-[339px] lg:w-[540px]">
                <h2 className="mt-[40px] font-plus_jakarta_s font-bold text-[26px] leading-[33px] not-italic text-center text-[#030303] sm:text-left lg:text-[40px] lg:leading-[50px] ">I’m Amy, and I’d love to work on your next project</h2>
                <p className="mt-6 font-plus_jakarta_s not-italic font-medium text-base leading-[26px] text-center text-[#7A746E] sm:text-left sm:text-lg sm:leading-7 sm:text-[32px] sm:leading-[40px] sm:w-full lg:mt-[34px] lg:text-lg lg:leading-7">I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</p>
                <button className="mt-6 rounded-[28px] w-[176px] h-[44px] sm:w-[228px] sm:h-[56px] text-center text-[#FFF7F0]  bg-[#EB7565] sm:text-base sm:leading-7 lg:mt-8 hover:bg-[#F6A560]">Free Consultation</button>

            </div>

        </div>
    );

};
export default  Presentation;

