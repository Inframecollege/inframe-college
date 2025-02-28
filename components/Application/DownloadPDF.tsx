import type React from "react"
import { Document, Page, Text, View, StyleSheet, Image, pdf, Font, Path, Svg } from "@react-pdf/renderer"
import { toast } from "sonner"

// Register Poppins font
Font.register({
  family: "Poppins",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrFJA.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9V1s.ttf",
      fontWeight: 500,
    },
    {
      src: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7V1s.ttf",
      fontWeight: 700,
    },
    // Add the italic variant
    {
      src: "https://fonts.gstatic.com/s/poppins/v20/pxiDyp8kv8JHgFVrJJLm21llEA.ttf",
      fontWeight: 400,
      fontStyle: "italic",
    },
  ],
})

// Black and white styles only - enhanced for better layout
const styles = StyleSheet.create({
  page: {
    padding: 30, // Reduced padding
    fontSize: 10, // Smaller base font size
    fontFamily: "Poppins",
    color: "#000000",
    border: "12px solid black",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15, // Reduced margin
    borderBottom: "1pt solid black",
    paddingBottom: 8,
  },
  headerLeft: {
    width: "70%",
  },
  logo: {
    width: 150,
    height: 50,
    marginBottom: 5,
  },
  tagline: {
    fontSize: 8,
    marginBottom: 10,
    fontWeight: 500,
  },
  address: {
    fontSize: 9,
    marginTop: 5,
  },
  addressLine: {
    marginBottom: 2,
  },
  contact: {
    fontSize: 9,
    marginTop: 5,
  },
  photoSpace: {
    width: 100,
    height: 120,
    border: "1pt solid black",
    padding: 2,
  },
  photoText: {
    fontSize: 8,
    textAlign: "center",
  },
  formTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 3,
  },
  formInstruction: {
    fontSize: 8,
    marginBottom: 10,
    fontStyle: "italic",
  },
  formRow: {
    flexDirection: "row",
    marginBottom: 3, // Reduced margin
    borderBottom: "0.5pt dotted black",
    paddingBottom: 1,
  },
  label: {
    width: "30%",
    fontSize: 9,
    fontWeight: 500,
  },
  value: {
    flex: 1,
    fontSize: 9,
  },
  CategorycheckboxContainer: {
    flexDirection: "row",

    marginBottom: 6,
  },
  ReligioncheckboxContainer: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 6,
  },
  religionsWrapper: {
    flex: 1,
    flexDirection: "column", // Stack the rows vertically
  },
  religionRow: {
    flexDirection: "row", // Items in each row are horizontal
    marginBottom: 3, // Space between rows
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "33%", // Each checkbox takes roughly a third of the available space
  },
  checkbox: {
    width: 12,
    height: 12,
    border: "1pt solid black",
    marginRight: 5,
  },
  checkboxChecked: {
    width: 12,
    height: 12,
    border: "1pt solid black",
    marginRight: 5,
    backgroundColor: "black",
  },
  checkboxLabel: {
    fontSize: 10,
    marginRight: 15,
  },
  table: {
    marginTop: 10,
    border: "1pt solid black",
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1pt solid black",
    fontSize: 7,
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    borderBottom: "1pt solid black",
    fontSize: 7,
  },
  tableCell: {
    flex: 1,
    padding: 5,

    borderRight: "1pt solid black",
    textAlign: "center",
  },
  guardianSection: {
    marginTop: 6, // Reduced margin
    borderTop: "1pt solid black",
    paddingTop: 4,
  },
  guardianColumns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  guardianColumn: {
    width: "48%",
  },
  signatureSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 70,
    marginTop: 20,
    paddingTop: 10,
    borderTop: "1pt solid black",
  },
  signatureBox: {
    width: "50%",
  },
  signatureImage: {
    width: 150,
    height: 50,
    marginTop: 5,
  },
  dottedUnderline: {
    borderBottom: "1pt dotted black",
    paddingBottom: 2,
    marginTop: 5,
  },
  // Enhanced footer style to match the provided image
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: "#ffffff",
    borderTop: "1pt solid black",
  },
  footerContent: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: "center",
    height: "100%",
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15, // Space between items
  },
  footerText: {
    fontSize: 7,
    marginLeft: 3,
  },
  addressText: {
    fontSize: 7,
    marginLeft: 3,
    maxWidth: 230, // Limit width to prevent overlap
  },
  websiteText: {
    fontSize: 7,
    marginLeft: 3,
    maxWidth: 120,
  },
  emailText: {
    fontSize: 7,
    marginLeft: 3,
    maxWidth: 120,
  },
  footerIconContainer: {
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  termsSection: {
    marginTop: 10,
    fontSize: 8, // Smaller font for terms
  },
  termItem: {
    marginBottom: 1.5, // Tighter spacing
  },
  // Emergency contact section
  emergencySection: {
    marginTop: 8,
    borderTop: "1pt solid black",
    paddingTop: 4,
  },
  emergencyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
    borderBottom: "0.5pt dotted black",
    paddingBottom: 1,
  },
  emergencyField: {
    flex: 1,
  },
  emergencyLabel: {
    fontSize: 9,
    fontWeight: 500,
    marginRight: 5,
  },
  emergencyValue: {
    fontSize: 9,
  },
})

