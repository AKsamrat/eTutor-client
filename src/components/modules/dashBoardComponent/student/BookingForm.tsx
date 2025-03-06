"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { useUser } from "@/context/UserContext";
import { createBooking, getSingleStudent } from "@/services/student";

import { IStudent } from "@/types/student";
import { ITutor } from "@/types/tutor";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";



const BookingForm = ({ tutor }: { tutor: ITutor }) => {
  const { user } = useUser()
  const tEmail: any = (user?.email)
  console.log(tutor)
  const router = useRouter();
  // const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState<IStudent>()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  useEffect(() => {
    const fetchData = async (tEmail) => {
      const [tutorData] = await Promise.all([
        getSingleStudent(tEmail),

      ]);
      // console.log(user?.email)
      setStudent(tutorData.data);
    };
    fetchData(tEmail);
  }, []);
  console.log(student)
  const form = useForm({
    defaultValues: {

      date: "",
      duration: "",
      price: tutor?.hourlyRate || "",
      studentId: student?._id || "",
      tutorId: tutor?._id || "",
      status: "pending",

    }
  })
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
    const modifiedData = {
      ...data,

    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(modifiedData));
    console.log(formData)
    try {
      const res = await createBooking(data);

      if (res.success) {
        toast.success(res.message);
        router.push("/student/manageProfile");
      } else {
        toast.error(res.message);
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
              render={({ field }) => {
                setSelectedDate(field.value ? new Date(field.value) : undefined)

                return (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <div className="relative w-full">
                            <Input
                              {...field}
                              value={selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""}
                              readOnly
                              className="cursor-pointer"
                            />
                            <CalendarIcon className="absolute right-3 top-3 text-gray-500" />
                          </div>
                        </PopoverTrigger>
                        <PopoverContent align="start">
                          <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={(date) => {
                              setSelectedDate(date);
                              field.onChange(date);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />;



            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>



          <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
            {isSubmitting ? "Updating Product....." : "Update Product"}
          </Button>
        </form>
      </Form>
    </div >
  );
};

export default BookingForm;