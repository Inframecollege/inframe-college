import InteriorDesignComponent from "../../../components/cityComponents/InteriorDesignComponent";

export const metadata = {
    title: "Interior Design Course in Bikaner | Inframe School",
    description: "Enhance your creativity with the Interior Design Course in Bikaner by Inframe School. Learn practical skills and industry-ready tools"
};



function Page() {

    return (
        <div className="bg-white text-black mt-20">
            <InteriorDesignComponent
                title="Interior Design Course"
                duration="4 Years Full-Time"
                description="Shape timeless interiors with a professional Interior Design Course.
"
                // description="You will learn interior designing, space planning, color schemes, furniture selection, lighting design, and modern design trends. The course also includes training on digital tools like AutoCAD, SketchUp, 3ds Max, and Adobe Suite to create realistic 3D models, layouts, and design presentations."
                content1="At Inframe, you can choose from multiple interior design programs like B.Des in Interior Design, B.VOC in Interior Design, B.Sc in Interior Design, One-Year Diploma in Interior Design, and Three-Year Diploma in Interior Design. If you are searching for an Interior Design Course in Bikaner, these programs help you build strong creative and technical skills. By the end of the course, you will have a professional portfolio and the confidence to work in the interior design industry."
                content2="You will learn interior designing, space planning, color schemes, furniture selection, lighting design, and modern design trends. The course also includes training on digital tools like AutoCAD, SketchUp, 3ds Max, and Adobe Suite to create realistic 3D models, layouts, and design presentations.
"
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}


export default Page;