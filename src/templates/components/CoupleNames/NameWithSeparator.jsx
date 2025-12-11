import "./NameWithSeparator.css";

const NamesWithSeparator = ({ left, right, separator, asColumn = false }) => {
  return (
    <div className="container my-4">
      <div
        className="names-separator"
        style={{
          flexDirection: asColumn ? "column" : "row",
        }}
      >
        <div className="text-center nowrap">{left}</div>
        <div>{separator}</div>
        <div className="text-center nowrap">{right}</div>
      </div>
    </div>
  );
};

export default NamesWithSeparator;
