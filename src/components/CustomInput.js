export function CustomInput({
  name,
  placeholder,
  label = null,
  widthTW = "w-full",
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium text-base">{label}</label>}
      <input
        className={`border rounded-md h-9 ${widthTW} px-3 py-2 text-sm`}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
