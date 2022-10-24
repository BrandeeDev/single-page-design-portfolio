const Card=(props: {title:string;style:string,image:string,imageStyle:string })=>{
    const cardStyle=`container flex  flex-col w-full rounded-lg relative  ${props.style} `
    const imgStyle=`absolute top-6 right-6 ${props.imageStyle}`
    return(
        <div className={cardStyle}>
            <img src={require(`../assets/${props.image}`)} alt="image" className={imgStyle}/>
            <p className="absolute left-6 bottom-6 font-plus_jakarta_s not-italic font-bold text-2xl	leading-[30px] text-white ">{props.title}</p>


        </div>
    );
};
export default  Card;

