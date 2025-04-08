import { cn } from "@/lib/utils"

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "container mx-auto px-4 md:px-6 w-full max-w-[1200px]", 
        className
      )}
      {...props}
    />
  )
}