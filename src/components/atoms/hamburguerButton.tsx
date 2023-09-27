"use client"
import { useLottie } from "lottie-react";
import animationData from "@/lib/animations/lootie_hamburguer_close_white.json"

const options = {
    animationData: animationData,
    autoplay: false,
    loop: false,
    style: { width: 32, height: 32, cursor: "pointer" },
};

export interface HamburguerButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    drawerId: string;
}


const HamburguerButton = ({ drawerId }: HamburguerButtonProps) => {
    const lottieElement = useLottie(options);
    if (lottieElement) lottieElement.setSpeed(1.5)

    function clickHandler() {
        const drawer = document.getElementById(drawerId)
        if (drawer) {
            if (drawer.classList.contains("-translate-y-full")) { // closed
                lottieElement.play()
                lottieElement.setDirection(1)
            } else {
                lottieElement.play()
                lottieElement.setDirection(-1)
            }
            drawer.classList.toggle("-translate-y-full")
        }
    }

    return (
        <button className="z-50" onClick={clickHandler}>{lottieElement.View}</button>
    )
}

HamburguerButton.displayName = 'HamburguerButton'

export default HamburguerButton