import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {animateScroll as scroll} from "react-scroll/modules";
import {useEffect} from "react";
import {useState} from "react";


export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 200){
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }


        })
    }, [])

    return (
        <>
            {showBtn && (
                <StylydGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                    <Icon iconId={'top'} width={'16px'} height={'15px'} />
                </StylydGoTopBtn>
            )}
        </>
    )
};

const StylydGoTopBtn = styled.button`
    border-right-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
`