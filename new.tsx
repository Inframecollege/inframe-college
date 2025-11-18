    // return (
    //     <div className="min-h-screen min-w-full bg-white overflow-x-hidden">
    //         {/* Hero Section */}
    //         <HeroSection backgroundImage="/landingImages/course landscape-01-01.jpg" />
    //         <div className="relative w-full h-[30vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
    //             <Image
    //                 src="/landingImages/course landscape-01-01.jpg"
    //                 alt="Hero Banner"
    //                 fill
    //                 priority
    //                 className="object-contain sm:object-cover object-top animate-float"
    //             />
    //             {/* Animated Overlay */}
    //             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/30"></div>
    //         </div>

    //         {/* Course Details Section */}
    //         <div className="py-1 sm:py-12 min-w-full bg-white">
    //             <div className="container mx-auto min-w-full px-4 sm:px-0">
    //                 <div className="min-w-full mx-auto">
    //                     {/* Main Course Info */}
    //                     <div className="animate-slide-up-smooth">
    //                         <CourseInfo title="Interior Design Course" />
    //                     </div>

    //                     {/* AI Description Section */}
    //                     <div className="my-5 sm:my-10 bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-yellow-500/40 relative overflow-hidden animate-glow-in">
    //                         {/* Animated Gradient Border */}
    //                         <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500/20 via-transparent to-yellow-500/20 animate-border-glow"></div>

    //                         {/* Floating Particles */}
    //                         <div className="absolute inset-0 overflow-hidden">
    //                             {[...Array(5)].map((_, i) => (
    //                                 <div
    //                                     key={i}
    //                                     className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-float-slow opacity-60"
    //                                     style={{
    //                                         left: `${20 + i * 15}%`,
    //                                         top: `${30 + i * 10}%`,
    //                                         animationDelay: `${i * 0.5}s`
    //                                     }}
    //                                 ></div>
    //                             ))}
    //                         </div>

    //                         <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-4 relative z-10 animate-text-glow">
    //                             <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
    //                                 🤖 Learn Tools Faster with AI Assistant
    //                             </span>
    //                         </h3>

    //                         <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto text-center relative z-10 animate-fade-in-slow delay-200">
    //                             Master industry-leading tools like
    //                             <span className="text-yellow-400 font-semibold animate-pulse-fast"> AutoCAD</span>,
    //                             <span className="text-yellow-400 font-semibold animate-pulse-fast"> SketchUp</span>,
    //                             <span className="text-yellow-400 font-semibold animate-pulse-fast"> 3ds Max</span>,
    //                             <span className="text-yellow-400 font-semibold animate-pulse-fast"> Photoshop</span> and more —
    //                             with the help of our intelligent
    //                             <span className="text-yellow-400 font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
    //                                 AI-powered learning assistant.
    //                             </span>
    //                         </p>

    //                         <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-base font-semibold relative z-10 max-w-4xl mx-auto">
    //                             {[
    //                                 { icon: "⚡", text: "Step-by-step tool explanations" },
    //                                 { icon: "🎯", text: "Personalized learning suggestions" },
    //                                 { icon: "💡", text: "Instant answers to all tool-related queries" },
    //                                 { icon: "🚀", text: "Learn 5× faster with AI support" }
    //                             ].map((item, index) => (
    //                                 <li
    //                                     key={index}
    //                                     className="flex items-center gap-3 p-3 rounded-xl bg-black/40 backdrop-blur-sm animate-slide-in-smooth hover:bg-black/60 transition-all duration-300 hover:scale-105"
    //                                     style={{ animationDelay: `${400 + index * 100}ms` }}
    //                                 >
    //                                     <span className="text-yellow-400 text-xl animate-bounce-slow">{item.icon}</span>
    //                                     <span className="text-white/90">{item.text}</span>
    //                                 </li>
    //                             ))}
    //                         </ul>

    //                         <p className="text-center mt-6 text-lg font-bold relative z-10 animate-pulse-gentle">
    //                             <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
    //                                 AI Assistant — Your Personal Guide for Every Software You Learn
    //                             </span>
    //                         </p>
    //                     </div>

    //                     {/* Course Level & Online Mode Notice */}
    //                     <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 sm:p-6 rounded-2xl border-2 border-yellow-300 mb-8 sm:mb-12 animate-scale-in-smooth shadow-lg hover:shadow-xl transition-all duration-500">
    //                         <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full animate-ping-slow"></div>

    //                         <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 text-center animate-bounce-in-smooth">
    //                             🎓 Designed for Class 10+ Students & Above
    //                         </h3>

    //                         <p className="text-base sm:text-lg text-black font-semibold text-center max-w-3xl mx-auto animate-fade-in-slow delay-300">
    //                             This is a <span className="text-red-600 font-bold bg-red-100 px-2 py-1 rounded-lg animate-pulse-fast">100% Online Course</span> that includes
    //                             <span className="font-bold text-yellow-700"> Pre-Recorded Video Lessons</span> along with
    //                             <span className="font-bold text-yellow-700"> Live Doubt-Clearing Sessions</span> for complete support.
    //                         </p>
    //                     </div>

    //                     {/* Pricing Banner Section */}
    //                     <div className="relative w-full h-[30vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden  ">
    //                         <Image
    //                             src={"/landingImages/course landscape-01-01.jpg"}
    //                             alt="Hero Banner"
    //                             fill
    //                             priority
    //                             className="object-contain sm:object-cover object-top group-hover:scale-110 transition-transform duration-1000 ease-out"
    //                         />
    //                         {/* Shine Effect */}
    //                         {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div> */}
    //                     </div>

    //                     {/* Tools Section */}
    //                     <div className="my-12 px-4 animate-fade-in-up-smooth">
    //                         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-8 animate-text-glow">
    //                             <span className="bg-gradient-to-r from-gray-900 via-yellow-600 to-gray-900 bg-clip-text text-transparent">
    //                                 🛠️ Master Industry-Relevant Tools
    //                             </span>
    //                         </h2>

    //                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    //                             {tools.map((tool, index) => {
    //                                 const Icon = tool.icon;
    //                                 return (
    //                                     <div
    //                                         key={tool.name}
    //                                         className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 animate-card-float hover:scale-105 hover:-translate-y-3 group cursor-pointer"
    //                                         style={{ animationDelay: `${index * 150}ms` }}
    //                                     >
    //                                         <div className={`mb-4 p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 group-hover:scale-110 transition-transform duration-500 ${tool.color}`}>
    //                                             <Icon className="w-12 h-12 animate-float-slow" />
    //                                         </div>
    //                                         <h3 className="font-bold text-lg text-center text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">{tool.name}</h3>
    //                                     </div>
    //                                 );
    //                             })}
    //                         </div>
    //                     </div>

    //                     {/* Who Should Join */}
    //                     <div className="my-8 sm:my-12 animate-fade-in-up-smooth">
    //                         <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black mb-8 text-center animate-text-glow">
    //                             <span className="bg-gradient-to-r from-gray-900 via-yellow-600 to-gray-900 bg-clip-text text-transparent">
    //                                 👥 Who Should Join This Course?
    //                             </span>
    //                         </h3>

    //                         <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 max-w-5xl mx-auto">
    //                             {targetAudience.map((audience, index) => (
    //                                 <div
    //                                     key={index}
    //                                     className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
    //                                     text-black px-6 py-4 rounded-2xl 
    //                                     font-bold text-base sm:text-lg 
    //                                     border-2 border-yellow-700/40
    //                                     shadow-lg hover:shadow-2xl
    //                                     hover:scale-105 hover:-translate-y-2 transition-all duration-500 
    //                                     flex items-center gap-3 animate-bounce-in-slow group cursor-pointer"
    //                                     style={{ animationDelay: `${index * 200}ms` }}
    //                                 >
    //                                     <div className="w-3 h-3 bg-white rounded-full animate-pulse-fast group-hover:scale-150 transition-transform duration-300"></div>
    //                                     {audience}
    //                                 </div>
    //                             ))}
    //                         </div>
    //                     </div>

    //                     {/* Projects Highlight */}
    //                     <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 sm:p-6 rounded-2xl border-l-4 border-yellow-500 border-2 border-yellow-200 mb-8 sm:mb-12 text-center animate-pulse-gentle hover:scale-105 transition-transform duration-500 cursor-pointer">
    //                         <p className="text-lg sm:text-xl text-black font-bold animate-bounce-in-slow">
    //                             🚀 Yes 4+ hands on projects that make your CV look great.
    //                         </p>
    //                     </div>

    //                     {/* Success Student Section */}


    //                     <div className="relative w-full mb-8 bg-black overflow-hidden rounded-2xl animate-zoom-in-smooth group">
    //                         <div className="absolute inset-0">
    //                             <Image
    //                                 src={"/landingImages/12-01-2.jpg"}
    //                                 alt="Blur Background"
    //                                 fill
    //                                 className="object-cover blur-xl opacity-40 group-hover:blur-2xl transition-all duration-700"
    //                                 priority
    //                             />
    //                         </div>
    //                         <div className="relative z-10 w-full flex items-center justify-center py-4 group">
    //                             <Image
    //                                 src={"/landingImages/12-02-1.jpg"}
    //                                 alt="Hero Banner"
    //                                 width={900}
    //                                 height={600}
    //                                 className="w-full max-w-[900px] h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
    //                                 priority
    //                             />
    //                         </div>
    //                     </div>

    //                     {/* Testimonials Section */}
    //                     <div className="animate-fade-in-up-smooth">
    //                         <StudentReviewCarrousal />
    //                     </div>

    //                     {/* Students Work */}
    //                     <div className="animate-slide-up-smooth">
    //                         <StudentsWork
    //                             images={works}
    //                             title="Our Students' Creative Gallery"
    //                             description="Our Interior Design showcase presents a blend of aesthetics, functionality, and spatial harmony envisioned by our students. Each project demonstrates their understanding of how people interact with spaces and how thoughtful design can elevate comfort, mood, and lifestyle."
    //                         />
    //                     </div>

    //                     {/* Placement Partners */}
    //                     <div className="animate-fade-in-up-smooth">
    //                         <Carrousal />
    //                     </div>

    //                     {/* Final CTA Section */}
    //                     <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 mt-8 p-6 sm:p-8 text-center shadow-2xl border-2 border-yellow-300 rounded-2xl animate-pulse-gentle hover:animate-bounce-slow transition-all duration-500 group cursor-pointer">
    //                         {/* Floating Elements */}
    //                         <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce-slow">
    //                             🔥 LIMITED TIME OFFER
    //                         </div>

    //                         <h3 className="text-2xl sm:text-3xl font-extrabold text-black mb-3 animate-text-glow group-hover:scale-105 transition-transform duration-300">
    //                             🎁 Special New Year Offer!
    //                         </h3>
    //                         <p className="text-base sm:text-lg text-black font-semibold mb-4 animate-fade-in-slow delay-200">
    //                             Enroll now and get exclusive benefits:
    //                         </p>
    //                         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto">
    //                             {[
    //                                 "Free Portfolio Building",
    //                                 "1-on-1 Career Guidance",
    //                                 "Industry Certifications",
    //                                 "Lifetime Access to Resources"
    //                             ].map((benefit, index) => (
    //                                 <li
    //                                     key={index}
    //                                     className="flex items-center justify-center text-black font-bold text-sm bg-yellow-300/50 px-3 py-2 rounded-lg animate-slide-in-smooth hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
    //                                     style={{ animationDelay: `${300 + index * 100}ms` }}
    //                                 >
    //                                     <span className="text-green-700 mr-2 text-lg animate-spin-slow">✓</span>
    //                                     {benefit}
    //                                 </li>
    //                             ))}
    //                         </ul>
    //                     </div>

    //                     {/* Features Section */}
    //                     <div className="animate-fade-in-up-smooth">
    //                         <FeaturesSection />
    //                     </div>

    //                     {/* FAQ Section */}
    //                     {/* FAQ Section */}
    //                     <div className="w-full flex justify-center">
    //                         <div className="w-full max-w-4xl animate-slide-up-smooth">
    //                             <FAQSection />
    //                         </div>
    //                     </div>

    //                 </div>
    //             </div>
    //         </div>

    //         {/* Floating Buy Now Button */}
    //         <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow hover:animate-pulse-gentle group">
    //             <div className="relative">
    //                 <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-75 group-hover:opacity-100 animate-ping-slow"></div>
    //                 <QuickPayment />
    //             </div>
    //         </div>

    //         {/* Footer */}
    //         <div className="animate-fade-in-up-smooth">
    //             <Footer />
    //         </div>

    //         {/* Enhanced Animation Styles */}

    //     </div>
    // );