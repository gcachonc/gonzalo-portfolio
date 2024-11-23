interface TitleProps {
    text: string;
  }
  
const MyTitle = ({ text } : TitleProps) => {
    return (
        <h2 className="text-white font-play font-normal text-4xl lg:text-5xl mb-10">
        {text}
        </h2>
    );
};

export default MyTitle;
