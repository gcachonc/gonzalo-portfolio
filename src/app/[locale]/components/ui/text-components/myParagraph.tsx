interface ParagraphProps {
    text: string;
    center?: boolean;
  }
  
const MyParagraph = ({ text, center }: ParagraphProps )=> {
    return (
        <p className={`text-foreground font-play font-normal text-lg lg:text-xl mb-6 ${
            center ? 'text-center' : ''
          }`}>
        {text}
        </p>
    );
};

export default MyParagraph;

