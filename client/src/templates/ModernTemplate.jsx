// import { useContext } from "react";
// import { ResumeContext } from "../context/ResumeContext";

// function ModernTemplate() {
//   const { resumeData } = useContext(ResumeContext);

//   const { personalInfo, education, experience, skills } = resumeData;

//   return (
//     <div className="bg-white w-[210mm] min-h-[297mm] mx-auto shadow-xl p-10">

//       {/* Header */}
//       <div className="border-b-2 border-blue-600 pb-5">

//         <h1 className="text-4xl font-bold text-slate-800">
//           {personalInfo.fullName || "Your Name"}
//         </h1>

//         <p className="text-blue-600 text-xl mt-2">
//           {personalInfo.title || "Professional Title"}
//         </p>

//         <div className="flex flex-wrap gap-5 mt-4 text-gray-600 text-sm">
//           <span>{personalInfo.email}</span>
//           <span>{personalInfo.phone}</span>
//           <span>{personalInfo.location}</span>
//         </div>

//       </div>

//       {/* Summary */}

//       <section className="mt-8">

//         <h2 className="font-bold text-xl text-blue-600 mb-3">
//           Professional Summary
//         </h2>

//         <p className="text-gray-700 leading-7">
//           {personalInfo.summary ||
//             "Write a professional summary here."}
//         </p>

//       </section>

//       {/* Experience */}

//       <section className="mt-8">

//         <h2 className="font-bold text-xl text-blue-600 mb-3">
//           Experience
//         </h2>

//         {experience.map((exp) => (
//           <div key={exp.id} className="mb-5">

//             <h3 className="font-semibold">
//               {exp.position || "Job Title"}
//             </h3>

//             <p className="text-gray-600">
//               {exp.company}
//             </p>

//             <p className="text-sm text-gray-500">
//               {exp.startDate} - {exp.endDate}
//             </p>

//             <p className="mt-2">
//               {exp.description}
//             </p>

//           </div>
//         ))}

//       </section>

//       {/* Education */}

//       <section className="mt-8">

//         <h2 className="font-bold text-xl text-blue-600 mb-3">
//           Education
//         </h2>

//         {education.map((edu) => (
//           <div key={edu.id} className="mb-4">

//             <h3 className="font-semibold">
//               {edu.degree}
//             </h3>

//             <p>{edu.institution}</p>

//             <p className="text-sm text-gray-500">
//               {edu.startYear} - {edu.endYear}
//             </p>

//           </div>
//         ))}

//       </section>

//       {/* Skills */}

//       <section className="mt-8">

//         <h2 className="font-bold text-xl text-blue-600 mb-3">
//           Skills
//         </h2>

//         <div className="flex flex-wrap gap-2">

//           {skills.map((skill, index) => (
//             <span
//               key={index}
//               className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
//             >
//               {skill}
//             </span>
//           ))}

//         </div>

//       </section>

//     </div>
//   );
// }

// export default ModernTemplate;


import Header from "./sections/Header";

function ModernTemplate() {
  return (
    <div className="bg-white w-[210mm] min-h-[297mm] mx-auto shadow-xl p-10">
      <Header />
    </div>
  );
}

export default ModernTemplate;