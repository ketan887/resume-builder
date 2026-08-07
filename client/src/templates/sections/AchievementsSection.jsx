import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

import ResumeSection from "../../resume/ResumeSection";
import ResumeHeading from "../../resume/ResumeHeading";
import ResumeItem from "../../resume/ResumeItem";

function AchievementsSection() {
  const { resumeData } = useContext(ResumeContext);

  const achievements = resumeData.achievements.filter(
    (achievement) =>
      achievement.title || achievement.description
  );

  if (achievements.length === 0) return null;

  return (
    <ResumeSection>
      <ResumeHeading>Achievements</ResumeHeading>

      {achievements.map((achievement) => (
        <ResumeItem
          key={achievement.id}
          title={achievement.title || "Achievement"}
          subtitle={achievement.year}
          description={achievement.description}
        />
      ))}
    </ResumeSection>
  );
}

export default AchievementsSection;