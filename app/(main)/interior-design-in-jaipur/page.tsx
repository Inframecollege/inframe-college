// import CityPageComponent from "../../../../components/Courses/CityPageComponent";

// import CityPageComponent from "../../../../../components/Courses/CityPageComponent";
import InteriorDesignComponent from "../../../components/cityComponents/InteriorDesignComponent";

export const metadata = {
    title: "Interior Design Course in Jaipur | Inframe School",
    description: "Learn interior design concepts, materials, and software with Inframe School’s Interior Design Course in Jaipur. Start your design career."
};



function Page() {
    return (
        <div className="bg-white text-black mt-20">
            <InteriorDesignComponent
                title="Interior Design Course in Jaipur"
                duration="4 Years Full-Time"
                description="Build a design career that stands out with our Interior Design Course.
"
                // description="You will learn interior designing, space planning, color schemes, furniture selection, lighting design, and modern design trends. The course also includes training on digital tools like AutoCAD, SketchUp, 3ds Max, and Adobe Suite to create realistic 3D models, layouts, and design presentations."
                content1="At Inframe, you can choose from multiple interior design programs like B.Des in Interior Design, B.VOC in Interior Design, B.Sc in Interior Design, One-Year Diploma in Interior Design, and Three-Year Diploma in Interior Design. If you are searching for an Interior Design Course in Jaipur, these programs help you build strong creative and technical skills. By the end of the course, you will have a professional portfolio and the confidence to work in the interior design industry."
                content2="You will learn interior designing, space planning, color schemes, furniture selection, lighting design, and modern design trends. The course also includes training on digital tools like AutoCAD, SketchUp, 3ds Max, and Adobe Suite to create realistic 3D models, layouts, and design presentations."
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}


export default Page;