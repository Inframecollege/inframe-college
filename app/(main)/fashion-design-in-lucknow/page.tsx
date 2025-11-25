import FashionDesignComponent from "../../../components/cityComponents/fashionDesignComponent";

export const metadata = {
    title: "Fashion Design Course in Lucknow | Inframe School",
    description: "Gain practical fashion design experience with Inframe School’s Fashion Design Course in Lucknow."
};

function Page() {


    return (
        <div className="bg-white text-black mt-20">
            <FashionDesignComponent
                title="Fashion Design Course in Lucknow"
                duration="4 Years Full-Time"
                content1="At Inframe, you can choose from multiple fashion design programs like B.Des in Fashion Design, BVOC, B.Sc, One-Year Diploma, and Three-Year Diploma. If you are searching for a Fashion Design Course in Lucknow, these programs help you build strong creative and technical skills. By the end of the course, you will have a professional portfolio and the confidence to work in the fashion industry.
"
                content2="You will learn fashion sketching, pattern making, garment construction, fabric study, modern fashion trends, and eco-friendly design ideas. The course also includes training on digital tools like Adobe Suite, Photoshop, Illustrator, and Corel Draw to create digital designs, mood boards, and patterns.
"
                description="Develop couture-level skills with a detailed Fashion Design Course.
"
                index={0}
                category=""
                software={["Photoshop", "Illustrator", "Corel Draw", "Maya", "After Effects", "Blender"]}
            />
        </div>
    );
}

export default Page;