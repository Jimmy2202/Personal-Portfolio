function Project(props) {
  return (
    <div
      {...props}
      className="sm-custom:text-[15px] sm-custom:min-h-[15vh] sm-custom:max-w-[50vw] sm-custom:w-[50vw] max-w-[13vw] w-[13vw] transition duration-500 ease-in-out hover:bg-white/[0.6] hover:font-semibold hover:shadow-lg shadow-white h-fit break-words p-6 bg-gradient-to-r from-black/[0.7] to-purple-700/[0.7] text-white rounded-lg flex flex-col justify-center items-center gap-10 text-center"
    ></div>
  );
}

export default Project;
