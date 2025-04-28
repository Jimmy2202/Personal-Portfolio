import { Link } from "react-scroll";

function LinksHeader(props) {
  return (
    <Link
      {...props}
      className="hover:text-cyan-400 text-center sm-custom:text-[10px] w-fit transition duration-500 text-[15px] flex flex-col items-center hover:cursor-pointer"
    ></Link>
  );
}

export default LinksHeader;
