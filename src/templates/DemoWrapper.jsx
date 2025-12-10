
const DemoWrapper = ({ children }) => {
  return (
    <div className="w-100 d-flex justify-content-center">
      <div style={{ maxWidth: "600px" }}>{children}</div>
    </div>
  );
};

export default DemoWrapper;
