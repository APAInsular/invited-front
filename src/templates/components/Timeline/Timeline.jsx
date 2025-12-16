const Timeline = ({ events, text, icon = {}, line = {} }) => {
  const {
    iconSrc = null,
    iconWidth = "40px",
    iconHeight = "40px"
  } = icon;

  const {
    lineSrc = null,      
    lineSize = "2px",
    lineColor = "#000"    
  } = line;

  return (
    <div
      className="container"
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "40px 20px"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "300",
          marginBottom: "60px",
          fontFamily: "serif"
        }}
      >
        {text.title}
      </h2>

      {/* CONTENEDOR TIMELINE */}
      <div
        style={{
          position: "relative",
          paddingLeft: "60px",

          // 🔁 LÍNEA POR IMAGEN
          ...(lineSrc
            ? {
                backgroundImage: `url(${lineSrc})`,
                backgroundRepeat: "repeat-y",
                backgroundPosition: "20px 0",
                backgroundSize: `${lineSize} auto`
              }
            : {})
        }}
      >
        {/* 🔲 LÍNEA SIMPLE */}
        {!lineSrc && (
          <div
            style={{
              position: "absolute",
              left: "20px",
              top: 0,
              bottom: 0,
              width: lineSize,
              backgroundColor: lineColor
            }}
          />
        )}

        {events.map((event) => (
          <div
            key={event.id}
            style={{
              position: "relative",
              marginBottom: "50px"
            }}
          >
            {/* ICONO */}
            <div
              style={{
                position: "absolute",
                left: "-45px",
                top: "0"
              }}
            >
              {iconSrc && (
                <img
                  src={iconSrc}
                  alt=""
                  style={{
                    width: iconWidth,
                    height: iconHeight
                  }}
                />
              )}
            </div>

            {/* CONTENIDO */}
            <div>
              <div
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "8px",
                  fontWeight: "400"
                }}
              >
                {event.time.slice(0, 5)}
              </div>

              <div
                style={{
                  fontSize: "1rem",
                  marginBottom: "4px",
                  lineHeight: "1.4"
                }}
              >
                {event.name}
              </div>

              {event.location?.city && (
                <div
                  style={{
                    fontSize: "1rem",
                    color: "#333",
                    lineHeight: "1.4"
                  }}
                >
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

export default Timeline;
