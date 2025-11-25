import DigitalMarketingComponent from "../../../components/cityComponents/digitalMarketingComponent";

export const metadata = {
    title: "Digital Marketing Course in Agra | Inframe School",
    description: "Learn SEO, PPC, and analytics with Inframe School’s Digital Marketing Course in Agra for a strong digital career."
};

function Page() {
    return (
        <div className="bg-white text-black mt-20">
            <DigitalMarketingComponent
                title="Digital Marketing Course"
                duration="4 Years Full-Time"
                content="The Bachelor of Vocation (B.VOC) in Digital Marketing is a comprehensive three-year program focused on modern marketing strategies. Students learn social media marketing, SEO, content marketing, and data analytics. The curriculum includes hands-on projects, industry certifications, and real-world campaign management experience."
                description="Master modern strategies with a high-end Digital Marketing Course.
"
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}

export default Page;