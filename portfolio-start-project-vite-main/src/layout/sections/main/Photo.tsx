import photo from "../../../assets/images/img.svg";
import ram1 from "../../../assets/images/ramki/Rectangle 22.png"
import ram2 from "../../../assets/images/ramki/Rectangle 21.png"
import ram3 from "../../../assets/images/ramki/Rectangle 20.png"
import ram4 from "../../../assets/images/ramki/Rectangle 19.png"
import ram5 from "../../../assets/images/ramki/Rectangle 17.png"
import {S} from "./Main_Styles.ts"


export const Photo = () => {
    return (
        <S.PhotoWrapper>
            <S.Photo src={photo} alt="pavan"/>
            <S.Frame1 src={ram1} alt=""/>
            <S.Frame2 src={ram2} alt=""/>
            <S.Frame3 src={ram3} alt=""/>
            <S.Frame4 src={ram4} alt=""/>
            <S.Frame5 src={ram5} alt=""/>
        </S.PhotoWrapper>
    );
};







