interface Props {
  ipAddress?: string;
  location?: string;
  timeZone?: string;
  isp?: string;
}

const Card = ({ ipAddress, location, timeZone, isp }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full bg-white p-5 sm:p-10 rounded-xl z-10 border-4 space-y-6 sm:space-y-0">
      <div>
        <h4 className="font-bold text-gray-500">IP ADDRESS</h4>
        <p className="font-bold text-xl sm:text-2xl text-gray-900">
          {ipAddress}
        </p>
      </div>
      <div className="border-l-0 sm:border-l-2 sm:pl-10">
        <h4 className="font-bold text-gray-500">LOCATION</h4>
        <p className="font-bold text-xl sm:text-2xl text-gray-900">{location}</p>
      </div>
      <div className="border-l-0 sm:border-l-2 sm:pl-10">
        <h4 className="font-bold text-gray-500">TIMEZONE</h4>
        <p className="font-bold text-xl sm:text-2xl text-gray-900">{timeZone}</p>
      </div>
      <div className="border-l-0 sm:border-l-2 sm:pl-10">
        <h4 className="font-bold text-gray-500">ISP</h4>
        <p className="font-bold text-xl sm:text-2xl text-gray-900">
          {isp}
        </p>
      </div>
    </div>
  );
};
export default Card;
