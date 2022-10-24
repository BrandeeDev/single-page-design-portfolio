import logo from "../assets/logo.svg"

const Header = (props: {style:string,buttonStyle:string}) => {
    const btnClass=`w-[176px] h-[44px] sm:w-[228px] sm:h-[56px] flex justify-center items-center ${props.buttonStyle} rounded-[28px] text-[#FFF7F0] font-plus_jakarta_s font-bold not-italic text-sm  leading-7 sm:text-base`;
    const divClass=` flex flex-row justify-between items-center ${props.style}`
    return (
        <div className={divClass}>
            <img src={logo} alt="logo" className="w-[48px] h-[48px] sm:w-[64px] sm:h-[64px]"/>
            <button
                className={btnClass}>Free
                Consultation
            </button>

        </div>
    );
};
export default Header;


