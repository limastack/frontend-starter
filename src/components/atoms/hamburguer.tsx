"use client"
import { useLottie } from "lottie-react";
import animationData from "@/lib/animations/lootie_hamburguer_close_white.json"
import { cn } from "@/lib/utils";
import { useState } from "react";

const options = {
    animationData: animationData,
    autoplay: false,
    loop: false,
    style: { width: 40, height: 40, cursor: "pointer" },
};

const Hamburguer = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
    const lottieElement = useLottie(options);
    lottieElement.setSpeed(1.5)
    
    function clickHandler() {
        if (openDrawer) {
            lottieElement.play()
            lottieElement.setDirection(-1)
            setOpenDrawer(false)
        } else {
            lottieElement.play()
            lottieElement.setDirection(1)
            setOpenDrawer(true)
        }
    }


    return (
        <>
            <button className="z-50" onClick={clickHandler}>{lottieElement.View}</button>
            <div className={cn("flex w-full h-screen bg-slate-700 fixed top-0 left-0 transition-all ease-out duration-700", openDrawer ? "translate-y-0" : "-translate-y-[calc(100%)]")}></div>
        </>
    )
}

Hamburguer.displayName = 'Hamburguer'

export default Hamburguer