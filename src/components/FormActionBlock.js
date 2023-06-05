import { CustomButton } from "./CustomButton";

export function FormActionBlock({ actionBtnText = "Save" }) {
  return (
    <div className="flex justify-end h-20">
      <CustomButton
        innerText={actionBtnText}
        type="submit"
        widthTW={"w-20"}
        heightTW={"h-10"}
      />
    </div>
  );
}
