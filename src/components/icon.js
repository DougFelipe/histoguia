function Icon(props) {
  return (
    <div className="bg-[#FFFFFF] w-[75px] h-[48px] rounded-lg px-[23px] py-[12px]">
      <i className={props.src}></i>
    </div>
  );
}

export default Icon;
