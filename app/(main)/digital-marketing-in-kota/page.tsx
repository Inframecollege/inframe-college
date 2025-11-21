import DigitalMarketingComponent from "../../../components/cityComponents/digitalMarketingComponent";
import UIUXDesignComponent from "../../../components/cityComponents/uiuxDesignComponent";

export const metadata = {
    title: "Digital Marketing Course in Kota – Professional Training | Inframe School",
    description: "Join Inframe School’s Digital Marketing Course in Kota and master tools, branding, and digital creativity. Learn from industry experts and build a professional portfolio for a successful career."
};

function Page() {
    return (
        <div className="bg-white text-black mt-20">
            <DigitalMarketingComponent
                title="Digital Marketing Course"
                duration="4 Years Full-Time"
                content="The Bachelor of Vocation (B.VOC) in Digital Marketing is a comprehensive three-year program focused on modern marketing strategies. Students learn social media marketing, SEO, content marketing, and data analytics. The curriculum includes hands-on projects, industry certifications, and real-world campaign management experience."
                description="Master the strategies that drive online success. Our digital marketing programs prepare you for a career in this fast-paced digital world."
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}

export default Page;