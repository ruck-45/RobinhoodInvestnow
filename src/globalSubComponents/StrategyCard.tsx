// Dependencies
import { Image } from "@nextui-org/react";

type StrategyCardProps = {
  className?: string;
  heading: string;
  caption: string;
  isPurple?: Boolean;
  thumbnail: string;
};

const StrategyCard = (props: StrategyCardProps) => {
  let className = "flex flex-col items-center text-center gap-[2rem] p-[5rem] md:w-[100%] " + props.className;
  if (props.isPurple) {
    className += " text-white";
  } else {
    className += " bg-white";
  }

  return (
    <div className={className}>
      <div>
        <h1 className="font-['Unna'] text-[2rem] md:text-[4rem]">{props.heading}</h1>
        <p className="md:text-[1.5rem]">{props.caption}</p>
      </div>
      <Image width={600} alt="thumbnail" src={props.thumbnail} isBlurred />
    </div>
  );
};

export default StrategyCard;
