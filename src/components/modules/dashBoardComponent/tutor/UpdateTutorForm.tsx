"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cities } from "@/constants/cities";
import { updateProfile } from "@/services/tutor";
import { ITutor } from "@/types/tutor";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";


const UpdateTutorForm = ({ tutor }: { tutor: ITutor }) => {
  console.log(tutor)
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      name: tutor?.name || "",
      // email: tutor?.email || "",
      bio: tutor?.bio || "",
      pic: tutor?.pic || "",
      gender: tutor?.gender || "",
      district: tutor?.district || "",
      tutionType: tutor?.tutionType || "",
      hourlyRate: tutor?.hourlyRate || "",
      institute: tutor?.institute || "",
      location: tutor?.location || "",
      availability: tutor?.availability || "",
      subject: tutor?.subject || "",
      preferredClass: tutor?.preferredClass || "",
      preferredArea: tutor?.preferredArea || "",

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
      const res = await updateProfile(data, tutor?._id as string);

      if (res.success) {
        toast.success(res.message);
        router.push("/tutor/manageProfile");
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <div className="px-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center border-t border-b py-3 my-5">
            <p className="text-primary font-bold text-xl">Basic Information</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            {/* <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="institute"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institute</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hourlyRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hourly rate</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="availability"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Availability</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image Url</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>

                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Tution Type Select */}
            <FormField
              control={form.control}
              name="tutionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tuition Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select tuition type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home">Home</SelectItem>
                        <SelectItem value="online">Online</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="district"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>District</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select district" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((district) => (
                          <SelectItem key={district} value={district}>
                            {district}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


          </div>

          <div className="my-5">
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Biodata</FormLabel>
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
            <FormField
              control={form.control}
              name="preferredClass"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Class</FormLabel>
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
            <FormField
              control={form.control}
              name="preferredArea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Area</FormLabel>
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
            {isSubmitting ? "Updating Product....." : "Update Profile"}
          </Button>
        </form>
      </Form>
    </div >
  );
};

export default UpdateTutorForm;