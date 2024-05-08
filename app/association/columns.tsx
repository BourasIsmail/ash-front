"use client";

import { ColumnDef } from "@tanstack/react-table";
import { access } from "fs";
import { Association, associations } from "../data/Association";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "../components/ui/DataTableColumnHeader";

export const columns: ColumnDef<Association>[] = [
  {
    accessorKey: "nomAssociation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="اسم الجمعية" />
    ),
  },
  {
    accessorKey: "nomPresident",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="اسم الرئيس" />
    ),
  },
  {
    accessorKey: "emailPresident",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="البريد الإلكتروني" />
    ),
  },
  {
    accessorKey: "adresse",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="العنوان" />
    ),
  },
  {
    accessorKey: "province.name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="المدينة" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const association = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(association.id.toString())
              }
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
