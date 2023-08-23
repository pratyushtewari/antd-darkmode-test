const MaterialSymbol = (props:
  { name: string }
) => {
  return (
    <span
      style={{
        fontFamily: "Material Symbols Outlined",
        color: "inherit",
        textAlign: "center",
        verticalAlign: " -0.125em",
        textRendering: "optimizeLegibility",
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: "1",
        letterSpacing: "normal",
        textTransform: "none",
        display: "inline-block",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        direction: "ltr",
        WebkitFontSmoothing: "antialiased",
        fontVariationSettings: '"FILL" 0, "wght" 300, "GRAD" 0, "opsz" 48',
      }}
    >
      {props.name}
    </span>
  );
}


export default MaterialSymbol;
