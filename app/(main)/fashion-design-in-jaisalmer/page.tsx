import FashionDesignComponent from "../../../components/cityComponents/fashionDesignComponent";

export const metadata = {
    title: "Fashion Design Course in Jaisalmer | Inframe School",
    description: "Master fashion sketching, garment construction, and styling with Inframe School’s Fashion Design Course in Jaisalmer."
};


function Page() {


    return (
        <div className="bg-white text-black mt-20">
            <FashionDesignComponent
                title="Fashion Design Course in Jaisalmer"
                duration="4 Years Full-Time"
                content1="At Inframe, you can choose from multiple fashion design programs like B.Des in Fashion Design, BVOC, B.Sc, One-Year Diploma, and Three-Year Diploma. If you are searching for a Fashion Design Course in Jaisalmer, these programs help you build strong creative and technical skills. By the end of the course, you will have a professional portfolio and the confidence to work in the fashion industry."

                content2="You will learn fashion sketching, pattern making, garment construction, fabric study, modern fashion trends, and eco-friendly design ideas. The course also includes training on digital tools like Adobe Suite, Photoshop, Illustrator, and Corel Draw to create digital designs, mood boards, and patterns."
                description="Create meaningful designs with an immersive Fashion Design Course."

                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}





export default Page;