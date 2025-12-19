import styles from "./FramedPhoto.module.css";

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
  maskScale = 1.0,
  borderRadius = "8px",
  mask,
}) {
  const pTop = paddingTop ?? padding;
  const pBottom = paddingBottom ?? padding;
  const pLeft = paddingLeft ?? padding;
  const pRight = paddingRight ?? padding;
const maskStyle = mask
  ? {
      maskImage: mask,
      WebkitMaskImage: mask,
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      maskPosition: "center",
      WebkitMaskPosition: "center",
      maskSize: `${maskScale * 100}%`,
      WebkitMaskSize: `${maskScale * 100}%`,
    }
  : {};


  return (
    <div className={styles.container}>
      <div className={styles.wrapper} style={{ aspectRatio: ratio, borderRadius }}>
        <div
          className={styles.photoWrapper}
          style={{
            top: `${pTop}px`,
            left: `${pLeft}px`,
            right: `${pRight}px`,
            bottom: `${pBottom}px`,
            transform: `translate(${photoOffsetX}px, ${photoOffsetY}px)`,
            ...maskStyle
          }}
        >
          <img
            src={photo}
            alt="Foto base"
            className={styles.photo}
            style={{ transform: `scale(${photoScale})` }}
            draggable={false}
          />
        </div>

        <img
          src={frame}
          alt="Frame"
          className={styles.frame}
          style={{
            transform: `translate(${frameOffsetX}px, ${frameOffsetY}px) scale(${frameScale})`,
          }}
          draggable={false}
        />
      </div>
    </div>
  );
}
