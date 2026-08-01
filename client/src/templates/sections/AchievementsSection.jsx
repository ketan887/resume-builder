import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import SectionHeading from "../../components/ui/SectionHeading";

function AchievementsSection() {
  const { resumeData } = useContext(ResumeContext);

  const achievements = resumeData.achievements.filter(
    (achievement) => achievement.title.trim() !== ""
  );

  if (achievements.length === 0) return null;

  return (
    <section className="mt-8">
      <SectionHeading title="Achievements" />

      <div className="space-y-5 mt-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="border-l-4 border-yellow-500 pl-4"
          >
            <div className="flex justify-between items-center flex-wrap">
              <h3 className="text-lg font-semibold text-slate-800">
                🏆 {achievement.title}
              </h3>

              {achievement.year && (
                <span className="text-sm text-slate-500">
                  {achievement.year}
                </span>
              )}
            </div>

            {achievement.description && (
              <p className="mt-2 text-slate-700 leading-7">
                {achievement.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default AchievementsSection;