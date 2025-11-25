import GraphicDesignComponent from "../../../components/cityComponents/GraphicDesignComponent";

export const metadata = {
    title: "Graphic Design Course in Ahmedabad | Inframe School",
    description: "Learn digital design, branding, and creative tools with the Graphic Design Course in Ahmedabad by Inframe School."
};



function Page() {

    return (
        <div className="bg-white text-black mt-20">
            <GraphicDesignComponent
                title="Graphic Design Course in Ahmedabad"
                duration="4 Years Full-Time"
                description="Learn modern design tools through our Graphic Design Course.
" 
                content1="At Inframe, you can choose from multiple graphic design programs like B.Des in Graphic Design, B.VOC in Graphic Design, B.Sc in Graphic Design, One-Year Diploma in Graphic Design, and Three-Year Diploma in Graphic Design. If you are searching for a Graphic Design Course in Ahmedabad, these programs help you build strong creative and technical skills. By the end of the course, you will have a professional portfolio and the confidence to work in the graphic design industry."
                content2="You will learn graphic designing, visual communication, typography, logo and branding design, digital illustrations, and modern design trends. The course also includes training on digital tools like Adobe Suite, Photoshop, Illustrator, and Corel Draw to create professional designs, mockups, and portfolios."
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}

            />
        </div>
    );
}


export default Page;