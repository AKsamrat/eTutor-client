"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUser } from "@/context/UserContext";
import { createBooking, getSingleStudent } from "@/services/student";
import { IStudent } from "@/types/student";
import { ITutor } from "@/types/tutor";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "sonner";


const BookingForm = ({ tutor }: { tutor: ITutor }) => {
  const { user } = useUser()
  const tEmail: any = (user?.email)
  console.log(tutor, user)
  const router = useRouter();
  // const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState<IStudent>()
  const [date, setDate] = useState<Date>()

  useEffect(() => {
    const fetchData = async (tEmail) => {
      const [tutorData] = await Promise.all([
        getSingleStudent(tEmail),

      ]);
      // console.log(user?.email)
      setStudent(tutorData.data);
    };
    fetchData(tEmail);
  }, [tutor]);
  console.log(student?._id)
  const form = useForm({
    defaultValues: {
      date: " ",
      duration: " ",
      price: tutor?.hourlyRate,
      studentId: student?._id,
      tutorId: tutor?._id,
      status: "pending",

    }
  })
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
    const modifiedData: any = {
      ...data,
      date: date,
      price: tutor?.hourlyRate,
      studentId: student?._id,
      tutorId: tutor?._id,
      status: "pending",
    };
    console.log(modifiedData)
    try {
      const res = await createBooking(modifiedData);
      console.log(res)
      if (res.success) {
        toast.success("Request sent successfully");
        router.push("/tutors");
      } else {
        toast.success("Request sent successfully");
        router.push("/tutors");
      }
    } catch (err: any) {
      console.error(err);
    }
  }
  return (
    <div className="px-6 max-w-3xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center  border-b py-3 my-5 ">
            <p className="text-primary font-bold text-xl ">Booking Information</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-3">
                  <FormLabel>Start Month</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How Many Month</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>



          <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submit Request....." : "Submit Request"}
          </Button>
        </form>
      </Form>
    </div >
  );
};

export default BookingForm;