import {S} from "./Main_Styles.ts"
import Typewriter from 'typewriter-effect';
import {useEffect}  from "react";
import {useState} from "react";

 export const MainBlock = () => {
     const [isMobile, setIsMobile] = useState(false);

     useEffect(() => {
         const handleResize = () => {
             setIsMobile(window.innerWidth <= 992);
         };

         handleResize();
         window.addEventListener('resize', handleResize);

         return () => window.removeEventListener('resize', handleResize);
     }, []);

    return (
        <S.Wrapper>
            <S.Text>Hi 👋,
                <br/>
                My name is
                <br/>
                <S.Name>Pavan MG</S.Name>
            </S.Text>
            <S.Tittle>
                {!isMobile ? (
                    <Typewriter
                        options={{
                            strings: ['I build things for web'],
                            autoStart: true,
                            loop: true,
                            delay: 100
                        }}
                    />
                ) : (
                    <p>I build things for web</p>
                )}
            </S.Tittle>
        </S.Wrapper>
    );
 };



