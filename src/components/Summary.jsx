const Summary = ({ question, content }) => {
  return (
    <details className="flex flex-col gap-2">
      <summary className="flex justify-between items-center">
        <span className=" font-GoogleSans">{question}</span>
        <span className="bg-[#f2f3f5] p-2 rounded-full arrow-container">
          <img src="/arrowDown.svg" alt="" />
        </span>
      </summary>

      <div id="content" className=" font-GoogleSans pb-2">
        <p>{content}</p>
      </div>
    </details>
  );
};

export default Summary;
