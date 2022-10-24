import Card from "../UI/Card";

const Categories=()=>{
    return(
        <div className="flex flex-col justify-center items-center mt-8 sm:mt-[64px] lg:mt-[80px] gap-y-6 sm:grid sm:grid-cols-2  sm:gap-x-6 lg:grid-cols-3 ">
            <Card title="Graphic Design" image="pattern-graphic-design.svg" imageStyle="w-[128px] h-[192px]" style="h-[364px] bg-[#755CDE] sm:row-span-2
           "/>
            <div className="w-full grid grid-cols-2 gap-x-[25px]">
                <Card title="UI/UX" style="h-[182px] bg-[#F6A560]" image="pattern-ui-ux.svg" imageStyle="w-[64px] h-[64px]" />
                <Card title="Apps" style="h-[182px] bg-[#F39E9E]" image="pattern-apps.svg" imageStyle="w-[64px] h-[64px]" />
            </div>
            <Card title="Illustrations" style="bg-[#EB7565] h-[158px] lg:h-full " image="pattern-illustrations.svg" imageStyle="w-[128pw] h-[64px]" />
            <Card title="Photography" style="bg-[#61C4B7] h-[158px] " image="pattern-photography.svg" imageStyle="w-[160pw] h-[64px]" />
            <Card title="Motion Graphics" style="bg-[#552049] h-[158px] " image="pattern-motion-graphics.svg" imageStyle="w-[128pw] h-[64px]" />





        </div>
    );
};
export  default  Categories;