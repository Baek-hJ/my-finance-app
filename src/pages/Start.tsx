import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  const audio = new Audio("audio.mp3");

  audio.play();
  audio.pause();
  audio.loop = true;
  audio.src = "public/Strawberry.mp3";
  audio.volume = 0.3;

  
  return (
    <div className="min-w-screen min-h-screen md:w-screen md:h-screen bg-[#DBE9E9] flex flex-col items-center justify-center">
      <img
        src="/folder.png"
        alt="Folder"
        className="h-[13rem] cursor-pointer m-[1rem]"
        onClick={() => {navigate("/home"); audio.play()}}
      />
      <h1 className="text-5xl font-sans font-bold">my-finance-app</h1>
    </div>
  );
};

export default Start;
