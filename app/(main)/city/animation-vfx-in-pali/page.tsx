import AnimationVFXComponent from "../../../../components/cityComponents/AnimationVFXComponent";

export const metadata = {
    title: "Animation & VFX Course in Pali | Inframe School",
    description: "Join Inframe School for industry-focused Animation & VFX Course in Pali and build strong creative and technical skills for a successful career."
};

function Page() {

    return (
        <div className="bg-white text-black mt-20">
            <AnimationVFXComponent
                title="Animation VFX Course"
                duration="4 Years Full-Time"
                content="The Bachelor of Design (B.Des) in UI & UX Design is a four-year program focusing on creating exceptional digital experiences. Students learn user research, information architecture, interaction design, and prototyping. The curriculum covers both theoretical principles and practical applications of user-centered design, preparing graduates for roles in digital product design."
                description="Bring characters, creatures, and environments to life.
"
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}

export default Page;