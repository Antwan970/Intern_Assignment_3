import useToggle from "../hooks/useToggle";
export default function Card({head,text})
{
    const[showText,toggleText]=useToggle();
    return(
         <div className="bg-white shadow-lg rounded-2xl p-4 m-4 max-w-md w-full">
      <h2 className="text-xl font-bold text-gray-800">{head}</h2>
      {showText && <p className="text-gray-600 mt-2">{text}</p>}
      <button
        onClick={toggleText}
        className="mt-4 text-blue-500 hover:underline"
      >
        {showText ? "Show Less" : "Show More"}
      </button>
    </div>
    );
}