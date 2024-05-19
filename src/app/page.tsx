'use client'

import Header from "@/components/layout/Header";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Lesson } from "@/models/journal";
import { DataTable } from "./TableModels/schedule/data-table";
import { columns } from "./TableModels/schedule/columns";

async function getMockData(): Promise<Lesson[]> {
  // Fetch data from API here.
  return [
    {
      id: 1,
      date: "19.04.2024",
      time: "8:00 - 10:45",
      subject: "Математика",
      topic: "Квардратные уравнители 🗿",
      audience: "101",
      class: "7Ж",
    },
    {
      id: 2,
      date: "19.04.2024",
      time: "8:00 - 8:45",
      subject: "Математика",
      topic: "Квардратные уравнители 🗿",
      audience: "102",
      class: "7Ж",
    },
    {
      id: 6,
      date: "19.04.2024",
      time: "12:00 - 14:45",
      subject: "Математика",
      topic: "Квардратные уравнители 🗿",
      audience: "104",
      class: "7Ж",
    },
  ]
}


export default function Home() {
  const schedule = useQuery({ queryKey: ['schedule'], queryFn: getMockData })

  return (
    <ProtectedRoute>
      <main className="w-full h-full flex flex-col justify-center items-center">
        <Header />
        <section className="w-full flex flex-col justify-center items-center gap-[22px] max-w-screen-xl">
          <DataTable columns={columns} data={schedule.data || []} />
        </section>
      </main>
    </ProtectedRoute>
  );
}
