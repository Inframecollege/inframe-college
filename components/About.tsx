"use client";
import React, { useEffect, } from "react";
import { Card, CardContent } from "../components/ui/card";
import { experienceCamputLife, highlights, LOGOS, studentImages, values } from "../utils/constant";
import { Poppins } from "next/font/google"; // Importing Google Fonts via next/font
import Image from "next/image";
import "aos/dist/aos.css"; // Import the CSS for animations
import CampusLife from "./CampusLife";
import Aos from "aos";
// import ApplyNowForm from "./ApplyNowForm";
// import { Button } from "./ui/button";
// Using the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});

const AboutPage = () => {
  // const [isFormOpen, setIsFormOpen] = useState(false);
  //   const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
  //     e.preventDefault();
  //     setIsFormOpen(true);
  //   };
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  // const { user, loginWithRedirect, logout, isAuthenticated,isLoading } = useAuth0();

  // useEffect(()=>{
  //   if(!isLoading && !isAuthenticated) {
  //     loginWithRedirect();
  //   }
  // },[isAuthenticated,isLoading]);

  // if(isLoading){
  //   return <div>Loading...</div>
  // }

  // if(!isAuthenticated) {
  //   return null;
  // }

  return (
    <div className="min-h-screen bg-white text-justify">
      {/* Hero Section */}
      <section className="bg-yellow-400 text-white py-32">
        <div className="container mx-auto px-4">
          <div
            className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8"
            data-aos="fade-up"
          >
            {studentImages.map((imgUrl, i) => (
              <div key={i} className="aspect-square">
                <Image
                  src={imgUrl}
                  alt={`University Life ${i + 1}`}
                  width={200} // Adjust as needed
                  height={200} // Adjust as needed
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <h1
            className={`text-4xl md:text-5xl text-black font-bold mb-4 ${poppins.className}`}
          >
            WHO WE ARE?
          </h1>
          <p className="text-lg  md:text-xl text-black font-sans">
            Inframe is an innovative platform that blends creativity with
            business, offering a dynamic space where art and design
            professionals come together to shape the future. With a vibrant and
            inclusive community, Inframe empowers creators to transform their
            passion into a successful career while fostering a collaborative
            environment where ideas thrive.
          </p>
        </div>
      </section>

      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side: Heading and Image */}
            <div data-aos="fade-right">
              <Image
                src={"/images/gallery/1719304885452_1.jpg"}
                alt={"Cultural Event"}
                width={720}
                height={480}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Right side: Text */}
            <div data-aos="fade-left">
              <h2 className={`text-4xl font-bold mb-6 ${poppins.className}`}>
                About Us
              </h2>
              <p className="text-lg font-sans leading-relaxed text-justify">
                Inframe school of art, design & business is established by the
                Inframe Educational Society under Rajasthan Societies Act 1958.
                Inframe school of art, design and business will be one of a kind
                design institute in Jodhpur which will commence it’s curriculum
                with the aim to expand the design and business field in Jodhpur
                and it’s surrounding regions by being the first design and
                business school of Jodhpur to offer degree, diploma and
                professional courses in various fields of interior design,
                graphic design, fine arts and digital marketing .
                <br />
                <br />
                To pursue a design course the candidate need it have to qualify
                in specific subject .The candidate from any educational
                background can pursue or take admission to a design course and
                fulfill their dreams of becoming designer with inframe design
                school .In school will not only help the students to learn more
                effectively and have a great future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 bg-yellow-50" data-aos="fade-down">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400} // Adjust as needed
                  height={400} // Adjust as needed
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                  <span className="text-5xl font-bold text-yellow-400 mb-2">
                    {item.count}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          {/* Left side: Text */}
          <div
            className="grid md:grid-cols-2 gap-16 items-center"
            data-aos="fade-left"
          >
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${poppins.className}`}>
                VISION
              </h2>
              <p className="text-lg font-sans leading-relaxed">
                Inframe school of art, design and business aspires to be a
                nationally and internationally recognized institution for
                education in various fields of design, art and business. We want
                the students of our city/state to flourish in their life and at
                the same time help the design industry grow in this region. Our
                learning will consist of some basic theoretical knowledge about,
                developing a creative thinking and then turning towards the
                practical aspects which would be taken care of by our industry
                partners and hand on leadership opportunities delivered by our
                distinguished and experienced faculties. Our learning will not
                only be limited to the curriculum but we will also be preparing
                the students to perform well in real life conditions and excel
                in their career ahead of them.
              </p>
            </div>

            {/* Right side: Heading and Image */}
            <div data-aos="fade-right">
              <Image
                src={"/images/gallery/IMG_20240605_124215.jpg"}
                alt={"Cultural Event"}
                width={720}
                height={480}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Inframe Section */}
      <section className="w-full bg-gradient-to-br from-white to-gray-50 text-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        {/* Header with Decorative Elements */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-24 h-1 bg-yellow-400 rounded-full"></div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 relative inline-block">
            About <span className="text-yellow-600 relative">
              Inframe
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400 transform scale-x-75"></div>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Where Creativity Meets Innovation
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto">
          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-yellow-100 rounded-xl">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Foundation</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      <strong className="text-yellow-700">Inframe School of Art, Design and Business</strong> was established under the Rajasthan Societies Act 1958 by the Inframe Educational Society. Founded by eight experienced professionals with over 35 years of expertise in education, administration, and community development.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-yellow-100 rounded-xl">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                      Our vision is to nurture creativity, innovation, and critical thinking while upholding the values of discipline, integrity, and social responsibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Programs & Features */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl p-8 shadow-lg border border-yellow-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="p-2 bg-yellow-400 rounded-lg">📚</span>
                  Programs Offered
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  We offer <strong className="text-yellow-700">Degree (B.Des, B.Voc, B.Sc), Diploma, and Short-Term Professional Courses</strong> across major creative fields:
                </p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {["Interior Design", "Graphic Design", "Fine Arts", "UI/UX Design", "Digital Marketing", "Jewellery Design", "Animation & VFX", "Fashion Design"].map((course, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="p-2 bg-yellow-400 rounded-lg">💼</span>
                  Career Support
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  Inframe ensures <strong className="text-yellow-700">100% placement assistance</strong> across India, supported by modern campus facilities including Wi-Fi, digital classrooms, library, and creative labs.
                </p>
              </div>
            </div>
          </div>

          {/* Divider with Style */}
          <div className="relative my-20">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-6 text-2xl">✨</span>
            </div>
          </div>

          {/* Affiliation Section */}
          <div className="mb-20">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Affiliation & <span className="text-yellow-600">Accreditation</span>
            </h3>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* University Partnerships */}
              <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8 shadow-2xl">
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="p-2 bg-yellow-400 rounded-lg text-black">🏛️</span>
                  University Partnerships
                </h4>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    Inframe is a vocational training partner of <strong className="text-yellow-300">Glocal University</strong> and <strong className="text-yellow-300">Sikkim Skill University (UGC Recognized)</strong>, offering Diploma, Advanced Diploma, Bachelor's, and Master's Degree programs.
                  </p>
                </div>
              </div>

              {/* Industry Certifications */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="p-2 bg-yellow-400 rounded-lg">⭐</span>
                  Industry Certifications
                </h4>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-700">
                    Training partner of <strong className="text-yellow-700">Career Point Institute of Skill Development (CPSID)</strong> affiliated with <strong className="text-yellow-700">NSDC</strong> and <strong className="text-yellow-700">Skill India</strong>.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Officially certified by <strong className="text-yellow-700">Adobe, Autodesk, and Meta</strong> for globally recognized professional certification programs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏢",
                title: "Modern Campus",
                description: "Smart campus with digital classrooms, labs, and creative spaces"
              },
              {
                icon: "💼",
                title: "100% Placement",
                description: "Comprehensive placement assistance across India"
              },
              {
                icon: "🌍",
                title: "Global Certifications",
                description: "Adobe, Autodesk, and Meta certified programs"
              },
              {
                icon: "👨‍🏫",
                title: "Industry Experts",
                description: "Learn from professionals with real-world experience"
              },
              {
                icon: "🚀",
                title: "Live Projects",
                description: "Hands-on learning with real client projects"
              },
              {
                icon: "📱",
                title: "Flexible Learning",
                description: "Online, offline, and recorded class options"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-yellow-100 rounded-xl group-hover:bg-yellow-200 transition-colors duration-300">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-700 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-black mb-4">
                Ready to Start Your Creative Journey?
              </h3>
              <p className="text-lg text-gray-800 mb-6 max-w-2xl mx-auto">
                Join Inframe and transform your passion into a successful career with industry-leading education and global opportunities.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section
        className="py-20 bg-white text-black font-sans"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4">
          <h2
            className={`text-4xl font-bold mb-16 text-center text-black ${poppins.className}`}
          >
            OUR CORE VALUES
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg bg-zinc-100 "
              >
                <CardContent className="p-0">
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={value.image}
                      alt={value.title}
                      width={400} // Adjust as needed
                      height={300} // Adjust as needed
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      className={`text-xl font-bold mb-3 text-yellow-400 ${poppins.className}`}
                    >
                      {value.title}
                    </h3>
                    <p className="text-black">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Left side: Heading and Image */}
            <div data-aos="fade-right">
              <Image
                src={"/images/gallery/1721366668571.jpg"}
                alt="Cultural Event"
                width={720}
                height={480}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Right side: Text */}
            <div data-aos="fade-left">
              <h2 className={`text-4xl font-bold mb-6 ${poppins.className}`}>
                MISSION
              </h2>
              <p className="text-lg font-sans leading-relaxed">
                Inframe school of art, design and business believes in
                innovative and effective way of learning rather than just
                sticking to the curriculum. We want to prepare our students to
                get into the industry of their choice and outperform everyone
                else with the perk of having learned every aspect of the
                industry. The main mission of our school is to prepare the
                students in becoming the designers, artists and entrepreneurs of
                tomorrow so that they can take on the world by storm and mark
                their presence in the world. Our school is collaborating with
                the various industries and leading designers of Jodhpur to
                conduct workshops, have work experience, real world problem
                solving and have various business opportunities which will help
                the students in developing design thinking with relation to the
                market requirements and desires
                <br />
                <br />
                To pursue a design course the candidate need it have to qualify
                in specific subject .The candidate from any educational
                background can pursue or take admission to a design course and
                fulfill their dreams of becoming designer with inframe design
                school .In school will not only help the students to learn more
                effectively and have a great future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Life Grid */}
      <CampusLife experienceCamputLife={experienceCamputLife} />

      {/* Core Values Section */}
      <section className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-32 items-center">

            {/* Left side: Images */}
            <div data-aos="fade-right" className="flex flex-col sm:flex-row gap-6 justify-center">
              <Image
                src={"/images/gallery/1719575193328.jpg"}
                alt="Cultural Event"
                height={480}
                width={364}
                className="rounded-lg shadow-lg w-full sm:w-1/2 object-cover"
              />
              <Image
                src={"/images/gallery/1719748180116.jpg"}
                alt="Cultural Event"
                height={480}
                width={364}
                className="rounded-lg shadow-lg w-full sm:w-1/2 object-cover"
              />
            </div>

            {/* Right side: Text */}
            <div data-aos="fade-left" className="text-center md:text-left">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${poppins.className}`}>
                CORE VALUES
              </h2>
              <p className="text-base sm:text-lg font-sans leading-relaxed text-justify">
                Inframe school of art, design and business inculcates design thinking
                in students which enables them to think from a different perspective
                and understand the needs and wants of the user. Our institute has
                developed a curriculum which not only focuses on the theoretical
                knowledge but also focuses on the practical learning and innovation.
                The school organises various workshops and internship opportunities
                for the students with the help of industry experts and glorified
                designers. With the main aim of “developing sustainable design for the
                people of tomorrow” our institute leads the students in the direction
                to the future of design and business. ICADB helps the students in
                learning design and business with the help of various practical
                projects so that students can actually understand how are such
                projects done in the real world and how to work in a team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry & Placement Partner Section */}
      <section className="bg-yellow-400 py-12 sm:py-16">
        <div className="relative overflow-hidden">
          <h2
            className={`text-center text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 ${poppins.className}`}
          >
            INDUSTRY & PLACEMENT PARTNER
          </h2>
          <p
            className={`text-center text-base sm:text-lg text-gray-700 mb-8 px-4 ${poppins.className}`}
          >
            Inframe’s strong industry partnerships provide students with unparalleled
            career opportunities and real-world experience to excel in design and
            business.
          </p>

          {/* Scrolling Logos */}
          <div className="flex animate-[scroll_20s_linear_infinite] space-x-6 sm:space-x-10 md:space-x-12 px-4">
            {LOGOS.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex flex-col items-center justify-center text-slate-800"
              >
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 shadow-md border bg-white border-gray-200 rounded-md flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={192}
                    height={192}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span
                  className={`mt-2 text-center text-xs sm:text-sm md:text-base text-gray-700 ${poppins.className}`}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;

