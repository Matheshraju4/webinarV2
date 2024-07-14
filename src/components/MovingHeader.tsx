interface RunningTextProps {
  text: string;
  bgClassName?: string;
}
function RunningText({ text, bgClassName }: RunningTextProps) {
  return (
    <div className="p-1">
      <div
        className={
          bgClassName
            ? "overflow-hidden whitespace-nowrap  running-text-container " +
              bgClassName
            : "overflow-hidden whitespace-nowrap  running-text-container text-white border-lime-800 bg-gradient-to-r from-green-700  to-green-900 rounded-xl"
        }
      >
        <div className="inline-block animate-marqueeslow px-10 py-1">
          🌟{text}🌟
        </div>
      </div>
    </div>
  );
}

export default RunningText;
