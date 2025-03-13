import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { LogOut, SquareUser } from "lucide-react";

export const UserDropdown = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-full gap-2 justify-start px-2">
            <Avatar className="w-8 h-8 block">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>SteveHerison</p>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="center"
          className="w-[var(--radix-dropdown-menu-trigger-width)]"
        >
          <Link passHref href="/dashboard/profile">
            <DropdownMenuItem className="gap-2">
              <SquareUser /> Conta
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem className="gap-2">
            <LogOut />
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
