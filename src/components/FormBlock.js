export function FormBlock({ label = null, multiChildren, children }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium text-base">{label}</label>}
      {multiChildren ? (
        <div className="flex flex-row flex-wrap gap-6">{children}</div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
}
