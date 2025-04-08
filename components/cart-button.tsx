"use client"

import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"

export function CartButton() {
  const { itemCount } = useCart()

  return (
    <Link href="/cart">
      <Button variant="outline" size="icon" className="relative">
        <ShoppingCart className="h-4 w-4" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
            {itemCount}
          </span>
        )}
        <span className="sr-only">Cart</span>
      </Button>
    </Link>
  )
}

