const Widget = ({ title, children, className = "" }) => {
  return (
    <div className={`widget  ${className}`}>
      <div className="widget-title mb-4">
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default Widget;
