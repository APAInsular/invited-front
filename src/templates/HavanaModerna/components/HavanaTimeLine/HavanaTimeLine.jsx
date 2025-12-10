import icon from "./right-arrow-svgrepo-com.svg";
const HavanaTimeline = ({ events, text }) => {
  return (
    <div className="container" style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}>
      <h2 style={{ 
        textAlign: "center", 
        fontSize: "2rem", 
        fontWeight: "300",
        marginBottom: "60px",
        fontFamily: "serif"
      }}>
        {text.title}
      </h2>
      
      <div style={{ position: "relative", paddingLeft: "60px" }}>
        <div style={{
          position: "absolute",
          left: "20px",
          top: "0",
          bottom: "0",
          width: "2px",
          backgroundColor: "#000"
        }}></div>

        {events.map((event, index) => (
          <div
            key={event.id}
            style={{
              position: "relative",
              marginBottom: "50px"
            }}
          >
            <div style={{
              position: "absolute",
              left: "-45px",
              top: "0",
              fontWeight: "bold"
            }}>
              <img style={{width: "40px", height: "40px"}} src={icon} alt="" />
            </div>

            <div>
              <div style={{ 
                fontSize: "1.1rem", 
                marginBottom: "8px",
                fontWeight: "400"
              }}>
                {event.time.slice(0, 5)}
              </div>
              <div style={{ 
                fontSize: "1rem",
                marginBottom: "4px",
                lineHeight: "1.4"
              }}>
                {event.name}
              </div>
              {event.location?.city && (
                <div style={{ 
                  fontSize: "1rem",
                  color: "#333",
                  lineHeight: "1.4"
                }}>
                  {event.location.city}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HavanaTimeline;