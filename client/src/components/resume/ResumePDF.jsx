import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 28,
    paddingLeft: 32,
    paddingRight: 32,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: "#1e293b",
  },

  header: {
    marginBottom: 10,
  },

  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    marginBottom: 3,
    color: "#0f172a",
  },

  title: {
    fontSize: 10,
    color: "#475569",
    marginBottom: 5,
  },

  contact: {
    fontSize: 8.5,
    color: "#475569",
    lineHeight: 1.35,
  },

  section: {
    marginTop: 7,
    marginBottom: 0,
  },

  heading: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: "#0f172a",
    marginBottom: 3,
    paddingBottom: 2,
    borderBottomWidth: 0.7,
    borderBottomColor: "#cbd5e1",
  },

  summary: {
    fontSize: 8.8,
    lineHeight: 1.35,
    color: "#334155",
  },

  item: {
    marginBottom: 5,
  },

  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  itemTitle: {
    fontSize: 9.2,
    fontFamily: "Helvetica-Bold",
    color: "#0f172a",
  },

  itemSubtitle: {
    fontSize: 8.5,
    color: "#475569",
    marginTop: 1,
  },

  date: {
    fontSize: 8,
    color: "#64748b",
  },

  description: {
    fontSize: 8.5,
    lineHeight: 1.3,
    color: "#334155",
    marginTop: 2,
  },

  skills: {
    fontSize: 8.5,
    lineHeight: 1.35,
    color: "#334155",
  },

  link: {
    fontSize: 8,
    color: "#2563eb",
    marginTop: 1,
  },

  twoColumn: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },

  column: {
    width: "48%",
  },
});

