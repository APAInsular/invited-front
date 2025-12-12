import "./Page.css";

const Page = ({
  backgroundSize = "100%",
  backgroundImage,
  backgroundColor = 'transparent',
  minHeight = '100vh',
  contentHeight = 'auto',
  centerVertically = false,
  padding = '2rem 1rem',
  maxWidth = '900px',
  className = '',
  header,
  footer,
  children
}) => {
  const pageStyles = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundColor: backgroundColor,
    minHeight: minHeight,
    backgroundSize
  };

  const contentStyles = {
    height: contentHeight,
    padding: padding,
    maxWidth: maxWidth,
  };

  return (
    <div 
      className={`page-container ${className}`}
      style={pageStyles}
    >
      {header && (
        <div className="page-header">
          {header}
        </div>
      )}
      
      <div 
        className={`page-section ${centerVertically ? 'center-vertical' : ''}`}
      >
        <div 
          className="page-content"
          style={contentStyles}
        >
          {children}
        </div>
      </div>

      {footer && (
        <div className="page-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Page;