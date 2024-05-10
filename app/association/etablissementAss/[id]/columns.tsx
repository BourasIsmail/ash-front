"use client";

import { ColumnDef } from "@tanstack/react-table";
import { access } from "fs";
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
import { Etablissement } from "@/app/data/Etablissement";
import { DataTableColumnHeader } from "@/app/components/ui/DataTableColumnHeader";

export const columns: ColumnDef<Etablissement>[] = [
  {
    accessorKey: "nomEtablissement",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="اسم المؤسسة" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="البريد الالكتروني " />
    ),
  },
  {
    accessorKey: "milieu",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="المجال الترابي" />
    ),
  },
  {
    accessorKey: "codeAutorisation",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="رقم الترخيص" />
    ),
  },
  {
    accessorKey: "nomDirecteur",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="مدير المؤسسة" />
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
          <DropdownMenuContent className="text-right" align="end">
            <DropdownMenuLabel>الوظائف</DropdownMenuLabel>
            <DropdownMenuItem>تفاصيل المؤسسة</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>حذف المؤسسة</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
