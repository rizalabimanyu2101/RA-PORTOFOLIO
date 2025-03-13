import { AiOutlineLoading } from "react-icons/ai";

export const SplashScreen = () => {
  return (
    <div className="size-screen fixed z-200 inset-0 flex justify-center items-center bg-[#1A1A1A]">
      <AiOutlineLoading className="max-[500px]:size-33 size-40 text-white animate-spin -scale-x-100 absolute" />
      <img
        src="logo.png"
        className="max-[500px]:size-23 size-30 absolute animate-spin"
      />
    </div>
  );
};
