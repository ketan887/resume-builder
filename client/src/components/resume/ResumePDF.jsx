import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 38,
    paddingRight: 38,
    fontSize: 9.5,
    fontFamily: "Helvetica",
    color: "#111827",
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 3,
  },

  title: {
    fontSize: 10,
    color: "#4b5563",
    marginBottom: 6,
  },

  contact: {
    fontSize: 8.5,
    color: "#374151",
    marginBottom: 2,
  },

  section: {
    marginTop: 9,
  },

  heading: {
    fontSize: 10.5,
    fontWeight: "bold",
    marginBottom: 4,
    textTransform: "uppercase",
    color: "#111827",
  },

  divider: {
    borderBottomWidth: 0.7,
    borderBottomColor: "#9ca3af",
    marginBottom: 5,
  },

  item: {
    marginBottom: 6,
  },

  itemTitle: {
    fontSize: 9.5,
    fontWeight: "bold",
  },

  itemSubtitle: {
    fontSize: 8.8,
    color: "#374151",
    marginTop: 1,
  },

  text: {
    fontSize: 9,
    lineHeight: 1.3,
  },

  description: {
    fontSize: 9,
    lineHeight: 1.3,
    marginTop: 2,
  },

  skills: {
    fontSize: 9,
    lineHeight: 1.4,
  },
});

function SectionHeading({ children }) {
  return (
    <View>
      <Text style={styles.heading}>{children}</Text>
      <View style={styles.divider} />
    </View>
  );
}

function ResumePDF({ resumeData }) {
  const personal = resumeData?.personalInfo || {};

  const education =
    resumeData?.education?.filter(
      (item) => item.degree || item.institution
    ) || [];

  const experience =
    resumeData?.experience?.filter(
      (item) => item.company || item.position
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
      (item) =>
        item.title ||
        item.description ||
        item.year
    ) || [];

  const skills =
    resumeData?.skills?.filter(Boolean) || [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* HEADER */}

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
          ]
            .filter(Boolean)
            .join(" | ")}
        </Text>

        <Text style={styles.contact}>
          {[
            personal.linkedin,
            personal.github,
            personal.portfolio,
          ]
            .filter(Boolean)
            .join(" | ")}
        </Text>

        {/* SUMMARY */}

        {personal.summary && (
          <View style={styles.section}>
            <SectionHeading>
              Professional Summary
            </SectionHeading>

            <Text style={styles.text}>
              {personal.summary}
            </Text>
          </View>
        )}

        {/* EXPERIENCE */}

        {experience.length > 0 && (
          <View style={styles.section}>
            <SectionHeading>
              Experience
            </SectionHeading>

            {experience.map((item) => (
              <View
                key={item.id}
                style={styles.item}
              >
                <Text style={styles.itemTitle}>
                  {item.position}
                  {item.company
                    ? ` — ${item.company}`
                    : ""}
                </Text>

                {(item.location ||
                  item.startDate ||
                  item.endDate) && (
                  <Text style={styles.itemSubtitle}>
                    {[
                      item.location,
                      item.startDate &&
                        item.endDate
                        ? `${item.startDate} - ${item.endDate}`
                        : item.startDate ||
                          item.endDate,
                    ]
                      .filter(Boolean)
                      .join(" | ")}
                  </Text>
                )}

                {item.description && (
                  <Text style={styles.description}>
                    {item.description}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* PROJECTS */}

        {projects.length > 0 && (
          <View style={styles.section}>
            <SectionHeading>
              Projects
            </SectionHeading>

            {projects.map((item) => (
              <View
                key={item.id}
                style={styles.item}
              >
                <Text style={styles.itemTitle}>
                  {item.title}
                </Text>

                {item.techStack && (
                  <Text style={styles.itemSubtitle}>
                    {item.techStack}
                  </Text>
                )}

                {item.description && (
                  <Text style={styles.description}>
                    {item.description}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* EDUCATION */}

        {education.length > 0 && (
          <View style={styles.section}>
            <SectionHeading>
              Education
            </SectionHeading>

            {education.map((item) => (
              <View
                key={item.id}
                style={styles.item}
              >
                <Text style={styles.itemTitle}>
                  {item.degree}
                </Text>

                <Text style={styles.itemSubtitle}>
                  {[
                    item.institution,
                    item.location,
                    item.startYear &&
                      item.endYear
                      ? `${item.startYear} - ${item.endYear}`
                      : item.startYear ||
                        item.endYear,
                  ]
                    .filter(Boolean)
                    .join(" | ")}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* SKILLS */}

        {skills.length > 0 && (
          <View style={styles.section}>
            <SectionHeading>
              Skills
            </SectionHeading>

            <Text style={styles.skills}>
              {skills.join(" • ")}
            </Text>
          </View>
        )}

        {/* CERTIFICATES */}

        {certificates.length > 0 && (
          <View style={styles.section}>
            <SectionHeading>
              Certifications
            </SectionHeading>

            {certificates.map((item) => (
              <View
                key={item.id}
                style={styles.item}
              >
                <Text style={styles.itemTitle}>
                  {item.name}
                </Text>

                <Text style={styles.itemSubtitle}>
                  {[
                    item.issuer,
                    item.issueDate,
                  ]
                    .filter(Boolean)
                    .join(" | ")}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* ACHIEVEMENTS */}

        {achievements.length > 0 && (
          <View style={styles.section}>
            <SectionHeading>
              Achievements
            </SectionHeading>

            {achievements.map((item) => (
              <View
                key={item.id}
                style={styles.item}
              >
                <Text style={styles.itemTitle}>
                  {item.title}
                </Text>

                {(item.description ||
                  item.year) && (
                  <Text style={styles.description}>
                    {[
                      item.description,
                      item.year,
                    ]
                      .filter(Boolean)
                      .join(" | ")}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* LANGUAGES */}

        {languages.length > 0 && (
          <View style={styles.section}>
            <SectionHeading>
              Languages
            </SectionHeading>

            <Text style={styles.skills}>
              {languages
                .map(
                  (item) =>
                    item.proficiency
                      ? `${item.name} (${item.proficiency})`
                      : item.name
                )
                .join(" • ")}
            </Text>
          </View>
        )}

      </Page>
    </Document>
  );
}

export default ResumePDF;