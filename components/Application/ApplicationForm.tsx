"use client";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { toast } from "sonner";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
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

import { cities, coursesData, LOGO, states } from "../../utils/constant";
import { downloadApplicationForm } from "./DownloadPDF";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [termsDialogOpen, setTermsDialogOpen] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({});
  const termsContentRef = useRef(null);
  const [formFilingDate, setFormFilingDate] = useState("");
  const [applicantSignaturePreview, setApplicantSignaturePreview] =
    useState(null);
  const [guardianSignaturePreview, setGuardianSignaturePreview] =
    useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedBranchFee, setSelectedBranchFee] = useState(null);
  const [hasGuardian, setHasGuardian] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    trigger,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setFormFilingDate(formattedDate);
  }, []);

  const handleFileUpload = (e, fieldName, setPreview) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue(fieldName, file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const steps = [
    "Personal Details",
    "Educational Details",
    "Program Selection",
    "Payment",
    "Complete",
  ];

  const handleTermsScroll = (e) => {
    const element = e.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      setHasScrolledToBottom(true);
    }
  };

  const onSubmit = async (data) => {
    const isStepValid = await trigger();
    if (isStepValid) {
      const newFormData = { ...formData, ...data, formFilingDate };
      setFormData(newFormData);

      if (currentStep < steps.length - 1) {
        if (currentStep === 3) {
          setTermsDialogOpen(true);
        } else {
          setCurrentStep(currentStep + 1);
        }
        console.log("Current step data:", data);
      } else {
        console.log("Complete form data:", newFormData);
        toast.success("Form submitted successfully!");
      }
    } else {
      toast.error("Please fill all required fields correctly");
    }
  };

  const renderPersonalDetails = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center border-b pb-6 gap-10 md:gap-52">
        {/* Logo and Address Section */}
        <div className="flex flex-col  items-start  space-x-4">
          {/* Logo */}
          <Image
            src={LOGO || "/placeholder.svg"}
            alt="Inframe College Logo"
            width={150}
            height={50}
            className="object-contain mx-7"
          />
          {/* Address */}
          <div className="text-gray-700 text-sm mt-2">
            <address className="not-italic flex flex-col leading-relaxed">
              <span className="flex items-center space-x-2 ">
                <MapPinIcon className="w-4 h-4 text-gray-500" />
                <span>09, Pal Link Road</span>
              </span>
              <span className="ml-6">Marudhar Nagar, Kamla Nehru Nagar</span>
              <span className="ml-6">Shyam Nagar, Jodhpur</span>
              <span className="ml-6">Rajasthan 342008</span>
            </address>

            <div className="mt-2 text-gray-600">
              <p className="flex items-center space-x-2">
                <PhoneIcon className="w-4 h-4 text-gray-500" />
                <span>
                  Admissions:{" "}
                  <a
                    href="tel:+919649964937"
                    className="text-blue-600 hover:underline"
                  >
                    +91 9649 9649 37
                  </a>
                </span>
              </p>

              <p className="flex items-center space-x-2">
                <MailIcon className="w-4 h-4 text-gray-500" />
                <span>
                  Email:{" "}
                  <a
                    href="mailto:info@inframecollege.org"
                    className="text-blue-600 hover:underline"
                  >
                    info@inframeschool.com
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div className=" p-4 rounded-lg">
            <Label>Form Filing Date</Label>
            <p className="text-sm text-gray-500">{formFilingDate}</p>
          </div>
        </div>

        {/* Profile Photo Upload Section */}
        <div className="flex flex-col items-center space-y-3 w-full max-w-xs">
          <Label className="text-gray-700 font-medium">Profile Photo *</Label>
          <div className="border-2 border-gray-300 border-dashed w-44  p-10 text-center h-52 hover:ring-2 hover:ring-blue-500 transition relative">
            <Input
              type="file"
              accept="image/*"
              className="hidden"
              id="profilePhoto"
              onChange={(e) =>
                handleFileUpload(e, "profilePhoto", setImagePreview)
              }
            />

            {imagePreview ? (
              <div className="absolute inset-0 flex justify-center items-center">
                <img
                  src={imagePreview || "/placeholder.svg"}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <Label
                htmlFor="profilePhoto"
                className="cursor-pointer text-blue-600 hover:text-blue-700 transition"
              >
                Click to upload or drag & drop
              </Label>
            )}
            <p className="text-xs text-gray-500 mt-2">PNG, JPG up to 5MB</p>
          </div>

          {errors.profilePhoto && (
            <Alert variant="destructive" className="w-full text-center">
              <AlertDescription className="text-red-600">
                {errors.profilePhoto.message}
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>

      {/* Basic Information Section */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input
              {...register("firstName", {
                required: "First name is required",
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 characters long",
                },
              })}
              id="firstName"
              placeholder="Enter first name"
              className="h-12"
            />
            {errors.firstName && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.firstName.message}
                </AlertDescription>
              </Alert>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="firstName">Middle Name</Label>
            <Input
              {...register("middleName")}
              id="middleName"
              placeholder="Enter middle name"
              className="h-12"
            />
            {errors.middleName && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.middleName.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input
              {...register("lastName", { required: "Last name is required" })}
              id="lastName"
              placeholder="Enter last name"
              className="h-12"
            />
            {errors.lastName && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.lastName.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              {...register("email", { required: "Email is required" })}
              type="email"
              id="email"
              placeholder="Enter email"
              className="h-12"
            />
            {errors.email && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.email.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="state">State *</Label>
            <Select onValueChange={(value) => setValue("state", value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                {[...states].sort().map(
                  (
                    state // Sorting states alphabetically
                  ) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
            {errors.state && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.state.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Select onValueChange={(value) => setValue("city", value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select City" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(cities).map(([state, cityList]) =>
                  cityList.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
            {errors.city && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.city.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile Number *</Label>
            <Input
              {...register("mobile", { required: "Mobile number is required" })}
              id="mobile"
              placeholder="+91 xxxxxxxxxx"
              className="h-12"
            />
            {errors.mobile && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.mobile.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date of Birth *</Label>
            <Input
              {...register("dateOfBirth", {
                required: "Date of birth is required",
              })}
              type="date"
              id="dateOfBirth"
              className="h-12"
            />
            {errors.dateOfBirth && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.dateOfBirth.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="adharCard">Aadhar Card Number *</Label>
            <Input
              {...register("adharCard", {
                required: "Aadhar card number is required",
              })}
              id="adharCard"
              placeholder="Enter 12-digit Aadhar number"
              className="h-12"
            />
            {errors.adharCard && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.adharCard.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label>Category *</Label>
            <Select onValueChange={(value) => setValue("category", value)}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Gen">General</SelectItem>
                <SelectItem value="OBC">OBC</SelectItem>
                <SelectItem value="SC">SC</SelectItem>
                <SelectItem value="ST">ST</SelectItem>
                <SelectItem value="PD">PwD</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.category.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label>Religion *</Label>
            <Select onValueChange={(value) => setValue("religion", value)}>
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
                <AlertDescription className="text-red-600">
                  {errors.religion.message}
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </div>

      {/* Gender Selection */}
      <div className="space-y-2">
        <Label>Gender *</Label>
        <RadioGroup
          defaultValue="male"
          className="flex space-x-4"
          onValueChange={(value) => setValue("gender", value)}
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
            <AlertDescription className="text-red-600">
              {errors.gender.message}
            </AlertDescription>
          </Alert>
        )}
      </div>

      {/* Address Information */}
      <div className="space-y-2">
        <Label htmlFor="permanentAddress">Permanent Address *</Label>
        <Input
          {...register("permanentAddress", {
            required: "Permanent address is required",
          })}
          id="permanentAddress"
          placeholder="Enter permanent address"
          className="h-12"
        />
        {errors.permanentAddress && (
          <Alert variant="destructive">
            <AlertDescription className="text-red-600">
              {errors.permanentAddress.message}
            </AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="temporaryAddress">Temporary Address (Optional)</Label>
        <Input
          {...register("temporaryAddress")}
          id="temporaryAddress"
          placeholder="Enter temporary address if different from permanent address"
          className="h-12"
        />
        {errors.temporaryAddress && (
          <Alert variant="destructive">
            <AlertDescription className="text-red-600">
              {errors.temporaryAddress.message}
            </AlertDescription>
          </Alert>
        )}
      </div>

      {/* Parents Details Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Parents Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fatherName">Father's Name *</Label>
            <Input
              {...register("fatherName", {
                required: "Father's name is required",
              })}
              id="fatherName"
              placeholder="Enter father's name"
              className="h-12"
            />
            {errors.fatherName && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.fatherName.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="fatherMobile">Father's Mobile *</Label>
            <Input
              {...register("fatherMobile", {
                required: "Father's mobile is required",
              })}
              id="fatherMobile"
              placeholder="Enter father's mobile"
              className="h-12"
            />
            {errors.fatherMobile && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.fatherMobile.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="fatherEmail">Father's Email *</Label>
            <Input
              {...register("fatherEmail", {
                required: "Father's email is required",
              })}
              id="fatherEmail"
              type="email"
              placeholder="Enter father's email"
              className="h-12"
            />
            {errors.fatherEmail && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.fatherEmail.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="fatherEducation">Father's Education *</Label>
            <Input
              {...register("fatherEducation", {
                required: "Father's education is required",
              })}
              id="fatherEducation"
              placeholder="Enter father's education"
              className="h-12"
            />
            {errors.fatherEducation && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.fatherEducation.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="fatherProfession">Father's Profession *</Label>
            <Input
              {...register("fatherProfession", {
                required: "Father's profession is required",
              })}
              id="fatherProfession"
              placeholder="Enter father's profession"
              className="h-12"
            />
            {errors.fatherProfession && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.fatherProfession.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="fatherIncome">
              Father's Annual Income (in Rs.) *
            </Label>
            <Input
              {...register("fatherIncome", {
                required: "Father's annual income is required",
              })}
              id="fatherIncome"
              placeholder="Enter father's annual income"
              className="h-12"
            />
            {errors.fatherIncome && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.fatherIncome.message}
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </div>

      {/* Mother's Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Mother's Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="motherName">Mother's Name *</Label>
            <Input
              {...register("motherName", {
                required: "Mother's name is required",
              })}
              id="motherName"
              placeholder="Enter mother's name"
              className="h-12"
            />
            {errors.motherName && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.motherName.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="motherMobile">Mother's Mobile *</Label>
            <Input
              {...register("motherMobile", {
                required: "Mother's mobile is required",
              })}
              id="motherMobile"
              placeholder="Enter mother's mobile"
              className="h-12"
            />
            {errors.motherMobile && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.motherMobile.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="motherEmail">Mother's Email *</Label>
            <Input
              {...register("motherEmail", {
                required: "Mother's email is required",
              })}
              id="motherEmail"
              type="email"
              placeholder="Enter mother's email"
              className="h-12"
            />
            {errors.motherEmail && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.motherEmail.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="motherEducation">Mother's Education *</Label>
            <Input
              {...register("motherEducation", {
                required: "Mother's education is required",
              })}
              id="motherEducation"
              placeholder="Enter mother's education"
              className="h-12"
            />
            {errors.motherEducation && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.motherEducation.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="motherProfession">Mother's Profession *</Label>
            <Input
              {...register("motherProfession", {
                required: "Mother's profession is required",
              })}
              id="motherProfession"
              placeholder="Enter mother's profession"
              className="h-12"
            />
            {errors.motherProfession && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.motherProfession.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="motherIncome">
              Mother's Annual Income (in Rs.) *
            </Label>
            <Input
              {...register("motherIncome", {
                required: "Mother's annual income is required",
              })}
              id="motherIncome"
              placeholder="Enter mother's annual income"
              className="h-12"
            />
            {errors.motherIncome && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.motherIncome.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Parents' Permanent Address */}
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="parentsPermanentAddress">
              Parents' Permanent Address *
            </Label>
            <Textarea
              {...register("parentsPermanentAddress", {
                required: "Parents' permanent address is required",
              })}
              id="parentsPermanentAddress"
              placeholder="Enter parents' permanent address"
              className="h-24"
            />
            {errors.parentsPermanentAddress && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.parentsPermanentAddress.message}
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </div>

      {/* Guardian Details Section (Optional) */}
      <div className="space-y-4 border-t pt-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="hasGuardian"
            checked={hasGuardian}
            onCheckedChange={(checked) => {
              setHasGuardian(checked);
              if (!checked) {
                // Clear guardian fields if unchecked
                setValue("guardianName", "");
                setValue("guardianRelation", "");
                setValue("guardianMobile", "");
                setValue("guardianEmail", "");
                setValue("guardianProfession", "");
                setValue("guardianAddress", '  "');
                setValue("guardianProfession", "");
                setValue("guardianAddress", "");
              }
            }}
          />
          <Label htmlFor="hasGuardian" className="font-medium">
            Guardian details (if different from parents)
          </Label>
        </div>

        {hasGuardian && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-6 border-l-2 border-gray-200">
            <div className="space-y-2">
              <Label htmlFor="guardianName">Guardian's Name</Label>
              <Input
                {...register("guardianName", {
                  required: hasGuardian ? "Guardian's name is required" : false,
                })}
                id="guardianName"
                placeholder="Enter guardian's name"
                className="h-12"
              />
              {errors.guardianName && (
                <Alert variant="destructive">
                  <AlertDescription className="text-red-600">
                    {errors.guardianName.message}
                  </AlertDescription>
                </Alert>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="guardianRelation">Relationship</Label>
              <Input
                {...register("guardianRelation", {
                  required: hasGuardian ? "Relationship is required" : false,
                })}
                id="guardianRelation"
                placeholder="Enter relationship with guardian"
                className="h-12"
              />
              {errors.guardianRelation && (
                <Alert variant="destructive">
                  <AlertDescription className="text-red-600">
                    {errors.guardianRelation.message}
                  </AlertDescription>
                </Alert>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="guardianMobile">Guardian's Mobile</Label>
              <Input
                {...register("guardianMobile", {
                  required: hasGuardian
                    ? "Guardian's mobile is required"
                    : false,
                })}
                id="guardianMobile"
                placeholder="Enter guardian's mobile"
                className="h-12"
              />
              {errors.guardianMobile && (
                <Alert variant="destructive">
                  <AlertDescription className="text-red-600">
                    {errors.guardianMobile.message}
                  </AlertDescription>
                </Alert>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="guardianEmail">Guardian's Email</Label>
              <Input
                {...register("guardianEmail", {
                  required: hasGuardian
                    ? "Guardian's email is required"
                    : false,
                })}
                id="guardianEmail"
                type="email"
                placeholder="Enter guardian's email"
                className="h-12"
              />
              {errors.guardianEmail && (
                <Alert variant="destructive">
                  <AlertDescription className="text-red-600">
                    {errors.guardianEmail.message}
                  </AlertDescription>
                </Alert>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="guardianProfession">Guardian's Profession</Label>
              <Input
                {...register("guardianProfession", {
                  required: hasGuardian
                    ? "Guardian's profession is required"
                    : false,
                })}
                id="guardianProfession"
                placeholder="Enter guardian's profession"
                className="h-12"
              />
              {errors.guardianProfession && (
                <Alert variant="destructive">
                  <AlertDescription className="text-red-600">
                    {errors.guardianProfession.message}
                  </AlertDescription>
                </Alert>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="guardianAddress">Guardian's Address</Label>
              <Input
                {...register("guardianAddress", {
                  required: hasGuardian
                    ? "Guardian's address is required"
                    : false,
                })}
                id="guardianAddress"
                placeholder="Enter guardian's address"
                className="h-12"
              />
              {errors.guardianAddress && (
                <Alert variant="destructive">
                  <AlertDescription className="text-red-600">
                    {errors.guardianAddress.message}
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Emergency Contact Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">
          Emergency Contact (Other than Parents)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="emergencyContactName">Contact Name *</Label>
            <Input
              {...register("emergencyContactName", {
                required: "Emergency contact name is required",
              })}
              id="emergencyContactName"
              placeholder="Enter emergency contact name"
              className="h-12"
            />
            {errors.emergencyContactName && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.emergencyContactName.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="emergencyContactRelation">Relationship *</Label>
            <Input
              {...register("emergencyContactRelation", {
                required: "Emergency contact relation is required",
              })}
              id="emergencyContactRelation"
              placeholder="Enter relationship"
              className="h-12"
            />
            {errors.emergencyContactRelation && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.emergencyContactRelation.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="emergencyContactMobile">Mobile Number *</Label>
            <Input
              {...register("emergencyContactMobile", {
                required: "Emergency contact mobile is required",
              })}
              id="emergencyContactMobile"
              placeholder="Enter emergency contact mobile"
              className="h-12"
            />
            {errors.emergencyContactMobile && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.emergencyContactMobile.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="emergencyContactEmail">Email *</Label>
            <Input
              {...register("emergencyContactEmail", {
                required: "Emergency contact email is required",
              })}
              id="emergencyContactEmail"
              type="email"
              placeholder="Enter emergency contact email"
              className="h-12"
            />
            {errors.emergencyContactEmail && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.emergencyContactEmail.message}
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </div>

      {/* Signatures Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Signatures</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Applicant's Signature *</Label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Input
                type="file"
                accept="image/*"
                className="hidden"
                id="applicantSignature"
                onChange={(e) =>
                  handleFileUpload(
                    e,
                    "applicantSignature",
                    setApplicantSignaturePreview
                  )
                }
              />
              <Label
                htmlFor="applicantSignature"
                className="cursor-pointer text-blue-500 hover:text-blue-600"
              >
                Click to upload or drag and drop
              </Label>
              {applicantSignaturePreview && (
                <div className="mt-4">
                  <img
                    src={applicantSignaturePreview || "/placeholder.svg"}
                    alt="Applicant Signature Preview"
                    className="mx-auto max-h-20"
                  />
                </div>
              )}
              <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 1MB</p>
            </div>
            {errors.applicantSignature && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.applicantSignature.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label>Parent/Guardian's Signature *</Label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Input
                type="file"
                accept="image/*"
                className="hidden"
                id="guardianSignature"
                onChange={(e) =>
                  handleFileUpload(
                    e,
                    "guardianSignature",
                    setGuardianSignaturePreview
                  )
                }
              />
              <Label
                htmlFor="guardianSignature"
                className="cursor-pointer text-blue-500 hover:text-blue-600"
              >
                Click to upload or drag and drop
              </Label>
              {guardianSignaturePreview && (
                <div className="mt-4">
                  <img
                    src={guardianSignaturePreview || "/placeholder.svg"}
                    alt="Guardian Signature Preview"
                    className="mx-auto max-h-20"
                  />
                </div>
              )}
              <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 1MB</p>
            </div>
            {errors.guardianSignature && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.guardianSignature.message}
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderEducationalDetails = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="nameAs10th">Name as per 10th Marksheet *</Label>
        <Input
          {...register("nameAs10th", {
            required: "Name as per 10th marksheet is required",
          })}
          id="nameAs10th"
          placeholder="Enter name as per documents"
          className="h-12"
        />
        {errors.nameAs10th && (
          <Alert variant="destructive">
            <AlertDescription className="text-red-600">
              {errors.nameAs10th.message}
            </AlertDescription>
          </Alert>
        )}
      </div>

      <div className="space-y-4">
        {["X", "XI", "XII"].map((level, index) => (
          <Card key={level} className="p-4">
            <CardHeader>
              <CardTitle className="text-lg">{level} Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Institution Name *</Label>
                  <Input
                    {...register(`education.${index}.institution`, {
                      required: "Institution name is required",
                    })}
                    placeholder="Enter institution name"
                    className="h-12"
                  />
                  {errors.education?.[index]?.institution && (
                    <Alert variant="destructive">
                      <AlertDescription className="text-red-600">
                        {errors.education[index].institution.message}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Stream/Subjects *</Label>
                  <Input
                    {...register(`education.${index}.stream`, {
                      required: "Stream/Subjects is required",
                    })}
                    placeholder="Enter stream"
                    className="h-12"
                  />
                  {errors.education?.[index]?.stream && (
                    <Alert variant="destructive">
                      <AlertDescription className="text-red-600">
                        {errors.education[index].stream.message}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Year of Passing *</Label>
                  <Input
                    {...register(`education.${index}.yearOfPassing`, {
                      required: "Year of passing is required",
                    })}
                    placeholder="YYYY"
                    className="h-12"
                    type="number"
                    min="1900"
                    max="2024"
                  />
                  {errors.education?.[index]?.yearOfPassing && (
                    <Alert variant="destructive">
                      <AlertDescription className="text-red-600">
                        {errors.education[index].yearOfPassing.message}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Grade/Percentage *</Label>
                  <Input
                    {...register(`education.${index}.grade`, {
                      required: "Grade/Percentage is required",
                    })}
                    placeholder="Enter grade"
                    className="h-12"
                  />
                  {errors.education?.[index]?.grade && (
                    <Alert variant="destructive">
                      <AlertDescription className="text-red-600">
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
                  {...register(`education.${index}.marksheet`, {
                    required: "Marksheet is required",
                  })}
                  className="h-12"
                />
                {errors.education?.[index]?.marksheet && (
                  <Alert variant="destructive">
                    <AlertDescription className="text-red-600">
                      {errors.education[index].marksheet.message}
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
        {/* Graduation/Diploma (optional) */}
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-lg">
              UG/Diploma Details (Optional)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Institution Name</Label>
                <Input
                  {...register(`education.3.institution`)}
                  placeholder="Enter institution name"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label>Stream/Subjects</Label>
                <Input
                  {...register(`education.3.stream`)}
                  placeholder="Enter stream"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label>Year of Passing</Label>
                <Input
                  {...register(`education.3.yearOfPassing`)}
                  placeholder="YYYY"
                  className="h-12"
                  type="number"
                  min="1900"
                  max="2024"
                />
              </div>

              <div className="space-y-2">
                <Label>Grade/Percentage</Label>
                <Input
                  {...register(`education.3.grade`)}
                  placeholder="Enter grade"
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Upload Marksheet</Label>
              <Input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                {...register(`education.3.marksheet`)}
                className="h-12"
              />
            </div>
          </CardContent>
        </Card>

        {/* Other Certificates/Attachments Section (Optional) */}
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-lg">
              Other Certificates/Attachments (Optional)
            </CardTitle>
            <CardDescription>
              Upload any additional certificates, achievements, or relevant
              documents
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Certificate/Document Name</Label>
                <Input
                  {...register(`education.4.certificateName`)}
                  placeholder="Enter certificate or document name"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label>Issuing Organization</Label>
                <Input
                  {...register(`education.4.issuingOrg`)}
                  placeholder="Enter issuing organization"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label>Year Received</Label>
                <Input
                  {...register(`education.4.yearReceived`)}
                  placeholder="YYYY"
                  className="h-12"
                  type="number"
                  min="1900"
                  max="2024"
                />
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Input
                  {...register(`education.4.description`)}
                  placeholder="Brief description of the certificate/document"
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Upload Certificate/Document</Label>
              <Input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                {...register(`education.4.certificate`)}
                className="h-12"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderProgramSelection = () => {
    // Handle course change
    const handleCourseChange = (value) => {
      setValue("course", value);
      setFormData((prev) => ({ ...prev, course: value, branch: "" }));
      setSelectedCourse(coursesData.find((course) => course.name === value));
      setValue("branch", ""); // Reset branch when course changes
    };

    // Handle branch change
    const handleBranchChange = (value) => {
      setValue("branch", value);
      setFormData((prev) => ({ ...prev, branch: value }));

      // Find the fee for the selected branch
      if (selectedCourse) {
        const branch = selectedCourse.branches.find((b) => b.name === value);
        if (branch) {
          setSelectedBranchFee(branch.fee);
          setValue("formFee", branch.fee);
        }
      }
    };

    return (
      <div className="space-y-6">
        {/* Course Selection */}
        <div className="space-y-2">
          <Label>Course *</Label>
          <Select onValueChange={handleCourseChange}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Choose course" />
            </SelectTrigger>
            <SelectContent>
              {coursesData.map((course) => (
                <SelectItem key={course.id} value={course.name}>
                  {course.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.course && (
            <Alert variant="destructive">
              <AlertDescription className="text-red-600">
                {errors.course.message}
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* Branch Selection (only shows if course is selected) */}
        {selectedCourse && (
          <div className="space-y-2">
            <Label>Branch *</Label>
            <Select onValueChange={handleBranchChange}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Choose branch" />
              </SelectTrigger>
              <SelectContent>
                {selectedCourse.branches.map((branch, index) => (
                  <SelectItem key={index} value={branch.name}>
                    {branch.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.branch && (
              <Alert variant="destructive">
                <AlertDescription className="text-red-600">
                  {errors.branch.message}
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}

        {/* Display Form Fee */}
        {selectedBranchFee !== null && (
          <div className="p-4 bg-blue-50 rounded-md">
            <p className="font-medium">Form Fee: ₹{selectedBranchFee}</p>
            <p className="text-sm text-gray-600">
              Duration:{" "}
              {selectedCourse.branches.find((b) => b.name === formData.branch)
                ?.duration || ""}
            </p>
            <p className="text-sm text-gray-600">
              Eligibility:{" "}
              {selectedCourse.branches.find((b) => b.name === formData.branch)
                ?.eligibility || ""}
            </p>
          </div>
        )}

        {/* Study Mode */}
        <div className="space-y-2">
          <Label>Study Mode *</Label>
          <Select onValueChange={(value) => setValue("studyMode", value)}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Choose study mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="online">Online</SelectItem>
              <SelectItem value="offline">Offline</SelectItem>
            </SelectContent>
          </Select>
          {errors.studyMode && (
            <Alert variant="destructive">
              <AlertDescription className="text-red-600">
                {errors.studyMode.message}
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* Program Type */}
        <div className="space-y-2">
          <Label>Program Type *</Label>
          <Select onValueChange={(value) => setValue("programType", value)}>
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
              <AlertDescription className="text-red-600">
                {errors.programType.message}
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    );
  };

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
              <span className="font-semibold">₹{selectedBranchFee}</span>
            </div>

            <div className="flex justify-between py-2 border-t">
              <span className="font-bold">Total Amount</span>
              <span className="font-bold">₹{selectedBranchFee}</span>
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
      <Button
        className="w-full md:w-auto"
        onClick={() => downloadApplicationForm(formData)}
      >
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
    "School reserves the right to change or cancel any test center/city at its discretion, if required.",
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-br my-28 from-purple-50 to-blue-50 md:p-8 ${poppins.className}`}
    >
      <div className="  md:max-w-7xl md:mx-auto border bg-zinc-100">
        <Card className="shadow-xl">
          <div className="p-6">
            <Tabs defaultValue="new" className="w-full">
              <TabsList className="grid w-full gap-4 grid-cols-2 mb-8">
                <TabsTrigger
                  className={`py-3 ${poppins.className} rounded-none text-sm md:text-base font-semibold border border-black`}
                  value="new"
                >
                  New Applicant
                </TabsTrigger>
                <TabsTrigger
                  className={`py-3 ${poppins.className} rounded-none text-sm md:text-base font-semibold border border-black`}
                  value="existing"
                >
                  Already Applied
                </TabsTrigger>
              </TabsList>

              <TabsContent value="new">
                <div className="flex flex-col md:flex-row border rounded-md">
                  {/* Steps sidebar */}
                  <div className="w-full md:w-1/4 bg-black text-white p-8 rounded-bl-lg">
                    <h2 className="text-lg text-center md:text-left md:text-2xl font-bold mb-6">
                      Application Steps
                    </h2>
                    {steps.map((step, index) => (
                      <div
                        key={step}
                        className={`flex items-center space-x-3 text-sm md:text-base mb-4 p-3 rounded-lg transition-all ${
                          currentStep === index + 1
                            ? "bg-yellow-400 text-black font-semibold"
                            : currentStep > index + 1
                            ? "text-green-400"
                            : "text-gray-400"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            currentStep > index + 1
                              ? "bg-green-500"
                              : currentStep === index + 1
                              ? "bg-white text-black"
                              : "bg-gray-700"
                          }`}
                        >
                          {currentStep > index + 1 ? "✓" : index + 1}
                        </div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* Form content */}
                  <div className="w-full md:w-3/4 p-3 md:p-6">
                    {/* <h1
                    className={`text-3xl font-bold pb-10 px-3 ${poppins.className}`}
                  >
                    Application Form
                  </h1> */}
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
                          className={`px-6 ${
                            currentStep === 1 ? "ml-auto" : ""
                          }`}
                        >
                          {currentStep === steps.length - 1 ? "Submit" : "Next"}
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="existing">
                <div className="max-w-md mx-auto p-6">
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold mb-2">
                        Track Your Application
                      </h2>
                      <p className="text-gray-600">
                        Enter your mobile number or application ID to check your
                        status
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="tracking-id">
                          Mobile Number / Application ID
                        </Label>
                        <Input
                          id="tracking-id"
                          placeholder="Enter mobile number or application ID"
                          className="h-12"
                        />
                      </div>

                      <Button
                        className="w-full h-12"
                        onClick={() =>
                          toast.success("OTP sent to your mobile number")
                        }
                      >
                        Send OTP
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
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
              className={!hasScrolledToBottom ? "opacity-50" : ""}
            >
              {hasScrolledToBottom ? "Accept Terms" : "Please read all terms"}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default RegistrationForm;
