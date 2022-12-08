import { colors } from "../../config/palette";

export function Button(props) {
  const {
    onPress,
    children,
    width,
    height,
    aspectRatio = 0,
    style: customStyle,
  } = props;
  return (
    <div
      onMouseUp={onPress}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.gray[200],
        borderRadius: 5,
        aspectRatio,
        width,
        borderWidth: 2,
        borderColor: colors.gray[100],
        borderStyle: "solid",
        height,
        ...customStyle,
      }}
    >
      {children}
    </div>
  );
}
