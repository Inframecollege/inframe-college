import DigitalMarketingComponent from "../../../components/cityComponents/digitalMarketingComponent";

export const metadata = {
    title: "Digital Marketing Course in Ahmedabad | Inframe School",
    description: "Gain job-ready SEO and ads skills with Inframe School’s Digital Marketing Course in Ahmedabad for career success."
};

function Page() {
    return (
        <div className="bg-white text-black mt-20">
            <DigitalMarketingComponent
                title="Digital Marketing Course"
                duration="4 Years Full-Time"
                content="The Bachelor of Vocation (B.VOC) in Digital Marketing is a comprehensive three-year program focused on modern marketing strategies. Students learn social media marketing, SEO, content marketing, and data analytics. The curriculum includes hands-on projects, industry certifications, and real-world campaign management experience."
                description="Unlock online growth with a professional Digital Marketing Course.
"
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}

export default Page;