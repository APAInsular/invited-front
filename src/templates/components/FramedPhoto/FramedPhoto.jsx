export default function FramedPhoto({
  frame,
  photo,
  ratio = "4/5",
  padding = 12,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  frameScale = 1.9,
  frameOffsetX = 0,
  frameOffsetY = 0,
  photoOffsetX = 2,
  photoOffsetY = 0,
  photoScale = 0.8,
  borderRadius = "8px",
}) {
  const pTop = paddingTop ?? padding;
  const pBottom = paddingBottom ?? padding;
  const pLeft = paddingLeft ?? padding;
  const pRight = paddingRight ?? padding;

  return (
    <div style={styles.container}>
      <div style={{ ...styles.wrapper, aspectRatio: ratio, borderRadius }}>
        <div
          style={{
            ...styles.photoWrapper,
            top: `${pTop}px`,
            left: `${pLeft}px`,
            right: `${pRight}px`,
            bottom: `${pBottom}px`,
            transform: `translate(${photoOffsetX}px, ${photoOffsetY}px)`,
          }}
        >
          <img
            src={photo}
            alt="Foto base"
            style={{
              ...styles.photo,
              transform: `scale(${photoScale})`,
            }}
            draggable={false}
          />
        </div>

        <img
          src={frame}
          alt="Frame"
          style={{
            ...styles.frame,
            transform: `translate(${frameOffsetX}px, ${frameOffsetY}px) scale(${frameScale})`,
          }}
          draggable={false}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    position: "relative",
    width: "320px",
    borderRadius: "8px",
  },
  photoWrapper: {
    position: "absolute",
    overflow: "hidden",
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  frame: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    objectFit: "contain",
  },
};