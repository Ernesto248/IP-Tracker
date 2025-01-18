const Skeleton = () => {
  return (
    <div className=" w-full h-full bg-gray-400 animate-pulse">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-16 h-16 bg-gray-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Skeleton;
