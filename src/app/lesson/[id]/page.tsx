'use client'

import Header from "@/components/layout/Header";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import { Student } from '@/models/user';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

const groupStudents: Student[] = [
  {
    id: 1,
    email: "email@gmail.com",
    name: "Иванов Иван",
    phoneNumber: "+7 (213)123-12-23",
    parentPhoneNumber: "+7 (213)123-12-23",
    class: "13Ж",
  },
  {
    id: 2,
    email: "email@gmail.com",
    name: "Иванов Иван",
    phoneNumber: "+7 (213)123-12-23",
    parentPhoneNumber: "+7 (213)123-12-23",
    class: "13Ж",
  },
  {
    id: 3,
    email: "email@gmail.com",
    name: "Иванов Иван",
    phoneNumber: "+7 (213)123-12-23",
    parentPhoneNumber: "+7 (213)123-12-23",
    class: "13Ж",
  },
  {
    id: 4,
    email: "email@gmail.com",
    name: "Иванов Иван",
    phoneNumber: "+7 (213)123-12-23",
    parentPhoneNumber: "+7 (213)123-12-23",
    class: "13Ж",
  },
  {
    id: 5,
    email: "email@gmail.com",
    name: "Иванов Иван",
    phoneNumber: "+7 (213)123-12-23",
    parentPhoneNumber: "+7 (213)123-12-23",
    class: "13Ж",
  },
]

type studentLessonInfo = {
  id: number;
  name: string;
  score: number;
  comment: string;
  presence: boolean;
}

type lessonInfo = {
    groupName: string;
    students: studentLessonInfo[]; 
}

type lessonDTO = studentLessonInfo[]

export default function LessonPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  return (
    <ProtectedRoute>
      <main className="w-full h-full flex flex-col justify-center items-center">
        <Header />
        <section className="w-full flex flex-col justify-center gap-[22px] max-w-screen-xl pt-6">
          <div className="flex flex-row justify-between">
            <h2 className="text-2xl text-start">7А</h2>
            <button
              className="flex justify-center items-center cursor-pointer w-[140px] rounded-[4px] text-sm font-medium bg-slate-300"
              onClick={() => router.push("/lessons")}
            >
              Сохранить
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {groupStudents.map((student, index) => <StudentCard student={student} key={"groupStudent-" + index} />)}
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}

const StudentCard = ({ student }: { student: Student }) => {
  const [selectValue, setSelectValue] = useState('')
  return (
    <div className="w-full h-[75px] bg-slate-300 flex flex-row justify-between items-center px-8 rounded-md cursor-pointer">
      <p className="text-xl">
        {student.name}
      </p>
      <div className="flex flex-row gap-5 items-center">
        <Select value={selectValue} onValueChange={value => setSelectValue(value)}>
          <SelectTrigger className="w-[100px] bg-white text-text">
            <SelectValue placeholder="-" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={"2"}>2</SelectItem>
            <SelectItem value={"3"}>3</SelectItem>
            <SelectItem value={"4"}>4</SelectItem>
            <SelectItem value={"5"}>5</SelectItem>
          </SelectContent>
        </Select>
        <input
          placeholder="Комментарий"
        />
        <Checkbox className="size-8" />
      </div>
    </div>
  )
}