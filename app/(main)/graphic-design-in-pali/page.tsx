import GraphicDesignComponent from "../../../components/cityComponents/GraphicDesignComponent";

export const metadata = {
    title: "Graphic Design Course in Pali – Learn Digital Design | Inframe School",
    description: "Start your creative journey with Inframe School’s Graphic Design Course in Pali. Get hands-on training in visual design, editing tools, and branding to prepare for top design jobs in India."
};

function Page() {

    return (
        <div className="bg-white text-black mt-20">
            <GraphicDesignComponent
                title="Graphic Design Course"
                duration="4 Years Full-Time"
                description="Master the art of visual communication with our graphic design programs. Create compelling designs that captivate and communicate."
                content="The Bachelor of Design (B.Des) in Graphic Design is a comprehensive four-year program that develops creative problem-solving skills through visual communication. Students learn typography, layout design, branding, digital illustration, and motion graphics. The program emphasizes both traditional design principles and modern digital tools, preparing students for diverse creative industry roles."
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}


export default Page;
