
import { Facebook, Youtube, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white font-sans py-16">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-2xl mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/about" className="hover:text-blue-500 transition duration-300">About Us</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition duration-300">Admission Process</Link></li>
            <li><Link href="/lifeatinframe" className="hover:text-blue-500 transition duration-300">Campus</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition duration-300">Faculty</Link></li>
            <li><Link href="/advisors" className="hover:text-blue-500 transition duration-300">Advisors</Link></li>
            <li><Link href="#" className="hover:text-blue-500 transition duration-300">News & Events</Link></li>
            <li><Link href="/careers" className="hover:text-blue-500 transition duration-300">Careers</Link></li>
            <li><Link href="/download" className="hover:text-blue-500 transition duration-300">Downloads</Link></li>
          </ul>
        </div>

        {/* Courses Section */}
        <div>
          <h3 className="font-bold text-2xl mb-6">Courses We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              <li className="font-bold">Interior Design</li>
              <li>B. Des in Interior Design</li>
              <li>B.VOC in Interior Design</li>
              <li>B.Sc in Interior Design</li>
              <li>1-Year Diploma in Interior Design</li>
              <li>3-Year Diploma in Interior Design</li>
            </ul>
            <ul className="space-y-3">
              <li className="font-bold">Fashion Design</li>
              <li>B. Des in Fashion Design</li>
              <li>B.VOC in Fashion Design</li>
              <li>B.Sc in Fashion Design</li>
              <li>1-Year Diploma in Fashion Design</li>
              <li>3-Year Diploma in Fashion Design</li>
            </ul>
            <ul className="space-y-3">
              <li className="font-bold">Graphic Design</li>
              <li>B. Des in Graphic Design</li>
              <li>B.VOC in Graphic Design</li>
              <li>B.Sc in Graphic Design</li>
              <li>1-Year Diploma in Graphic Design</li>
              <li>3-Year Diploma in Graphic Design</li>
            </ul>
            <ul className="space-y-3">
              <li className="font-bold">UI & UX Design</li>
              <li>B. Des in UI & UX Design</li>
              <li>1-Year Diploma in UI & UX Design</li>
            </ul>
          </div>
        </div>

        {/* Locate Us Section */}
        <div>
          <h3 className="font-bold text-2xl mb-6">Locate Us</h3>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28944.773590809277!2d72.8512564!3d26.2424944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418e9b41703f4d%3A0xa8313d8409192420!2s09%2C%20Pal%20Link%20Rd%2C%20Marudhar%20Nagar%2C%20Kamla%20Nehru%20Nagar%2C%20Shyam%20Nagar%2C%20Jodhpur%2C%20Rajasthan%20342008!5e0!3m2!1sen!2sin!4v1671167712000!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
          <p className="mt-4 text-sm opacity-80">
            09, Pal Link Road, <br />
            Marudhar Nagar, Kamla Nehru Nagar, <br />
            Shyam Nagar, Jodhpur, Rajasthan 342008
          </p>
          <p className="mt-4 text-sm opacity-80">
            <strong>Admissions:</strong> +91 9649 9649 37
            <br />
            <strong>Admin:</strong> +91 9649 9649 70
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:info@inframecollege.org" className="underline text-blue-400">
              info@inframecollege.org
            </a>
            <br />
            <strong>Careers:</strong>{" "}
            <a href="mailto:hr@inframecollege.org" className="underline text-blue-400">
              hr@inframecollege.org
            </a>
          </p>
          <div className="flex space-x-6 mt-8">
            <Link href="#" className="text-blue-500 hover:text-blue-600 transition duration-300"><Facebook size={30} /></Link>
            <Link href="#" className="text-red-500 hover:text-red-600 transition duration-300"><Youtube size={30} /></Link>
            <Link href="#" className="text-pink-500 hover:text-pink-600 transition duration-300"><Instagram size={30} /></Link>
            <Link href="#" className="text-blue-700 hover:text-blue-800 transition duration-300"><Linkedin size={30} /></Link>
            <Link href="#" className="text-sky-500 hover:text-sky-600 transition duration-300"><Twitter size={30} /></Link>
          </div>
        </div>
      </div>

      {/* Free Courses Section */}
      <div className="mt-16 border-t border-gray-700 pt-8">
        <div className="container mx-auto px-6 lg:px-16 text-center text-sm">
          <p>
            <span className="font-semibold">Free Courses:</span> Copywriting · Digital Marketing · Graphic Design · 
            Interior Design · Digital Software · Facebook Ads · Google Ads · SEO · 
            Digital Painting · Illustrations · Sewing Machine Technique · Furniture Making · 
            Sketching · Drawing · Video Editing · Fashion Styling · Fashion Communication · 
            English Communication · Animation · VFX · Jewellery Design · CAD Design · 
            Painting · Business Management · Draping · Pattern Making · Carpentry · 
            Entrepreneurship Skills · Advertising · Marketing
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t-2 border-gray-800 pt-6">
        <div className="container mx-auto px-6 lg:px-16 text-center text-sm opacity-80">
          <p>
            © 2025 Inframe. Ltd. All rights reserved Inframe School of Art, Design & Business is a Unit of Inframe Educational Society Registered under the Rajasthan Society Act.  <br />
            <Link href={"/privacy-policy"} className="hover:underline">Privacy Policy</Link> ·{" "}
            <Link href={"/cancellation-and-refund"} className="hover:underline">Cancellation and Refund</Link> ·{" "}
            <Link href={"/terms-and-conditions"} className="hover:underline">Terms & Conditions</Link> ·{" "}
            <Link href={"/shipping-policy"} className="hover:underline">Shipping and Delivery</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