const ApplicationFormPDF: React.FC<{ formData: any }> = ({ formData }) => {
  const termsAndConditions = [
    "The applicant must fulfill the eligibility criteria as specified in the admission guidelines for the program.",
    "Admission is subject to verification of all original documents during the admission process.",
    "If 12th results awaited and student doesn't qualified that school will not be liable for it.",
    "The applicant must provide accurate, current, and complete information in the admission form.",
    "Any misinformation or false documents will result in immediate disqualification and cancellation of admission.",
    "The submission of the admission form does not guarantee admission.",
    "Failure to provide the required documents within the stipulated time frame may result in rejection of the application.",
    "Admission is confirmed only after the payment of the full admission fee, as mentioned in the fee structure.",
    "The fee is non-refundable in any circumstances.",
    "Failure to make timely payments may result in suspension or termination of enrollment. 50rs per day penalty would be taken for late fees payment.",
    "The admission will be confirmed after verification of all documents and payment of fees.",
    "The institution reserves the right to revoke admission at any stage if any discrepancies are found.",
    "Upon admission, the student agrees to abide by the rules and regulations of the institution.",
    "Any violation of the code of conduct or disciplinary guidelines may lead to expulsion.",
    "The information provided in the admission form will be used solely for the admission process and will remain confidential.",
    "The institution may use the data for internal purposes like communication, announcements, or records maintenance.",
    "The institution reserves the right to deny admission to any applicant without providing specific reasons.",
    "The institution reserves the right to modify the terms and conditions of admission at any time without prior notice.",
    "Regular attendance and participation are mandatory for successful course completion.",
    "Course in non transferable and fees is not refundable in any case.",
    "Students wishing to withdraw from the course must notify the institution in writing.",
    "Exams would be held in different centre if approved by University & main centre.",
    "School reserves the right to change or cancel any test center/city at its discretion, if required.",
  ]

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header with Logo and Address */}
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <Image src={"/pixelcut-export4.png"} style={styles.logo} />

            <View style={styles.contact}>
              <Text>Admissions: +91 9649 9649 37</Text>
              <Text>Email: info@inframeschool.com</Text>
            </View>
          </View>
          <View style={styles.photoSpace}>
            {formData.profilePhoto ? (
              <Image src={formData.profilePhoto || "/placeholder.svg"} style={{ width: "100%", height: "100%" }} />
            ) : (
              <Text style={styles.photoText}>
                Paste your recently taken{"\n"}passport size color{"\n"}
                photograph here.{"\n"}Do not staple{"\n"}the photo.
              </Text>
            )}
          </View>
        </View>

        {/* Basic Information */}
        <View style={styles.formRow}>
          <Text style={styles.label}>Application Form No:</Text>
          <Text style={styles.value}>REG2024001</Text>
          <Text style={styles.label}>Session:</Text>
          <Text style={styles.value}>{formData.session}</Text>
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Course:</Text>
          <Text style={styles.value}>{formData.course}</Text>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>Program:</Text>
          <Text style={styles.value}>{formData.branch}</Text>
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Name of the Applicant:</Text>
          <Text style={styles.value}>{`${formData.firstName} ${formData.middleName || ""} ${formData.lastName}`}</Text>
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Father's Name:</Text>
          <Text style={styles.value}>{formData.fatherName}</Text>
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Mother's Name:</Text>
          <Text style={styles.value}>{formData.motherName}</Text>
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.value}>{formData.dateOfBirth}</Text>
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>State of Domicile:</Text>
          <Text style={styles.value}>{formData.state}</Text>
        </View>
        <View style={styles.formRow}>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.value}>{formData.city}</Text>
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>{formData.gender}</Text>
        </View>

        {/* Category and Religion Selection */}
        <View style={styles.CategorycheckboxContainer}>
          <Text style={styles.label}>Category:</Text>
          {["Gen", "OBC", "SC", "ST", "PwD"].map((cat) => (
            <View key={cat} style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={formData.category === cat ? styles.checkboxChecked : styles.checkbox} />
              <Text style={styles.checkboxLabel}>{cat}</Text>
            </View>
          ))}
        </View>

        <View style={styles.ReligioncheckboxContainer}>
          <Text style={styles.label}>Religion:</Text>
          <View style={styles.religionsWrapper}>
            {/* First row of religions */}
            <View style={styles.religionRow}>
              {["Hinduism", "Islam", "Sikhism"].map((rel) => (
                <View key={rel} style={styles.checkboxWrapper}>
                  <View style={formData.religion === rel ? styles.checkboxChecked : styles.checkbox} />
                  <Text style={styles.checkboxLabel}>{rel}</Text>
                </View>
              ))}
            </View>

            {/* Second row of religions */}
            <View style={styles.religionRow}>
              {["Parsism", "Buddhism", "Jainism"].map((rel) => (
                <View key={rel} style={styles.checkboxWrapper}>
                  <View style={formData.religion === rel ? styles.checkboxChecked : styles.checkbox} />
                  <Text style={styles.checkboxLabel}>{rel}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Contact Information */}
        <View style={styles.formRow}>
          <Text style={styles.label}>Student Mobile No:</Text>
          <Text style={styles.value}>{formData.mobile}</Text>
          <Text style={styles.label}>Email Id:</Text>
          <Text style={styles.value}>{formData.email}</Text>
        </View>

        <View style={styles.formRow}>
          <Text style={styles.label}>Student Aadhar Card No:</Text>
          <Text style={styles.value}>{formData.adharCard}</Text>
        </View>

        {/* Address */}
        <View style={styles.formRow}>
          <Text style={styles.label}>Student Address:</Text>
          <Text style={styles.value}>{formData.permanentAddress}</Text>
        </View>

        {formData.temporaryAddress && (
          <View style={styles.formRow}>
            <Text style={styles.label}>Student PG/Hostel/Temporary Address:</Text>
            <Text style={styles.value}>{formData.temporaryAddress}</Text>
          </View>
        )}

        {/* Guardian Details */}
        <View style={{ ...styles.guardianSection, marginTop: 15 }}>
          <Text style={styles.formTitle}>GUARDIAN DETAILS:</Text>
          <View style={styles.guardianColumns}>
            {/* Father's Details */}
            <View style={styles.guardianColumn}>
              <View style={styles.formRow}>
                <Text style={styles.label}>Father's Name:</Text>
                <Text style={styles.value}>{formData.fatherName}</Text>
              </View>
              <View style={styles.formRow}>
                <Text style={styles.label}>Mobile No:</Text>
                <Text style={styles.value}>{formData.fatherMobile}</Text>
              </View>
              <View style={styles.formRow}>
                <Text style={styles.label}>Email-Id:</Text>
                <Text style={styles.value}>{formData.fatherEmail}</Text>
              </View>
              <View style={styles.formRow}>
                <Text style={styles.label}>Educational Qualification:</Text>
                <Text style={styles.value}>{formData.fatherEducation}</Text>
              </View>
              <View style={styles.formRow}>
                <Text style={styles.label}>Profession:</Text>
                <Text style={styles.value}>{formData.fatherProfession}</Text>
              </View>
              <View style={styles.formRow}>
                <Text style={styles.label}>Annual Income (in Rs.):</Text>
                <Text style={styles.value}>{formData.fatherIncome}</Text>
              </View>
            </View>

            {/* Mother's Details */}
            <View style={styles.guardianColumn}>
              <View style={styles.formRow}>
                <Text style={styles.label}>Mother's Name:</Text>
                <Text style={styles.value}>{formData.motherName}</Text>
              </View>
              <View style={styles.formRow}>
                <Text style={styles.label}>Mobile No:</Text>
                <Text style={styles.value}>{formData.motherMobile}</Text>
              </View>
              <View style={styles.formRow}>
                <Text style={styles.label}>Email-Id:</Text>
                <Text style={styles.value}>{formData.motherEmail}</Text>
              </View>
              <View style={styles.formRow}>
                <Text style={styles.label}>Educational Qualification:</Text>
                <Text style={styles.value}>{formData.motherEducation}</Text>
              </View>
              <View style={styles.formRow}>
                <Text style={styles.label}>Profession:</Text>
                <Text style={styles.value}>{formData.motherProfession}</Text>
              </View>
              <View style={styles.formRow}>
                <Text style={styles.label}>Annual Income (in Rs.):</Text>
                <Text style={styles.value}>{formData.motherIncome}</Text>
              </View>
            </View>
          </View>
          {/* Guardian Details (if different from parents) */}
          {formData.hasGuardian && (
            <View style={{ marginTop: 10 }}>
              <Text style={[styles.formTitle, { fontSize: 9 }]}>GUARDIAN DETAILS (If different from parents):</Text>
              <View style={styles.guardianColumns}>
                <View style={styles.guardianColumn}>
                  <View style={styles.formRow}>
                    <Text style={styles.label}>Guardian's Name:</Text>
                    <Text style={styles.value}>{formData.guardianName}</Text>
                  </View>
                  <View style={styles.formRow}>
                    <Text style={styles.label}>Mobile No:</Text>
                    <Text style={styles.value}>{formData.guardianMobile}</Text>
                  </View>
                  <View style={styles.formRow}>
                    <Text style={styles.label}>Email-Id:</Text>
                    <Text style={styles.value}>{formData.guardianEmail}</Text>
                  </View>
                </View>
                <View style={styles.guardianColumn}>
                  <View style={styles.formRow}>
                    <Text style={styles.label}>Relationship:</Text>
                    <Text style={styles.value}>{formData.guardianRelation}</Text>
                  </View>
                  <View style={styles.formRow}>
                    <Text style={styles.label}>Profession:</Text>
                    <Text style={styles.value}>{formData.guardianProfession}</Text>
                  </View>
                  <View style={styles.formRow}>
                    <Text style={styles.label}>Address:</Text>
                    <Text style={styles.value}>{formData.guardianAddress}</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>

        <View style={[styles.formRow, { marginTop: 15 }]}>
          <Text style={styles.label}>Parent's Permanent Residence Address:</Text>
          <Text style={styles.value}>{formData.parentsPermanentAddress}</Text>
        </View>

        {/* Emergency Contact */}
        <View style={[styles.emergencySection, { marginTop: 15 }]}>
          <Text style={styles.formTitle}>EMERGENCY MOBILE NO./EMAIL (Other than parents):</Text>
          <View style={styles.emergencyRow}>
            <View style={styles.emergencyField}>
              <Text style={styles.emergencyLabel}>Relationship:</Text>
              <Text style={styles.emergencyValue}>{formData.emergencyContactRelation}</Text>
            </View>
            <View style={styles.emergencyField}>
              <Text style={styles.emergencyLabel}>Mobile No:</Text>
              <Text style={styles.emergencyValue}>{formData.emergencyContactMobile}</Text>
            </View>
            <View style={styles.emergencyField}>
              <Text style={styles.emergencyLabel}>Email-Id:</Text>
              <Text style={styles.emergencyValue}>{formData.emergencyContactEmail}</Text>
            </View>
          </View>
        </View>
      </Page>

      {/* Page 2 - Educational Details and Terms */}
      <Page size="A4" style={[styles.page, { paddingTop: 20 }]}>
        <Text style={styles.formTitle}>EDUCATIONAL DETAILS:</Text>
        <Text style={{ fontSize: 8, marginBottom: 8 }}>(Start from the recent course to Std. X)</Text>

        <View style={styles.formRow}>
          <Text style={styles.label}>Name as per 10th Marksheet:</Text>
          <Text style={styles.value}>{formData.nameAs10th}</Text>
        </View>

        {/* Education Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableCell}>Exam Board/University</Text>
            <Text style={styles.tableCell}>School/College/Institution</Text>
            <Text style={styles.tableCell}>Subjects/Stream/Programme Name</Text>
            <Text style={styles.tableCell}>Year of Passing</Text>
            <Text style={styles.tableCell}>Grade/CGPA/Percentage</Text>
            <Text style={styles.tableCell}>Duration of Programme</Text>
          </View>
          {formData.education?.map((edu, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{["X", "XI", "XII", "UG/Diploma", "Other"][index]}</Text>
              <Text style={styles.tableCell}>{edu.institution}</Text>
              <Text style={styles.tableCell}>{edu.stream}</Text>
              <Text style={styles.tableCell}>{edu.yearOfPassing}</Text>
              <Text style={styles.tableCell}>{edu.grade}</Text>
              <Text style={styles.tableCell}>{edu.duration || "-"}</Text>
            </View>
          ))}
        </View>

        {/* Terms and Conditions */}
        <View style={[styles.termsSection, { marginTop: 6 }]}>
          <Text style={[styles.formTitle, { marginBottom: 4 }]}>TERMS & CONDITION:</Text>
          {termsAndConditions.map((term, index) => (
            <Text key={index} style={styles.termItem}>
              • {term}
            </Text>
          ))}
        </View>

        {/* Signature Section */}
        <View style={[styles.signatureSection, { marginTop: 15 }]}>
          <View style={styles.signatureBox}>
            {formData.applicantSignature && (
              <Image src={formData.applicantSignature || "/placeholder.svg"} style={styles.signatureImage} />
            )}
            <Text style={{ textAlign: "center" }}>Signature of Applicant:</Text>
          </View>
          <View style={styles.signatureBox}>
            {formData.applicantSignature && (
              <Image src={formData.guardianSignature || "/placeholder.svg"} style={styles.signatureImage} />
            )}
            <Text style={{ textAlign: "center" }}>Signature of Parent:</Text>
          </View>
        </View>

        {/* Enhanced Footer to match the image */}
        <View style={styles.footerContainer} fixed>
          <View
            style={{
              position: "absolute",
              top: -20,
              right: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 7, marginRight: 3 }}>Date of form filling:</Text>
            <View>
              <Text style={{ fontSize: 7 }}>{formData.formFilingDate}</Text>
            </View>
          </View>
          <View style={styles.footerContent}>
            <View style={styles.footerItem}>
              <Svg width="10" height="10" viewBox="0 0 24 24" style={styles.footerIcon}>
                <Path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                  fill="black"
                />
              </Svg>
              <Text style={styles.websiteText}>www.Inframeschool.com</Text>
            </View>

            <View style={styles.footerItem}>
              <Svg width="10" height="10" viewBox="0 0 24 24" style={styles.footerIcon}>
                <Path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  fill="black"
                />
              </Svg>
              <Text style={styles.addressText}>
                B-09 Pal Link Road Behind Kamla Nagar Hospital Marudhar Nagar Jodhpur (342008) Rajasthan
              </Text>
            </View>

            <View style={styles.footerItem}>
              <Svg width="10" height="10" viewBox="0 0 24 24">
                <Path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                  fill="black"
                />
              </Svg>
              <Text style={styles.footerText}>9649-9649-37</Text>
            </View>

            <View style={styles.footerItem}>
              <Svg width="10" height="10" viewBox="0 0 24 24" style={styles.footerIcon}>
                <Path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                  fill="black"
                />
              </Svg>
              <Text style={styles.emailText}>info@inframeschool.com</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export const downloadApplicationForm = async (formData: any) => {
  try {
    const loadingToast = toast.loading("Generating application form...")

    // Create PDF
    const blob = await pdf(<ApplicationFormPDF formData={formData} />).toBlob()

    // Create download link
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `application_form_${formData.firstName}_${formData.lastName}.pdf`

    // Trigger download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Cleanup
    URL.revokeObjectURL(url)

    toast.dismiss(loadingToast)
    toast.success("Application form downloaded successfully!")
  } catch (error) {
    console.error("Error generating PDF:", error)
    toast.error("Failed to generate application form. Please try again.")
  }
}

