// import JewelleryDesignComponent from "../../../components/cityComponents/JewelleryDesignComponent";

import JewelleryDesignComponent from "../../../components/cityComponents/JewelleryDesignComponent";

export const metadata = {
    title: "Jewellery Design Course in Agra | Inframe School",
    description: "Join Inframe School’s Jewellery Design Course in Agra to gain practical design skills and start your jewellery design career."
};

function Page() {


    return (
        <div className="bg-white text-black mt-20">
            <JewelleryDesignComponent
                title="Jewellery Design Course"
                duration="3 Years Full-Time"
                content="The Bachelor of Vocation (B.VOC) in Jewellery Design is a three-year full-time program that combines creative design skills with technical expertise in jewellery making. This comprehensive course focuses on developing both artistic vision and practical craftsmanship skills essential for the jewellery industry. Students learn various aspects of jewellery design, including traditional and contemporary techniques, gemology, metal work, and digital design tools. The curriculum covers topics such as design principles, material studies, stone setting, metal casting, and CAD/CAM technologies for jewellery production. Throughout the program, students gain hands-on experience in professional workshops, working with different materials and techniques. They learn about various aspects of jewellery making, from concept development to final production. The course also includes modules on business management, marketing, and entrepreneurship specific to the jewellery industry. Students study historical and contemporary jewellery trends, precious metals, gemstones, and sustainable practices in jewellery making. By the final year, students participate in industry internships and create professional portfolios. Graduates can pursue careers as jewellery designers, CAD specialists, production managers, or establish their own jewellery design studios."
                description="Discover the art of luxury craftsmanship with a Jewellery Design Course.
"
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}

export default Page;