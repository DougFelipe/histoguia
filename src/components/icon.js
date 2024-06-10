function Icon(props) {
  return (
    <div className="bg-[#FFFFFF] w-[75px] h-[48px] rounded-lg px-[23px] py-[12px] max-md:h-[40px] max-md:w-[50px] max-md:px-[12px] max-md:py-[10px]">
      <i className={props.src}></i>
    </div>
  );
}

export default Icon;
