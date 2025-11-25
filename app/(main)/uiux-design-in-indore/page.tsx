import UIUXDesignComponent from "../../../components/cityComponents/uiuxDesignComponent";

export const metadata = {
    title: "UI UX Design Course in Indore | Inframe School",
    description: "Build app and web interface design skills with the UI UX Design Course in Indore by Inframe School."
};

function Page() {

    return (
        <div className="bg-white text-black mt-20">
            <UIUXDesignComponent
                title="UI/UX Design Course"
                duration="4 Years Full-Time"
                content="The Bachelor of Design (B.Des) in UI & UX Design is a four-year program focusing on creating exceptional digital experiences. Students learn user research, information architecture, interaction design, and prototyping. The curriculum covers both theoretical principles and practical applications of user-centered design, preparing graduates for roles in digital product design."
                description="Train with experts in a high-end UI UX Course.
"
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}

export default Page;