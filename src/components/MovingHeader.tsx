interface RunningTextProps {
  text: string;
  bgClassName?: string;
  textClassName?: string;
}
function RunningText({ text, bgClassName, textClassName }: RunningTextProps) {
  return (
    <div className="p-1">
      <div
        className={
          bgClassName
            ? "overflow-hidden whitespace-nowrap  running-text-container " +
              bgClassName
            : "overflow-hidden whitespace-nowrap  running-text-container text-white bg-gradient-to-r from-lime-500 to-green-500 rounded-md"
        }
      >
        <div className="inline-block animate-marqueeslow px-10 py-2">
          🌟{text}🌟
        </div>
      </div>
    </div>
  );
}

export default RunningText;
