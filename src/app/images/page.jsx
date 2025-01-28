import Image from "next/image";
import img from "../../../assets/img.jpg"
const page = () => {
    return (
        <div>
            <h4>we will show the images</h4>
            <Image src={img} alt="simple image" />
            <Image src={img} alt="simple image" width={500}/>
        </div>
    );
};

export default page;