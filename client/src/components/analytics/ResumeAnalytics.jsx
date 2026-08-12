
import { useMemo } from "react";
import {
  BarChart3,
  HeartPulse,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

function ResumeAnalytics({ resumeData }) {
  const analytics = useMemo(() => {
    const personalInfo = resumeData?.personalInfo || {};

    const education = resumeData?.education || [];
    const experience = resumeData?.experience || [];
    const projects = resumeData?.projects || [];
    const skills = resumeData?.skills || [];
    const certificates = resumeData?.certificates || [];
    const languages = resumeData?.languages || [];
    const achievements = resumeData?.achievements || [];

    /* =====================================================
       SECTION CHECKS
    ===================================================== */

    const checks = {
      personal:
        Boolean(personalInfo.fullName) &&
        Boolean(personalInfo.title) &&
        Boolean(personalInfo.email) &&
        Boolean(personalInfo.phone),

      summary:
        Boolean(personalInfo.summary?.trim()),

      education:
        education.some(
          (item) =>
            item.degree?.trim() ||
            item.institution?.trim()
        ),

      experience:
        experience.some(
          (item) =>
            item.position?.trim() ||
            item.company?.trim()
        ),

      skills:
        skills.length >= 3,

      projects:
        projects.some(
          (item) =>
            item.title?.trim() ||
            item.description?.trim()
        ),

      certificates:
        certificates.some(
          (item) =>
            item.name?.trim() ||
            item.issuer?.trim()
        ),

      languages:
        languages.some(
          (item) => item.name?.trim()
        ),

      achievements:
        achievements.some(
          (item) =>
            item.title?.trim() ||
            item.description?.trim()
        ),
    };

    /* =====================================================
       ATS SCORE
    ===================================================== */

    const weights = {
      personal: 20,
      summary: 10,
      education: 15,
      experience: 15,
      skills: 15,
      projects: 10,
      certificates: 5,
      languages: 2,
      achievements: 8,
    };

    let atsScore = 0;

    Object.entries(checks).forEach(([section, completed]) => {
      if (completed) {
        atsScore += weights[section];
      }
    });

    /* =====================================================
       RESUME HEALTH
    ===================================================== */

    const totalSections = Object.keys(checks).length;

    const completedSections =
      Object.values(checks).filter(Boolean).length;

    const health = Math.round(
      (completedSections / totalSections) * 100
    );

    /* =====================================================
       INTELLIGENCE LEVEL
    ===================================================== */

    let intelligence = "Needs Improvement";

    if (atsScore >= 90) {
      intelligence = "Excellent";
    } else if (atsScore >= 75) {
      intelligence = "Strong";
    } else if (atsScore >= 60) {
      intelligence = "Good";
    }

    /* =====================================================
       JOB MATCHER
    ===================================================== */

    let jobMatch = atsScore;

    if (skills.length >= 5) {
      jobMatch += 5;
    }

    if (experience.length >= 1) {
      jobMatch += 5;
    }

    if (projects.length >= 2) {
      jobMatch += 3;
    }

    jobMatch = Math.min(jobMatch, 100);

    /* =====================================================
       IMPROVEMENT SUGGESTIONS
    ===================================================== */

    const suggestions = [];

    if (!checks.personal) {
      suggestions.push(
        "Complete your contact information."
      );
    }

    if (!checks.summary) {
      suggestions.push(
        "Add a professional summary."
      );
    }

    if (!checks.experience) {
      suggestions.push(
        "Add relevant work experience."
      );
    }

    if (!checks.skills) {
      suggestions.push(
        "Add at least 3 relevant technical skills."
      );
    }

    if (!checks.projects) {
      suggestions.push(
        "Add at least one project."
      );
    }

    if (!checks.education) {
      suggestions.push(
        "Complete your education section."
      );
    }

    if (!checks.achievements) {
      suggestions.push(
        "Add measurable achievements."
      );
    }

    return {
      atsScore,
      health,
      intelligence,
      jobMatch,
      checks,
      suggestions,
    };
  }, [resumeData]);

  /* =====================================================
     ANALYTICS CARDS
  ===================================================== */

  const cards = [
    {
      title: "ATS Score",
      value: analytics.atsScore,
      suffix: "/100",
      description:
        "How well your resume is structured for ATS systems.",
      icon: BarChart3,
    },

    {
      title: "Resume Health",
      value: analytics.health,
      suffix: "%",
      description:
        "Overall completeness of your resume.",
      icon: HeartPulse,
    },

    {
      title: "Resume Intelligence",
      value: analytics.intelligence,
      suffix: "",
      description:
        "Overall quality based on your current content.",
      icon: Brain,
    },

    {
      title: "Job Matcher",
      value: analytics.jobMatch,
      suffix: "%",
      description:
        "Estimated job compatibility score.",
      icon: BriefcaseBusiness,
    },
  ];

  return (
    <section className="mt-10">

      {/* ===================================================
          HEADER
      =================================================== */}

      <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Resume Analytics
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            Resume Performance
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your score updates automatically as you edit your resume.
          </p>

        </div>

        <div className="text-sm text-slate-500">
          Live analysis
        </div>

      </div>


      {/* ===================================================
          ANALYTICS CARDS
      =================================================== */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              {/* Card top */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-semibold text-slate-800">
                    {card.title}
                  </h3>

                </div>

                <CheckCircle2
                  size={17}
                  className="text-green-500"
                />

              </div>


              {/* Score */}

              <div className="mt-5 flex items-baseline gap-1">

                <span className="text-3xl font-bold text-slate-900">
                  {card.value}
                </span>

                {card.suffix && (
                  <span className="text-sm font-medium text-slate-500">
                    {card.suffix}
                  </span>
                )}

              </div>


              {/* Description */}

              <p className="mt-2 text-sm leading-5 text-slate-500">
                {card.description}
              </p>

            </div>
          );
        })}

      </div>


      {/* ===================================================
          SECTION CHECKLIST
      =================================================== */}

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="mb-5">

          <h3 className="text-lg font-bold text-slate-900">
            Resume Checklist
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Complete these sections to improve your score.
          </p>

        </div>


        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

          {Object.entries(analytics.checks).map(
            ([section, completed]) => (

              <div
                key={section}
                className={`
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  px-4
                  py-3
                  ${
                    completed
                      ? "border-green-200 bg-green-50"
                      : "border-amber-200 bg-amber-50"
                  }
                `}
              >

                {completed ? (
                  <CheckCircle2
                    size={18}
                    className="text-green-600"
                  />
                ) : (
                  <AlertCircle
                    size={18}
                    className="text-amber-600"
                  />
                )}

                <span className="text-sm font-medium capitalize text-slate-700">
                  {section}
                </span>

              </div>

            )
          )}

        </div>

      </div>


      {/* ===================================================
          AI / IMPROVEMENT AREA
      =================================================== */}

      {analytics.suggestions.length > 0 && (

        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">

          <div className="flex items-start gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Brain size={20} />
            </div>

            <div>

              <h3 className="font-bold text-blue-900">
                Improve Your Resume
              </h3>

              <p className="mt-1 text-sm text-blue-800">
                Here are some things you can improve before
                applying for jobs.
              </p>

            </div>

          </div>


          <div className="mt-5 space-y-3">

            {analytics.suggestions.map(
              (suggestion, index) => (

                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl bg-white px-4 py-3"
                >

                  <AlertCircle
                    size={17}
                    className="shrink-0 text-amber-500"
                  />

                  <span className="text-sm text-slate-700">
                    {suggestion}
                  </span>

                </div>

              )
            )}

          </div>

        </div>

      )}

    </section>
  );
}

export default ResumeAnalytics;

