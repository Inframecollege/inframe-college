import GraphicDesignComponent from "../../../components/cityComponents/GraphicDesignComponent";

export const metadata = {
    title: "Graphic Design Course in Sikar – Learn Digital Design | Inframe School",
    description: "Start your creative journey with Inframe School’s Graphic Design Course in Sikar. Get hands-on training in visual design, editing tools, and branding to prepare for top design jobs in India."
};



function Page() {

    return (
        <div className="bg-white text-black mt-20">
            <GraphicDesignComponent
                title="Graphic Design Course in Sikar"
                duration="4 Years Full-Time"
                description="You will learn graphic designing, visual communication, typography, logo and branding design, digital illustrations, and modern design trends. The course also includes training on digital tools like Adobe Suite, Photoshop, Illustrator, and Corel Draw to create professional designs, mockups, and portfolios."
                content="At Inframe, you can choose from multiple graphic design programs like B.Des in Graphic Design, B.VOC in Graphic Design, B.Sc in Graphic Design, One-Year Diploma in Graphic Design, and Three-Year Diploma in Graphic Design. If you are searching for a Graphic Design Course in Sikar, these programs help you build strong creative and technical skills. By the end of the course, you will have a professional portfolio and the confidence to work in the graphic design industry."
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}

            // software={softwareList} // ✅ Pass array of strings
            />
        </div>
    );
}


export default Page;
