import { JobDescCard } from "../components/JobDescCard";

const JOB_DESC_LIST = [
  {
    jobTitle: "UX UI Designer",
    companyName: "Great Vibes - Information Technology",
    location: "Chennai, Tamilnadu, India (in-office)",
    remoteType: "Part-Time (9.00 am - 5.00 pm IST)",
    experience: "Experience (1-2 Years)",
    salary: "INR (₹) 30,000 - 50,000 / Month",
    employees: "51-200 employees",
    isExternalApply: false,
  },
  {
    jobTitle: "SEO Analyst",
    companyName: "Great Vibes - Information Technology",
    location: "Chennai, Tamilnadu, India (in-office)",
    remoteType: "Part-Time (9.00 am - 5.00 pm IST)",
    experience: "Experience (1-2 Years)",
    salary: "INR (₹) 30,000 - 50,000 / Month",
    employees: "51-200 employees",
    isExternalApply: false,
  },
  {
    jobTitle: "Developer",
    companyName: "Great Vibes - Information Technology",
    location: "Chennai, Tamilnadu, India (in-office)",
    remoteType: "Part-Time (9.00 am - 5.00 pm IST)",
    experience: "Experience (1-2 Years)",
    salary: "INR (₹) 50,000 - 70,000 / Month",
    employees: "51-200 employees",
    isExternalApply: true,
  },
  {
    jobTitle: "Interaction Designer",
    companyName: "Great Vibes - Information Technology",
    location: "Chennai, Tamilnadu, India (in-office)",
    remoteType: "Part-Time (9.00 am - 5.00 pm IST)",
    experience: "Experience (1-2 Years)",
    salary: "INR (₹) 30,000 - 50,000 / Month",
    employees: "51-200 employees",
    isExternalApply: true,
  },
];
export function JobDescList() {
  return (
    <div className="flex flex-row flex-wrap gap-5 p-8 bg-[#D8D8D8] rounded-xl justify-between">
      {JOB_DESC_LIST.map((jobDesc) => (
        <JobDescCard description={jobDesc} />
      ))}
    </div>
  );
}
