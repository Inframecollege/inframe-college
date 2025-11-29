import Image from "next/image";

const MembershipPartnership = () => {
  return (
    <section className="bg-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="text-left mb-16">
          <h2 className="text-6xl font-bold text-gray-900 mb-4">
            Our Affiliation & Accreditation
          </h2>
          <p className=" text-left text-lg text-gray-600 max-w-3xl">
            Collaborating with industry leaders and educational institutions to deliver excellence
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 items-center">
          {[
            // { src: "/ugc.gif", alt: "NSDC Logo" },
            { src: "/The_Glocal_University-_Logo.png", alt: "Glocal University Logo" },
            { src: "/homePage_logo/sikkim skill.jpg", alt: "Sikkim Skill Logo" },
            { src: "/homePage_logo/cpsid 001.png", alt: "CPSID Logo" },

            { src: "/homePage_logo/adobe logo.png", alt: "Adobe Logo" },
            // { src: "/skill india.jpeg", alt: "Skill India Logo" },
            { src: "/homePage_logo/autodesk logo.png", alt: "Autodesk Logo" },
            { src: "/homePage_logo/meta logo.png", alt: "Meta Logo" },
            // { src: "/homePage_logo/cpsid 001.png", alt: "CPSID Logo" },
          ].map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-3 bg-gray-50 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={120}
                objectFit="contain"
                className="transition-opacity duration-300 hover:opacity-80"
              />
            </div>
          ))}
        </div>

        {/* Simple Divider */}
        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            Trusted by leading organizations worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default MembershipPartnership;
