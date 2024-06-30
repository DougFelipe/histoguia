function Input(props) {
  return (
    <input
      onChange={props.onChange}
      name={props.name}
      type={props.type}
      value={props.value}
      className="w-[328px] h-[46px] mx-[55px] mb-[20px] px-[20px] bg-[#3D2E7C] text-[#FFFEFE] font-regular border-solid border-2 border-[#FFFEFE]/[.6] hover:border-[#FFFEFE] focus:border-[#FFFEFE] outline-none rounded-lg placeholder:text-[#FFFEFE] placeholder:font-regular max-md:mx-[30px] max-md:w-[250px]"
      placeholder={props.placeholder}
    />
  );
}

export default Input;
