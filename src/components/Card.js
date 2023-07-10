import "../styles/output.css";
import { FaCircle } from "react-icons/fa";

function Card() {
  return (
    <div className="w-80 h-96 bg-white border-2 border-black rounded-lg flex items-center justify-center flex-col shadow-lg">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt=""
        className="w-64 bg-red-400 h-32 object-cover mx-auto mb-5"
      />
      <h1 className="text-[#68645c] text-3xl font-noto font-bold">
        Mega Mewtwo X
      </h1>
      <h4 className="font-noto text-[#68645c] text-lg">Genetic Pokemon</h4>
      <div className="flex items-center justify-center">
        <h3 className="font-noto">Fighting</h3>
        <FaCircle className="w-2 h-2 mx-2 fill-slate-400" />
        <h3 className="font-noto">Psychic</h3>
      </div>
      <h3 className="font-noto text-[#68645c] font-bold">Steadfast</h3>
    </div>
  );
}

export default Card;