function ResumePDF({ resumeData }) {
  const personal = resumeData?.personalInfo || {};

  const experience =
    resumeData?.experience?.filter(
      (item) => item.company || item.position
    ) || [];

  const education =
    resumeData?.education?.filter(
      (item) => item.degree || item.institution
    ) || [];

  const projects =
    resumeData?.projects?.filter(
      (item) => item.title
    ) || [];

  const certificates =
    resumeData?.certificates?.filter(
      (item) => item.name
    ) || [];

  const languages =
    resumeData?.languages?.filter(
      (item) => item.name
    ) || [];

  const achievements =
    resumeData?.achievements?.filter(
      (item) => item.title
    ) || [];

  const skills = resumeData?.skills || [];

  const formatDescription = (text) => {
    if (!text) return "";

    return text
      .replace(/^[•●▪◦]\s*/gm, "")
      .replace(/\n+/g, "\n");
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* HEADER */}
        <View style={styles.header}>

          <Text style={styles.name}>
            {personal.fullName || "Your Name"}
          </Text>

          {personal.title && (
            <Text style={styles.title}>
              {personal.title}
            </Text>
          )}

          <Text style={styles.contact}>
            {[
              personal.email,
              personal.phone,
              personal.location,
              personal.linkedin,
              personal.github,
              personal.portfolio,
            ]
              .filter(Boolean)
              .join("  |  ")}
          </Text>

        </View>

        {/* SUMMARY */}
        {personal.summary && (
          <View style={styles.section}>

            <Text style={styles.heading}>
              PROFESSIONAL SUMMARY
            </Text>

            <Text style={styles.summary}>
              {personal.summary}
            </Text>

          </View>
        )}

        {/* EXPERIENCE */}
        {experience.length > 0 && (
          <View style={styles.section}>

            <Text style={styles.heading}>
              EXPERIENCE
            </Text>

            {experience.map((item) => (

              <View
                key={item.id}
                style={styles.item}
              >

                <View style={styles.itemHeader}>

                  <View>
                    <Text style={styles.itemTitle}>
                      {item.position}
                      {item.company
                        ? ` — ${item.company}`
                        : ""}
                    </Text>

                    {item.location && (
                      <Text style={styles.itemSubtitle}>
                        {item.location}
                      </Text>
                    )}
                  </View>

                  {(item.startDate ||
                    item.endDate) && (
                    <Text style={styles.date}>
                      {[item.startDate, item.endDate]
                        .filter(Boolean)
                        .join(" — ")}
                    </Text>
                  )}

                </View>

                {item.description && (
                  <Text style={styles.description}>
                    {formatDescription(
                      item.description
                    )}
                  </Text>
                )}

              </View>

            ))}

          </View>
        )}


         {/* EDUCATION */}
        {education.length > 0 && (
          <View style={styles.section}>

            <Text style={styles.heading}>
              EDUCATION
            </Text>

            {education.map((item) => (

              <View
                key={item.id}
                style={styles.item}
              >

                <View style={styles.itemHeader}>

                  <View>

                    <Text style={styles.itemTitle}>
                      {item.degree}
                    </Text>

                    <Text style={styles.itemSubtitle}>
                      {item.institution}
                      {item.location
                        ? ` — ${item.location}`
                        : ""}
                    </Text>

                  </View>

                  {(item.startYear ||
                    item.endYear) && (

                    <Text style={styles.date}>
                      {[item.startYear, item.endYear]
                        .filter(Boolean)
                        .join(" — ")}
                    </Text>

                  )}

                </View>

              </View>

            ))}

          </View>
        )}


        {/* SKILLS */}
        {skills.length > 0 && (
          <View style={styles.section}>

            <Text style={styles.heading}>
              SKILLS
            </Text>

            <Text style={styles.skills}>
              {skills.join("  •  ")}
            </Text>

          </View>
        )}


        {/* PROJECTS */}
        {projects.length > 0 && (
          <View style={styles.section}>

            <Text style={styles.heading}>
              PROJECTS
            </Text>

            {projects.map((item) => (

              <View
                key={item.id}
                style={styles.item}
              >

                <View style={styles.itemHeader}>

                  <Text style={styles.itemTitle}>
                    {item.title}
                  </Text>

                </View>

                {item.techStack && (
                  <Text style={styles.itemSubtitle}>
                    {item.techStack}
                  </Text>
                )}

                {item.description && (
                  <Text style={styles.description}>
                    {formatDescription(
                      item.description
                    )}
                  </Text>
                )}

                {(item.github ||
                  item.liveDemo) && (

                  <Text style={styles.link}>

                    {[
                      item.github,
                      item.liveDemo,
                    ]
                      .filter(Boolean)
                      .join("  |  ")}

                  </Text>

                )}

              </View>

            ))}

          </View>
        )}

       
        

        {/* CERTIFICATES + ACHIEVEMENTS */}
        {(certificates.length > 0 ||
          achievements.length > 0) && (

          <View style={styles.section}>

            <View style={styles.twoColumn}>

              {/* CERTIFICATES */}
              {certificates.length > 0 && (

                <View style={styles.column}>

                  <Text style={styles.heading}>
                    CERTIFICATIONS
                  </Text>

                  {certificates.map((item) => (

                    <View
                      key={item.id}
                      style={styles.item}
                    >

                      <Text style={styles.itemTitle}>
                        {item.name}
                      </Text>

                      {item.issuer && (
                        <Text style={styles.itemSubtitle}>
                          {item.issuer}
                          {item.issueDate
                            ? ` — ${item.issueDate}`
                            : ""}
                        </Text>
                      )}

                    </View>

                  ))}

                </View>

              )}

              {/* ACHIEVEMENTS */}
              {achievements.length > 0 && (

                <View style={styles.column}>

                  <Text style={styles.heading}>
                    ACHIEVEMENTS
                  </Text>

                  {achievements.map((item) => (

                    <View
                      key={item.id}
                      style={styles.item}
                    >

                      <Text style={styles.itemTitle}>
                        {item.title}
                      </Text>

                      {item.description && (
                        <Text style={styles.description}>
                          {item.description}
                        </Text>
                      )}

                    </View>

                  ))}

                </View>

              )}

            </View>

          </View>

        )}

        {/* LANGUAGES */}
        {languages.length > 0 && (
          <View style={styles.section}>

            <Text style={styles.heading}>
              LANGUAGES
            </Text>

            <Text style={styles.skills}>
              {languages
                .map(
                  (language) =>
                    `${language.name}${
                      language.proficiency
                        ? ` (${language.proficiency})`
                        : ""
                    }`
                )
                .join("  •  ")}
            </Text>

          </View>
        )}

      </Page>
    </Document>
  );
}

export default ResumePDF;