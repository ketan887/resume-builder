
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

function AchievementsSection() {
  const { resumeData } = useContext(ResumeContext);

  const achievements = resumeData?.achievements || [];

  const validAchievements = achievements.filter(
    (achievement) =>
      achievement.title ||
      achievement.description ||
      achievement.year
  );

  if (validAchievements.length === 0) {
    return null;
  }

  return (
    <section className="mt-5">

      {/* Section Heading */}
      <h2 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wide text-slate-900">
        Achievements
      </h2>

      {/* Achievements */}
      <div className="mt-4 space-y-4">

        {validAchievements.map((achievement) => (
          <article key={achievement.id}>

            {/* Achievement Title + Year */}
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">

              <h3 className="text-[15px] font-bold text-slate-900">
                {achievement.title || "Achievement"}
              </h3>

              {achievement.year && (
                <p className="shrink-0 text-[13px] font-medium text-slate-600 sm:text-right">
                  {achievement.year}
                </p>
              )}

            </div>

            {/* Description */}
            {achievement.description?.trim() && (
              <p className="mt-2 whitespace-pre-line text-[14px] leading-6 text-slate-700">
                {achievement.description}
              </p>
            )}

          </article>
        ))}

      </div>

    </section>
  );
}

export default AchievementsSection;

