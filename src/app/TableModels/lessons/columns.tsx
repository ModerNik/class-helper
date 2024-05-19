"use client"

import { Lesson } from "@/models/journal"
import { ColumnDef } from "@tanstack/react-table"
import {
  ArrowUpDown,
  ChevronRight,
  Trash2
} from "lucide-react"

export const columns: ColumnDef<Lesson>[] = [
  {
    accessorKey: "time",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Время
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      )
    },
  },
  {
    accessorKey: "subject",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Предмет
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      )
    },
  },
  {
    accessorKey: "topic",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Тема
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      )
    },
  },
  {
    accessorKey: "audience",
    header: ({ column }) => {
      return (
        <button
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Кабинет
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      )
    },
  },
  {
    id: "chevron",
    cell: ({ row }) => (
      <div className="w-full flex justify-end">
        <ChevronRight
          className="size-[18px] flex self-end"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
]