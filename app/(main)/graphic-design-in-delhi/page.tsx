import GraphicDesignComponent from "../../../components/cityComponents/GraphicDesignComponent";

export const metadata = {
    title: "Graphic Design Course in Delhi – Professional Training | Inframe School",
    description: "Join Inframe School’s Graphic Design Course in Delhi and master design tools, branding, and digital creativity. Learn from industry experts and build a professional portfolio for a successful design career."
};



function Page() {

    return (
        <div className="bg-white text-black mt-20">
            <GraphicDesignComponent
                title="Graphic Design Course"
                duration="4 Years Full-Time"
                description="Master the art of visual communication with our graphic design programs. Create compelling designs that captivate and communicate." content="The Bachelor of Design (B.Des) in Graphic Design is a comprehensive four-year program that develops creative problem-solving skills through visual communication. Students learn typography, layout design, branding, digital illustration, and motion graphics. The program emphasizes both traditional design principles and modern digital tools, preparing students for diverse creative industry roles."
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}

            />
        </div>
    );
}


export default Page;