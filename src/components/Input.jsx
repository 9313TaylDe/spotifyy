const Input = ({ placeholder, font, cursor, borderRadius, color, type }) => {
  return (
    <input
      placeholder={placeholder || "Buscar"}
      style={{
        cursor: cursor,
        borderRadius: borderRadius,
        color: color || "#050505",
        type: type,
        fontSize: font,
      }}
      className="input_custom"
    />
  );
};

export default Input;
