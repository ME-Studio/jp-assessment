import { CustomButton } from "./CustomButton";

export function JobDescCard({ description }) {
  return (
    <div className="py-4 px-6 w-[49%] min-h-[80px] flex flex-row gap-2 border border-[#DADEDF] rounded-xl bg-white">
      {/* IMG */}
      <div>
        <img src="/netflixIcon.png" alt="Netflix-Icon" />
      </div>
      {/* DESC */}
      <div className="text-base">
        <div className="text-2xl">{description.jobTitle}</div>
        <div>{description.companyName}</div>
        <div className="text-[#646464]">{description.location}</div>
        <div className="my-6 flex flex-col gap-2">
          <div>{description.remoteType}</div>
          <div>{description.experience}</div>
          <div>{description.salary}</div>
          <div>{description.employees}</div>
        </div>
        <CustomButton
          innerText={
            description.isExternalApply ? "External Apply" : "Apply Now"
          }
          widthTW={"w-40"}
          heightTW={"h-10"}
          isPrimary={!description.isExternalApply}
        ></CustomButton>
      </div>
    </div>
  );
}
