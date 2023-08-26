const MaterialSymbol = (props:
  { name: string }
) => {
  return (
    <span
      style={{
        fontFamily: "Material Symbols Outlined",
        color: "inherit",
        verticalAlign: " -0.125em",
        lineHeight: "1",
        fontVariationSettings: "'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24'",
      }}
    >
      {props.name}
    </span>
  );
}


export default MaterialSymbol;
