export interface LogoPlaceholderProps {
  orgName: string;
  logoImg: string;
}

const Organizations_LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({
  orgName,
  logoImg,
}) => {
  return (
    <div className="w-[45vh] text-center flex flex-col justify-center items-center space-y-[0.5rem]">
      <img src={logoImg} className="h-[9.5rem] rounded-full shadow-lg" />
      <div className="w-[35vh]">
        <h1 className="font-content font-bold text-center text-base sm:text-lg md:text-xl">
          {orgName}
        </h1>
      </div>
    </div>
  );
};
export default Organizations_LogoPlaceholder;
