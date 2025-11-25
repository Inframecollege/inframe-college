import DigitalMarketingComponent from "../../../components/cityComponents/digitalMarketingComponent";

export const metadata = {
    title: "Digital Marketing Course in Surat | Inframe School",
    description: "Learn SEO, PPC, and social media skills with Inframe School’s Digital Marketing Course in Surat for career growth."
};

function Page() {
    return (
        <div className="bg-white text-black mt-20">
            <DigitalMarketingComponent
                title="Digital Marketing Course"
                duration="4 Years Full-Time"
                content="The Bachelor of Vocation (B.VOC) in Digital Marketing is a comprehensive three-year program focused on modern marketing strategies. Students learn social media marketing, SEO, content marketing, and data analytics. The curriculum includes hands-on projects, industry certifications, and real-world campaign management experience."
                description="Train with mentors in a premium Digital Marketing Course.
"
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}

export default Page;