import UIUXDesignComponent from "../../../components/cityComponents/uiuxDesignComponent";

export const metadata = {
    title: "UI UX Design Course in Surat | Inframe School",
    description: "Build practical UI and UX design skills with Inframe School’s UI UX Design Course in Surat. Perfect for tech creatives."
};

function Page() {

    return (
        <div className="bg-white text-black mt-20">
            <UIUXDesignComponent
                title="UI/UX Design Course"
                duration="4 Years Full-Time"
                content="The Bachelor of Design (B.Des) in UI & UX Design is a four-year program focusing on creating exceptional digital experiences. Students learn user research, information architecture, interaction design, and prototyping. The curriculum covers both theoretical principles and practical applications of user-centered design, preparing graduates for roles in digital product design."
                description="Create meaningful user journeys with a UI UX Course.
"
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}

export default Page;