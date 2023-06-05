import { FormBlock } from "../components/FormBlock";
import { CustomInput } from "../components/CustomInput";
import { FormTitle } from "../components/FormTitle";
import { FormActionBlock } from "../components/FormActionBlock";

export function CreateJobFormTwo() {
  return (
    <div className="border border-[#E6E6E6] rounded-md p-8 flex flex-col gap-6 w-[577px]">
      {/* CARD HEADING */}
      <FormTitle stepCount={2} />
      {/* EXP */}
      <FormBlock label="Experience" multiChildren={true}>
        <CustomInput name="expMinimum" placeholder="Minimum" widthTW="w-60" />
        <CustomInput name="expMaximum" placeholder="Maximum" widthTW="w-60" />
      </FormBlock>
      {/* SALARY */}
      <FormBlock label="Salary" multiChildren={true}>
        <CustomInput name="salMinimum" placeholder="Minimum" widthTW="w-60" />
        <CustomInput name="salMaximum" placeholder="Maximum" widthTW="w-60" />
      </FormBlock>
      {/* TOTAL EMP */}
      <FormBlock label="Total Employee">
        <CustomInput name="totalEmp" placeholder="ex. 100" />
      </FormBlock>
      {/* APPLY TYPE */}
      <FormBlock label="Apply Type">
        <div className="flex flex-row gap-4">
          <label className="flex gap-1 text-sm text-[#7A7A7A]">
            <input type="radio" name="myRadio" value="quickApply" />
            Quick apply
          </label>
          <label className="flex gap-1 text-sm text-[#7A7A7A]">
            <input type="radio" name="myRadio" value="externalApply" />
            External apply
          </label>
        </div>
      </FormBlock>
      {/* BUTTON */}
      <FormActionBlock />
    </div>
  );
}
