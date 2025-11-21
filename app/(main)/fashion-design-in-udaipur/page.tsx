import FashionDesignComponent from "../../../components/cityComponents/fashionDesignComponent";

export const metadata = {
    title: "Fashion Design Course in Udaipur – Professional Training | Inframe School",
    description: "Join Inframe School’s Fashion Design Course in Udaipur and master design tools, branding, and digital creativity. Learn from industry experts and build a professional portfolio for a successful design career."
};

function Page() {

    return (
        <div className="bg-white text-black mt-20">
            <FashionDesignComponent
                title="Fashion Design Course"
                duration="4 Years Full-Time"
                content="The Bachelor of Design (B.Des) in Fashion Design is a four-year program that combines creativity with technical expertise. Students learn fashion illustration, pattern making, garment construction, textile design, and trend forecasting. The program emphasizes both traditional craftsmanship and modern technology, preparing students for the dynamic fashion industry. Through hands-on projects and industry collaborations, students develop their unique design aesthetic while gaining practical skills in fashion merchandising, sustainable fashion, and digital design tools."
                description="Unleash your creativity in the world of fashion. Our programs prepare you for a dynamic career in fashion design, from concept to runway."
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}

export default Page;