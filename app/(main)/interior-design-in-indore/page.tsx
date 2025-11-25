import InteriorDesignComponent from "../../../components/cityComponents/InteriorDesignComponent";

export const metadata = {
    title: "Interior Design Course in Indore | Inframe School",
    description: "Master interior design techniques with Inframe School’s Interior Design Course in Indore. Perfect for creative career development."
};



function Page() {

    return (
        <div className="bg-white text-black mt-20">
            <InteriorDesignComponent
                title="Interior Design Course in Indore"
                duration="4 Years Full-Time"
                description="Master the art of modern spaces with a refined Interior Design Course."
                // description="You will learn interior designing, space planning, color schemes, furniture selection, lighting design, and modern design trends. The course also includes training on digital tools like AutoCAD, SketchUp, 3ds Max, and Adobe Suite to create realistic 3D models, layouts, and design presentations."
                content1="At Inframe, you can choose from multiple interior design programs like B.Des in Interior Design, B.VOC in Interior Design, B.Sc in Interior Design, One-Year Diploma in Interior Design, and Three-Year Diploma in Interior Design. If you are searching for an Interior Design Course in Indore, these programs help you build strong creative and technical skills. By the end of the course, you will have a professional portfolio and the confidence to work in the interior design industry."
                content2="You will learn interior designing, space planning, color schemes, furniture selection, lighting design, and modern design trends. The course also includes training on digital tools like AutoCAD, SketchUp, 3ds Max, and Adobe Suite to create realistic 3D models, layouts, and design presentations."
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}

            // software={softwareList} // ✅ Pass array of strings
            />
        </div>
    );
}


export default Page;