import FashionDesignComponent from "../../../components/cityComponents/fashionDesignComponent";

export const metadata = {
    title: "Fashion Design Course in Pali | Inframe School",
    description: "Learn garment making, styling, and fashion tools with the Fashion Design Course in Pali by Inframe School."
};


function Page() {


    return (
        <div className="bg-white text-black mt-20">
            <FashionDesignComponent
                title="Fashion Design Course"
                duration="4 zYears Full-Time"
                   content1="At Inframe, you can choose from multiple fashion design programs like B.Des in Fashion Design, BVOC, B.Sc, One-Year Diploma, and Three-Year Diploma. If you are searching for a Fashion Design Course in Pali, these programs help you build strong creative and technical skills. By the end of the course, you will have a professional portfolio and the confidence to work in the fashion industry."

                content2="You will learn fashion sketching, pattern making, garment construction, fabric study, modern fashion trends, and eco-friendly design ideas. The course also includes training on digital tools like Adobe Suite, Photoshop, Illustrator, and Corel Draw to create digital designs, mood boards, and patterns."
                description="Unlock your potential with a high-end Fashion Design Course.
"
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}

export default Page;