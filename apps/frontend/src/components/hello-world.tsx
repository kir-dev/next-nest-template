import {cn} from "@/lib/utils";
import {HTMLAttributes} from "react";

export function HelloWorld({children, className, ...props}: HTMLAttributes<HTMLDivElement>){
    return <div className={cn("bg-white shadow-md p-10 rounded-lg", className)} {...props}>
        <h1>Hello, world!</h1>
        {children}
    </div>
}