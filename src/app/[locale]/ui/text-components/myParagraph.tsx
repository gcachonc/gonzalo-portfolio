interface ParagraphProps {
    text: string;
  }
  
const MyParagraph = ({ text }: ParagraphProps )=> {
    return (
        <p className="text-white font-play font-normal text-lg lg:text-xl mb-6">
        {text}
        </p>
    );
};

export default MyParagraph;

