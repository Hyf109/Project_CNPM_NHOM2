import React from "react";
import { useEffect } from "react";

export const useIntersectionObserver = (ref, callback, options) => {
    useEffect(() => {
        const observer = new IntersectionObserver(callback, options) 

        if(ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if(ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [ref, callback, options])
}