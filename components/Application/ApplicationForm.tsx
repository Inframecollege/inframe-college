'use client'
import { useState, useRef } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Poppins } from 'next/font/google';
import { toast } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Schema definitions for each step
// const personalDetailsSchema = z.object({
//   firstName: z.string().min(1, "First name is required"),
//   lastName: z.string().min(1, "Last name is required"),
//   email: z.string().email("Invalid email address"),
//   mobile: z.string().regex(/^\+?[1-9]\d{9,11}$/, "Invalid mobile number"),
//   gender: z.enum(["male", "female", "other"], {
//     required_error: "Please select a gender",
//   }),
// //   profilePhoto: z.any().refine((file) => file?.length > 0, "Profile photo is required"),
//   fatherName: z.string().min(1, "Father's name is required"),
//   motherName: z.string().min(1, "Mother's name is required"),
//   dateOfBirth: z.string().min(1, "Date of birth is required"),
//   category: z.enum(["Gen", "OBC", "SC", "ST", "DC", "PD"], {
//     required_error: "Please select a category",
//   }),
//   religion: z.enum(["Hinduism", "Islam", "Sikhism", "Jainism", "Parsism", "Buddhism"], {
//     required_error: "Please select a religion",
//   }),
//   adharCard: z.string().min(12, "Invalid Aadhar number").max(12),
//   permanentAddress: z.string().min(1, "Permanent address is required"),
//   temporaryAddress: z.string().optional(),
// });

// const educationalDetailsSchema = z.object({
//   nameAs10th: z.string().min(1, "Name as per 10th marksheet is required"),
//   education: z.array(z.object({
//     institution: z.string().min(1, "Institution name is required"),
//     stream: z.string().min(1, "Stream is required"),
//     yearOfPassing: z.string().min(4, "Valid year required"),
//     grade: z.string().min(1, "Grade is required"),
//     duration: z.string().min(1, "Duration is required"),
//     marksheet: z.any().refine((file) => file?.length > 0, "Marksheet is required"),
//   })).length(4),
// });

