import { useState } from "react";

interface Props {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: Props) => {
  const [inputData, setInputData] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="h-full">
      <input
        className="w-full h-full rounded-lg pr-16 pl-8 border border-gray-300 hover:border-blue-500 focus:border-blue-500"
        type="text"
        onChange={handleChange}
        name=""
        id=""
        placeholder="Search for any IP address or domain"
      />
      <button
        type="submit"
        className="flex items-center justify-center absolute right-0 top-0 h-full w-10 bg-black hover:bg-slate-950 rounded-r-lg text-white"
      >
        <img src="/icon-arrow.svg" alt="" />
      </button>
    </form>
  );
};
export default SearchBar;
