"use client"

import { useState, useEffect } from "react"
import { SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

interface SearchProps {
  placeholder?: string
  type?: "inline" | "dialog"
  data?: any[]
  onSearch?: (query: string) => void
}

export function Search({ placeholder = "Search...", type = "inline", data = [], onSearch }: SearchProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSearch = (value: string) => {
    setQuery(value)
    if (onSearch) {
      onSearch(value)
    }
  }

  const handleSelect = (item: any) => {
    setOpen(false)
    if (item.type === "article") {
      router.push(`/blog/${item.id}`)
    } else if (item.type === "product") {
      router.push(`/marketplace/${item.id}`)
    }
  }

  if (type === "dialog") {
    return (
      <>
        <Button
          variant="outline"
          className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
          onClick={() => setOpen(true)}
        >
          <SearchIcon className="h-4 w-4 xl:mr-2" />
          <span className="hidden xl:inline-flex">Search...</span>
          <span className="sr-only">Search</span>
          <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Search articles, products, and more..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Articles">
              {data
                .filter((item) => item.type === "article" && item.title.toLowerCase().includes(query.toLowerCase()))
                .map((item) => (
                  <CommandItem key={item.id} onSelect={() => handleSelect(item)}>
                    {item.title}
                  </CommandItem>
                ))}
            </CommandGroup>
            <CommandGroup heading="Products">
              {data
                .filter((item) => item.type === "product" && item.title.toLowerCase().includes(query.toLowerCase()))
                .map((item) => (
                  <CommandItem key={item.id} onSelect={() => handleSelect(item)}>
                    {item.title}
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    )
  }

  return (
    <div className="relative">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        className="w-full pl-8"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  )
}

