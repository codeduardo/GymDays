import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Dumbbell, Search } from "lucide-react";

export const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
            <Button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"><svg stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"><path d="M3 5H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 19H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></Button>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="w-full flex-1 md:w-auto md:flex-none">               
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64">
                      <span className="hidden lg:inline-flex">Search documentation...</span>
                      <span className="inline-flex lg:hidden">Search...</span>
                    </Button> 
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <div className="flex items-center border-b px-3 absolute top-1 left-0 w-full">
                        <Search size={18}/>
                        <Input className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none" autoFocus type="text" placeholder="Escribe una palabra"/>
                      </div>
                    </DialogHeader>
                    <div className="flex flex-col gap-4 pt-5">
                      <span className="text-xs text-white/50 ">Links</span>
                      <div className="flex flex-col">
                        <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 bg-slate-200">
                          <Dumbbell size={20} className="mr-3"/>
                          Link de interes</div>
                        <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50"> <Dumbbell size={20} className="mr-3"/> Link de interes</div>
                        <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50"> <Dumbbell size={20} className="mr-3"/> Link de interes</div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>               
              </div>
            </div>
        </div>
    </header>
  )
} 
