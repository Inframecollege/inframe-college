import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, pdf } from '@react-pdf/renderer';
import { format } from 'date-fns';
import { LOGO } from '../../utils/constant';
import { toast } from 'sonner';

// Enhanced styles with a more professional look
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    borderBottom: '2pt solid #1a4e8a',
    paddingBottom: 15,
  },
  logo: {
    width: 140,
    height: 45,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#1a4e8a',
    textTransform: 'uppercase',
  },
  section: {
    marginBottom: 25,
    borderRadius: 4,
    border: '1pt solid #e0e0e0',
    padding: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#1a4e8a',
    color: 'white',
    padding: 8,
    marginBottom: 12,
    borderRadius: 3,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingBottom: 3,
    borderBottom: '0.5pt solid #f0f0f0',
  },
  label: {
    width: '30%',
    fontSize: 11,
    fontWeight: 'bold',
    color: '#444444',
  },
  value: {
    width: '70%',
    fontSize: 11,
    color: '#333333',
  },
  photoContainer: {
    border: '1pt solid #cccccc',
    padding: 3,
    backgroundColor: '#f9f9f9',
  },
  photo: {
    width: 100,
    height: 120,
    marginLeft: 'auto',
  },
  addressBlock: {
    marginTop: 5,
  },
  address: {
    fontSize: 10,
    marginBottom: 3,
    color: '#555555',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 9,
    color: '#666666',
    borderTop: '1pt solid #e0e0e0',
    paddingTop: 10,
  },
  applicationId: {
    position: 'absolute',
    top: 40,
    right: 40,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1a4e8a',
    border: '1pt solid #1a4e8a',
    padding: 5,
    borderRadius: 3,
  },
  watermark: {
    position: 'absolute',
    bottom: 250,
    left: 150,
    right: 150,
    fontSize: 60,
    color: 'rgba(200, 200, 200, 0.2)',
    transform: 'rotate(-45deg)',
    textAlign: 'center',
  },
  infoRow: {
    fontSize: 9,
    color: '#777777',
    marginTop: 10,
    textAlign: 'center',
  },
});

// Enhanced Document Component
const ApplicationFormPDF = ({ formData, profilePhoto }) => {
  const formattedDate = formData.formFilingDate 
    ? format(new Date(formData.formFilingDate), 'dd MMM yyyy')
    : format(new Date(), 'dd MMM yyyy');
  
  const applicationId = formData.applicationId || 'REG2024001';
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Watermark */}
        <Text style={styles.watermark}>APPLICATION</Text>
        
        {/* Application ID */}
        <Text style={styles.applicationId}>ID: {applicationId}</Text>
        
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Image src={LOGO} style={styles.logo} />
            <View style={styles.addressBlock}>
              <Text style={styles.address}>09, Pal Link Road</Text>
              <Text style={styles.address}>Marudhar Nagar, Kamla Nehru Nagar</Text>
              <Text style={styles.address}>Shyam Nagar, Jodhpur</Text>
              <Text style={styles.address}>Rajasthan 342008</Text>
            </View>
          </View>
          <View style={styles.photoContainer}>
            <Image src={profilePhoto} style={styles.photo} />
          </View>
        </View>

        <Text style={styles.title}>Application Form</Text>

        {/* Personal Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Full Name:</Text>
            <Text style={styles.value}>
              {`${formData.firstName} ${formData.middleName || ''} ${formData.lastName}`}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Date of Birth:</Text>
            <Text style={styles.value}>{formData.dateOfBirth}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Gender:</Text>
            <Text style={styles.value}>{formData.gender}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Category:</Text>
            <Text style={styles.value}>{formData.category}</Text>
          </View>
        </View>

        {/* Contact Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{formData.email}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Mobile:</Text>
            <Text style={styles.value}>{formData.mobile}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{formData.permanentAddress}</Text>
          </View>
        </View>

        {/* Parent Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Parent Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Father's Name:</Text>
            <Text style={styles.value}>{formData.fatherName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Mother's Name:</Text>
            <Text style={styles.value}>{formData.motherName}</Text>
          </View>
        </View>

        {/* Course Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course Details</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Course Type:</Text>
            <Text style={styles.value}>{formData.courseType}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Campus:</Text>
            <Text style={styles.value}>{formData.campus}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Program Type:</Text>
            <Text style={styles.value}>{formData.programType}</Text>
          </View>
        </View>

        {/* Info Row */}
        <Text style={styles.infoRow}>
          Please verify all information carefully before submission. For any queries, contact the admissions office.
        </Text>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>Form Filing Date: {formattedDate}</Text>
          <Text>This is a computer-generated document. No signature is required.</Text>
        </View>
      </Page>
    </Document>
  );
};

// Enhanced PDF Download Function with better error handling
export const downloadApplicationForm = async (formData) => {
  // Validate required fields
  if (!formData.firstName || !formData.lastName) {
    toast.error('Required information missing. Please complete the form.');
    return;
  }
  
  // Show loading toast
  const loadingToast = toast.loading('Generating application form...');
  
  try {
    // Dynamically import react-pdf
    const { pdf } = await import('@react-pdf/renderer');
    
    const blob = await pdf(
      <ApplicationFormPDF 
        formData={formData} 
        profilePhoto={formData.profilePhoto || LOGO} // Fallback to logo if no photo
      />
    ).toBlob();
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `application_form_${formData.firstName}_${formData.lastName}_${new Date().getTime()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // Dismiss loading toast and show success
    toast.dismiss(loadingToast);
    toast.success('Application form downloaded successfully!');
  } catch (error) {
    console.error('Error generating PDF:', error);
    toast.dismiss(loadingToast);
    toast.error('Error downloading application form. Please try again.');
  }
};