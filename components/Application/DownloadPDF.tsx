import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, pdf } from '@react-pdf/renderer';
import { format } from 'date-fns';
import { LOGO } from '../../utils/constant';
import { toast } from 'sonner';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderBottom: '1pt solid #666',
    paddingBottom: 10,
  },
  logo: {
    width: 120,
    height: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    padding: 5,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    width: '30%',
    fontSize: 10,
    fontWeight: 'bold',
  },
  value: {
    width: '70%',
    fontSize: 10,
  },
  photo: {
    width: 100,
    height: 120,
    marginLeft: 'auto',
  },
  address: {
    fontSize: 10,
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 8,
    color: '#666',
  },
});

// Create Document Component
const ApplicationFormPDF = ({ formData, profilePhoto }:any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Image src={LOGO} style={styles.logo} />
          <Text style={styles.address}>09, Pal Link Road</Text>
          <Text style={styles.address}>Marudhar Nagar, Kamla Nehru Nagar</Text>
          <Text style={styles.address}>Shyam Nagar, Jodhpur</Text>
          <Text style={styles.address}>Rajasthan 342008</Text>
        </View>
        <Image src={profilePhoto} style={styles.photo} />
      </View>

      <Text style={styles.title}>Application Form</Text>

      {/* Personal Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Details</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Application ID:</Text>
          <Text style={styles.value}>REG2024001</Text>
        </View>
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

      {/* Footer */}
      <View style={styles.footer}>
        <Text>Form Filing Date: {formData.formFilingDate}</Text>
        <Text>This is a computer-generated document. No signature is required.</Text>
      </View>
    </Page>
  </Document>
);

// PDF Download Function
export const downloadApplicationForm = async (formData:any) => {
    // Dynamically import react-pdf
    const { pdf } = await import('@react-pdf/renderer');
    
    try {
      const blob = await pdf(<ApplicationFormPDF formData={formData} profilePhoto={formData.profilePhoto} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `application_form_${formData.firstName}_${formData.lastName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Error downloading application form');
    }
  };