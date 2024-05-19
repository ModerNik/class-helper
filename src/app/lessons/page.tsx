'use client'

import Header from "@/components/layout/Header";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { columns } from "@/app/TableModels/lessons/columns";
import { DataTable } from "@/app/TableModels/lessons/data-table";
import { Lesson } from "@/models/journal";

async function getMockData(): Promise<Lesson[]> {
  // Fetch data from API here.
  return [
    {
      id: 1,
      date: "19.04.2024",
      time: "8:00 - 8:45",
      subject: "Математика",
      topic: "Квардратные уравнители 🗿",
      audience: "101",
      class: "7Ж",
    },
    {
      id: 2,
      date: "19.02.2024",
      time: "8:00 - 8:45",
      subject: "Геометрия",
      topic: "Квардратные уравнители 🗿",
      audience: "123",
      class: "7Ж",
    },
    {
      id: 6,
      date: "19.04.2044",
      time: "8:00 - 8:45",
      subject: "Математика",
      topic: "Квардратные уравнители 🗿",
      audience: "321",
      class: "7Ж",
    },
  ]
}


export default function LessonsPage() {
  const lessons = useQuery({ queryKey: ['lessons'], queryFn: getMockData })

  return (
    <ProtectedRoute>
      <main className="w-full h-full flex flex-col justify-center items-center">
        <Header />
        <section className="w-full flex flex-col justify-center items-center gap-[22px] max-w-screen-xl">
          <DataTable columns={columns} data={lessons.data || []} />
        </section>
      </main>
    </ProtectedRoute>
  );
}
