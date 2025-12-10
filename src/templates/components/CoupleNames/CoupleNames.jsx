import NamesWithSeparator from "./NameWithSeparator";

const CoupleNames = ({ groom, bride, icon = "💖" }) => {
  return (
    <NamesWithSeparator
      left={<h2 className="title">{groom}</h2>}
      right={<h2 className="title">{bride}</h2>}
      separator={<span className="text-5xl">{icon}</span>}
    />
  );
};
export default CoupleNames;