// const programSelectionSchema = z.object({
//   courseType: z.string().min(1, "Course type is required"),
//   campus: z.string().min(1, "Campus selection is required"),
//   programType: z.string().min(1, "Program type is required"),
// });

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsDialogOpen, setTermsDialogOpen] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({});
  const termsContentRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    trigger,
    setValue,
  } = useForm({
    // resolver: zodResolver(
    //   currentStep === 1 
    //     ? personalDetailsSchema 
    //     : currentStep === 2 
    //     ? educationalDetailsSchema 
    //     : programSelectionSchema
    // ),
    mode: "onChange"
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const steps = [
    "Personal Details",
    "Educational Details",
    "Program Selection",
    "Payment",
    "Complete"
  ];

  const handleTermsScroll = (e) => {
    const element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      setHasScrolledToBottom(true);
    }
  };

interface FormData {
    firstName?: string;
    lastName?: string;
    email?: string;
    mobile?: string;
    gender?: string;
    fatherName?: string;
    motherName?: string;
    dateOfBirth?: string;
    category?: string;
    religion?: string;
    adharCard?: string;
    permanentAddress?: string;
    temporaryAddress?: string;
    profilePhoto?: FileList;
    nameAs10th?: string;
    education?: {
        institution?: string;
        stream?: string;
        yearOfPassing?: string;
        grade?: string;
        marksheet?: FileList;
    }[];
    courseType?: string;
    campus?: string;
    programType?: string;
}

const onSubmit = async (data: FormData) => {
    const newFormData = { ...formData, ...data };
    setFormData(newFormData);
    
    if (currentStep < steps.length - 1) {
        const isStepValid = await trigger();
        if (isStepValid) {
            if (currentStep === 3) {
                setTermsDialogOpen(true);
            } else {
                setCurrentStep(currentStep + 1);
            }
            console.log("Current step data:", data);
        } else {
            toast.error("Please fill all required fields correctly");
        }
    } else {
        console.log("Complete form data:", newFormData);
        toast.success("Form submitted successfully!");
    }
};

  const renderPersonalDetails = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input 
            {...register('firstName')}
            id="firstName" 
            placeholder="Enter first name"
            className="h-12" 
          />
          {errors.firstName && (
            <Alert variant="destructive">
              <AlertDescription>{errors.firstName.message}</AlertDescription>
            </Alert>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input 
            {...register('lastName')}
            id="lastName" 
            placeholder="Enter last name"
            className="h-12" 
          />
          {errors.lastName && (
            <Alert variant="destructive">
              <AlertDescription>{errors.lastName.message}</AlertDescription>
            </Alert>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="fatherName">Father's Name *</Label>
          <Input 
            {...register('fatherName')}
            id="fatherName" 
            placeholder="Enter father's name"
            className="h-12" 
          />
          {errors.fatherName && (
            <Alert variant="destructive">
              <AlertDescription>{errors.fatherName.message}</AlertDescription>
            </Alert>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="motherName">Mother's Name *</Label>
          <Input 
            {...register('motherName')}
            id="motherName" 
            placeholder="Enter mother's name"
            className="h-12" 
          />
          {errors.motherName && (
            <Alert variant="destructive">
              <AlertDescription>{errors.motherName.message}</AlertDescription>
            </Alert>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input 
            {...register('email')}
            type="email"
            id="email" 
            placeholder="Enter email"
            className="h-12" 
          />
          {errors.email && (
            <Alert variant="destructive">
              <AlertDescription>{errors.email.message}</AlertDescription>
            </Alert>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile">Mobile Number *</Label>
          <Input 
            {...register('mobile')}
            id="mobile" 
            placeholder="+91 xxxxxxxxxx"
            className="h-12" 
          />
          {errors.mobile && (
            <Alert variant="destructive">
              <AlertDescription>{errors.mobile.message}</AlertDescription>
            </Alert>
          )}
        </div>

        {/* Personal Information */}
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth *</Label>
          <Input 
            {...register('dateOfBirth')}
            type="date"
            id="dateOfBirth" 
            className="h-12" 
          />
          {errors.dateOfBirth && (
            <Alert variant="destructive">
              <AlertDescription>{errors.dateOfBirth.message}</AlertDescription>
            </Alert>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="adharCard">Aadhar Card Number *</Label>
          <Input 
            {...register('adharCard')}
            id="adharCard" 
            placeholder="Enter 12-digit Aadhar number"
            className="h-12" 
          />
          {errors.adharCard && (
            <Alert variant="destructive">
              <AlertDescription>{errors.adharCard.message}</AlertDescription>
            </Alert>
          )}
        </div>

        {/* Category and Religion */}
        <div className="space-y-2">
          <Label>Category *</Label>
          <Select onValueChange={(value) => setValue('category', value)}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Gen">General</SelectItem>
              <SelectItem value="OBC">OBC</SelectItem>
              <SelectItem value="SC">SC</SelectItem>
              <SelectItem value="ST">ST</SelectItem>
              <SelectItem value="DC">DC</SelectItem>
              <SelectItem value="PD">PD</SelectItem>
            </SelectContent>
          </Select>
          {errors.category && (
            <Alert variant="destructive">
              <AlertDescription>{errors.category.message}</AlertDescription>
            </Alert>
          )}
        </div>

        <div className="space-y-2">
          <Label>Religion *</Label>
          <Select onValueChange={(value) => setValue('religion', value)}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select religion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Hinduism">Hinduism</SelectItem>
              <SelectItem value="Islam">Islam</SelectItem>
              <SelectItem value="Sikhism">Sikhism</SelectItem>
              <SelectItem value="Jainism">Jainism</SelectItem>
              <SelectItem value="Parsism">Parsism</SelectItem>
              <SelectItem value="Buddhism">Buddhism</SelectItem>
            </SelectContent>
          </Select>
          {errors.religion && (
            <Alert variant="destructive">
              <AlertDescription>{errors.religion.message}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>

      {/* Gender Selection */}
      <div className="space-y-2">
        <Label>Gender *</Label>
        <RadioGroup 
          defaultValue="male" 
          className="flex space-x-4"
          onValueChange={(value) => setValue('gender', value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">Female</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other">Other</Label>
          </div>
        </RadioGroup>
        {errors.gender && (
          <Alert variant="destructive">
            <AlertDescription>{errors.gender.message}</AlertDescription>
          </Alert>
        )}
      </div>

      {/* Profile Photo Upload */}
      <div className="space-y-2">
        <Label>Profile Photo *</Label>
        <div className="border-2 border-dashed rounded-lg p-6 text-center">
          <Input 
            type="file" 
            accept="image/*"
            className="hidden" 
            id="profilePhoto"
            {...register('profilePhoto')}
            onChange={handleImageChange}
          />
          <Label 
            htmlFor="profilePhoto" 
            className="cursor-pointer text-blue-500 hover:text-blue-600"
          >
            Click to upload or drag and drop
          </Label>
          {imagePreview && (
            <div className="mt-4">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="mx-auto max-h-40 rounded-lg shadow-md" 
              />
            </div>
          )}
          <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 5MB</p>
        </div>
        {errors.profilePhoto && (
          <Alert variant="destructive">
            <AlertDescription className='text-red-600'>{errors.profilePhoto.message}</AlertDescription>
          </Alert>
        )}
      </div>

      {/* Address Information */}
      <div className="space-y-2">
        <Label htmlFor="permanentAddress">Permanent Address *</Label>
        <Input 
          {...register('permanentAddress')}
          id="permanentAddress" 
          placeholder="Enter permanent address"
          className="h-12" 
        />
        {errors.permanentAddress && (
          <Alert variant="destructive">
            <AlertDescription>{errors.permanentAddress.message}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="temporaryAddress">Temporary Address (Optional)</Label>
        <Input 
          {...register('temporaryAddress')}
          id="temporaryAddress" 
          placeholder="Enter temporary address if different from permanent address"
          className="h-12" 
        />
        {errors.temporaryAddress && (
          <Alert variant="destructive">
            <AlertDescription>{errors.temporaryAddress.message}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );

  const renderEducationalDetails = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="nameAs10th">Name as per 10th Marksheet *</Label>
        <Input 
          {...register('nameAs10th')}
          id="nameAs10th"
          placeholder="Enter name as per documents"
          className="h-12"
        />
        {errors.nameAs10th && (
          <Alert variant="destructive">
            <AlertDescription>{errors.nameAs10th.message}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-4">
        {["X", "XI", "XII", "UG/Diploma"].map((level, index) => (
          <Card key={level} className="p-4">
            <CardHeader>
              <CardTitle className="text-lg">{level} Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Institution Name *</Label>
                  <Input 
                    {...register(`education.${index}.institution`)}
                    placeholder="Enter institution name"
                    className="h-12"
                  />
                  {errors.education?.[index]?.institution && (
                    <Alert variant="destructive">
                      <AlertDescription>
                        {errors.education[index].institution.message}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Stream/Subjects *</Label>
                  <Input 
                    {...register(`education.${index}.stream`)}
                    placeholder="Enter stream"
                    className="h-12"
                  />
                  {errors.education?.[index]?.stream && (
                    <Alert variant="destructive">
                      <AlertDescription>
                        {errors.education[index].stream.message}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Year of Passing *</Label>
                  <Input 
                    {...register(`education.${index}.yearOfPassing`)}
                    placeholder="YYYY"
                    className="h-12"
                    type="number"
                    min="1900"
                    max="2024"
                  />
                  {errors.education?.[index]?.yearOfPassing && (
                    <Alert variant="destructive">
                      <AlertDescription>
                        {errors.education[index].yearOfPassing.message}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Grade/Percentage *</Label>
                  <Input 
                    {...register(`education.${index}.grade`)}
                    placeholder="Enter grade"
                    className="h-12"
                  />
                  {errors.education?.[index]?.grade && (
                    <Alert variant="destructive">
                      <AlertDescription>
                        {errors.education[index].grade.message}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Upload Marksheet *</Label>
                <Input 
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  {...register(`education.${index}.marksheet`)}
                  className="h-12"
                />
                {errors.education?.[index]?.marksheet && (
                  <Alert variant="destructive">
                    <AlertDescription>
                      {errors.education[index].marksheet.message}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderProgramSelection = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Course Type *</Label>
        <Select onValueChange={(value) => setValue('courseType', value)}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Choose course type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="design">Design Course (₹1000)</SelectItem>
            <SelectItem value="art">Art Course (₹1200)</SelectItem>
            <SelectItem value="business">Business Course (₹1500)</SelectItem>
          </SelectContent>
        </Select>
        {errors.courseType && (
          <Alert variant="destructive">
            <AlertDescription>{errors.courseType.message}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label>Study Mode*</Label>
        <Select onValueChange={(value) => setValue('campus', value)}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Choose campus" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="main">Online</SelectItem>
            <SelectItem value="city">Offline</SelectItem>
          </SelectContent>
        </Select>
        {errors.campus && (
          <Alert variant="destructive">
            <AlertDescription>{errors.campus.message}</AlertDescription>
          </Alert>
        )}
      </div>
      <div className="space-y-2">
        <Label>Study Mode*</Label>
        <Select onValueChange={(value) => setValue('campus', value)}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Choose campus" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="main">Online</SelectItem>
            <SelectItem value="city">Offline</SelectItem>
          </SelectContent>
        </Select>
        {errors.campus && (
          <Alert variant="destructive">
            <AlertDescription>{errors.campus.message}</AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label>Program Type *</Label>
        <Select onValueChange={(value) => setValue('programType', value)}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Choose program type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full">Full Time</SelectItem>
            <SelectItem value="part">Part Time</SelectItem>
          </SelectContent>
        </Select>
        {errors.programType && (
          <Alert variant="destructive">
            <AlertDescription>{errors.programType.message}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Fee Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between py-2">
              <span>Registration Fee</span>
              <span className="font-semibold">₹1000.00</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Processing Fee</span>
              <span className="font-semibold">₹50.00</span>
            </div>
            <div className="flex justify-between py-2 border-t">
              <span className="font-bold">Total Amount</span>
              <span className="font-bold">₹1050.00</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Button 
        className="w-full h-12 text-lg"
        onClick={() => setCurrentStep(currentStep + 1)}
      >
        Proceed to Payment
      </Button>
      
      <p className="text-sm text-gray-500 text-center">
        You will be redirected to the payment gateway
      </p>
    </div>
  );

  const renderComplete = () => (
    <div className="text-center space-y-6 py-8">
      <div className="text-green-500 text-6xl">✓</div>
      <div>
        <h3 className="text-2xl font-bold">Registration Complete!</h3>
        <p className="text-gray-600 mt-2">
          Your application has been submitted successfully
        </p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg inline-block">
        <p className="text-sm text-gray-600">Application ID</p>
        <p className="text-xl font-bold">REG2024001</p>
      </div>
      <Button className="w-full md:w-auto">
        Download Application Form
      </Button>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderPersonalDetails();
      case 2:
        return renderEducationalDetails();
      case 3:
        return renderProgramSelection();
      case 4:
        return renderPayment();
      case 5:
        return renderComplete();
      default:
        return null;
    }
  };

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
    "School reserves the right to change or cancel any test center/city at its discretion, if required."
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br  from-purple-50 to-blue-50 p-8 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto">
        <Card className="shadow-xl">
          {/* <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-3xl text-center">Student Registration Form</CardTitle>
          </CardHeader> */}
          
          <div className="flex flex-col md:flex-row border rounded-md">
            {/* Steps sidebar */}
            <div className="w-full md:w-1/4 bg-black  text-white p-8 rounded-bl-lg">
              <h2 className="text-2xl font-bold mb-6">Application Steps</h2>
              {steps.map((step, index) => (
                <div 
                  key={step} 
                  className={`flex items-center space-x-3 mb-4 p-3 rounded-lg transition-all ${
                    currentStep === index + 1 
                      ? 'bg-yellow-400 text-black font-semibold' 
                      : currentStep > index + 1
                      ? 'text-green-400'
                      : 'text-gray-400'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep > index + 1 ? 'bg-green-500' :
                    currentStep === index + 1 ? 'bg-white text-black' : 'bg-gray-700'
                  }`}>
                    {currentStep > index + 1 ? '✓' : index + 1}
                  </div>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            {/* Form content */}
            <div className="w-full md:w-3/4 p-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                {renderStepContent()}

                <div className="flex justify-between mt-6">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="px-6"
                    >
                      Previous
                    </Button>
                  )}
                  <Button
                    type="submit"
                    className={`px-6 ${currentStep === 1 ? 'ml-auto' : ''}`}
                   
                  >
                    {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>

      <AlertDialog open={termsDialogOpen} onOpenChange={setTermsDialogOpen}>
        <AlertDialogContent className="max-w-4xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Terms and Conditions</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription 
            className="h-96 overflow-y-auto pr-4"
            onScroll={handleTermsScroll}
            ref={termsContentRef}
          >
            <div className="space-y-4">
              {termsAndConditions.map((term, index) => (
                <p key={index} className="text-sm">
                  {index + 1}. {term}
                </p>
              ))}
            </div>
          </AlertDialogDescription>
          <AlertDialogFooter>
            <Button 
              disabled={!hasScrolledToBottom}
              onClick={() => {
                setTermsAccepted(true);
                setTermsDialogOpen(false);
                setCurrentStep(4);
              }}
              className={!hasScrolledToBottom ? 'opacity-50' : ''}
            >
              {hasScrolledToBottom ? 'Accept Terms' : 'Please read all terms'}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default RegistrationForm;