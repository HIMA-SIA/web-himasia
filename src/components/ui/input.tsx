import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base styles
        "flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        
        // Selection styles
        "selection:bg-gray-700 selection:text-white",
        
        // Light mode styles
        "border-input bg-transparent text-foreground placeholder:text-muted-foreground file:text-foreground",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
        
        // Dark mode styles
        "dark:border-gray-700 dark:bg-gray-800/80 dark:text-white dark:placeholder:text-gray-400",
        "dark:focus-visible:border-gray-500 dark:focus-visible:ring-gray-500/30",
        "dark:aria-invalid:ring-destructive/40 dark:aria-invalid:border-red-900",
        
        className
      )}
      {...props}
    />  
  )
}

export { Input }
