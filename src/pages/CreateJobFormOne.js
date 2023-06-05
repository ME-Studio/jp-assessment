import { FormBlock } from "../components/FormBlock";
import { CustomInput } from "../components/CustomInput";
import { FormTitle } from "../components/FormTitle";
import { FormActionBlock } from "../components/FormActionBlock";

export function CreateJobFormOne() {
  return (
    <div className="border border-[#E6E6E6] rounded-md p-8 flex flex-col gap-6 w-[577px]">
      {/* CARD HEADING */}
      <FormTitle stepCount={1} />
      {/* JOB TITLE */}
      <FormBlock label="Job title">
        <CustomInput name="jobTitle" placeholder="ex. UX UI Designer" />
      </FormBlock>
      {/* COMPANY NAME */}
      <FormBlock label="Company name">
        <CustomInput name="companyName" placeholder="ex. Google" />
      </FormBlock>
      {/* INDUSTRY */}
      <FormBlock label="Industry">
        <CustomInput name="industry" placeholder="ex. Information Technology" />
      </FormBlock>
      {/* EXP */}
      <FormBlock multiChildren={true}>
        <div className="flex flex-col gap-1">
          <CustomInput
            label={"Location"}
            name="location"
            placeholder="ex. Chennai"
            widthTW="w-60"
          />
        </div>
        <div className="flex flex-col gap-1">
          <CustomInput
            label={"Remote type"}
            name="remoteType"
            placeholder="ex. In-office"
            widthTW="w-60"
          />
        </div>
      </FormBlock>
      {/* BUTTON */}
      <FormActionBlock actionBtnText="Next" />
    </div>
  );
}
