import AnimationVFXComponent from "../../../components/cityComponents/AnimationVFXComponent";

export const metadata = {
    title: "Animation & VFX Course in Sikar | Inframe School",
    description: "Learn Animation & VFX in Sikar at Inframe School with professional training, studio tools, and hands-on project experience."
};

function Page() {

    return (
        <div className="bg-white text-black mt-20">
            <AnimationVFXComponent
                title="Animation VFX Course"
                duration="4 Years Full-Time"
                content="The Bachelor of Design (B.Des) in UI & UX Design is a four-year program focusing on creating exceptional digital experiences. Students learn user research, information architecture, interaction design, and prototyping. The curriculum covers both theoretical principles and practical applications of user-centered design, preparing graduates for roles in digital product design."
                description="Transform raw footage with advanced VFX workflows.
"
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}

export default Page;