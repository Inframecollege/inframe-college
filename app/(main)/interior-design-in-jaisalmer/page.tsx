import InteriorDesignComponent from "../../../components/cityComponents/InteriorDesignComponent";

export const metadata = {
    title: "Interior Design Course in Jaisalmer – Professional Training | Inframe School",
    description: "Join Inframe School’s Interior Design Course in Jaisalmer and master design tools, branding, and digital creativity. Learn from industry experts and build a professional portfolio for a successful design career."
};



function Page() {

    return (
        <div className="bg-white text-black mt-20">
            <InteriorDesignComponent
                title="Interior Design Course"
                duration="4 Years Full-Time"
                description="Transform spaces and shape experiences through our comprehensive design program. Learn from industry experts and build a successful career in interior design."
                content="The Bachelor of Design (B.Des) in Interior Design is a four-year full-time program designed to provide students with an in-depth understanding of interior spaces, aesthetics, and functionality. This course focuses on developing creativity, technical knowledge, and problem-solving abilities in design. Students explore design principles, material studies, lighting techniques, sustainable design, and digital rendering. The curriculum integrates theoretical knowledge with hands-on studio projects, emphasizing modern software like AutoCAD, SketchUp, and Revit. Graduates can pursue careers as interior designers, space planners, furniture designers, and exhibition designers."
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}


export default Page;