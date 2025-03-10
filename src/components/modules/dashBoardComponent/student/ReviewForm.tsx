"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@/context/UserContext";
import { createReview, getSingleStudent } from "@/services/student";
import { IStudent } from "@/types/student";
import { ITutor } from "@/types/tutor";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";


const ReviewForm = ({ tutor }: { tutor: ITutor }) => {
  const { user } = useUser()
  const tEmail: any = (user?.email)
  console.log(tutor, user)
  const router = useRouter();
  // const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState<IStudent>()


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
      review: " ",
      rating: " ",
      student: student?._id,
      tutor: tutor?._id,
    }
  })
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
    const modifiedData: any = {
      ...data,
      student: student?._id,
      tutor: tutor?._id,

    };
    console.log(modifiedData)
    try {
      const res = await createReview(modifiedData);
      console.log(res)
      if (res.success) {
        toast.success("Request sent successfully");
        router.push(`/student/reviewTutor/${student?._id}`);
      } else {
        toast.error(res.message);
        // router.push("/tutors");
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
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating(1-5)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          </div>
          <div className="my-5">
            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>review</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-36 resize-none"
                      {...field}
                      value={field.value || ""}
                    />
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

export default ReviewForm;