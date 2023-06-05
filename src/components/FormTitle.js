export function FormTitle({ stepCount }) {
  return (
    <div className="flex flex-row flex-nowrap">
      <div className="text-xl">Create a job</div>
      <div className="grow"></div>
      <div className="text-base font-medium">Step {stepCount}</div>
    </div>
  );
}
