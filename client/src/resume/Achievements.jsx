import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";

function Achievements() {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const addAchievement = () => {
    setResumeData({
      ...resumeData,
      achievements: [
        ...resumeData.achievements,
        {
          id: Date.now(),
          title: "",
          description: "",
          year: "",
        },
      ],
    });
  };

  const updateAchievement = (id, field, value) => {
    setResumeData({
      ...resumeData,
      achievements: resumeData.achievements.map((achievement) =>
        achievement.id === id
          ? { ...achievement, [field]: value }
          : achievement
      ),
    });
  };

  const removeAchievement = (id) => {
    setResumeData({
      ...resumeData,
      achievements: resumeData.achievements.filter(
        (achievement) => achievement.id !== id
      ),
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Achievements
      </h2>

      {resumeData.achievements.map((achievement) => (
        <div
          key={achievement.id}
          className="border rounded-xl p-5 mb-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Achievement Title"
            value={achievement.title}
            onChange={(e) =>
              updateAchievement(
                achievement.id,
                "title",
                e.target.value
              )
            }
            className="w-full border rounded-lg p-3"
          />

          <textarea
            rows="4"
            placeholder="Description"
            value={achievement.description}
            onChange={(e) =>
              updateAchievement(
                achievement.id,
                "description",
                e.target.value
              )
            }
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="Year"
            value={achievement.year}
            onChange={(e) =>
              updateAchievement(
                achievement.id,
                "year",
                e.target.value
              )
            }
            className="w-full border rounded-lg p-3"
          />

          <button
            onClick={() => removeAchievement(achievement.id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Remove Achievement
          </button>
        </div>
      ))}

      <button
        onClick={addAchievement}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        + Add Achievement
      </button>
    </div>
  );
}

export default Achievements;