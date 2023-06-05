export function CustomButton({
  innerText,
  type = "button",
  widthTW,
  heightTW,
  isPrimary = true,
}) {
  const primaryStyle = "bg-[#1597E4] text-white";
  const secondaryStyle = "bg-white text-[#1597E4] border border-[#1597E4]";

  return (
    <button
      className={`${widthTW} ${heightTW} self-end rounded-md text-base font-medium px-4	py-2 ${
        isPrimary ? primaryStyle : secondaryStyle
      }`}
      type={type}
    >
      {innerText}
    </button>
  );
}
