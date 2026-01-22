import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  serviceType: z.string({ required_error: "Please select a service type." }),
  vehicleInfo: z.string().min(5, { message: "Please provide Year, Make, and Model." }),
  message: z.string().optional(),
});

export default function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      vehicleInfo: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Request Received",
      description: "We'll review your information and get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Abstract bg element */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background/90 pointer-events-none z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-20 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
              Get Your Free <br />
              <span className="text-primary">Case Evaluation</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Stop leaving money on the table. Fill out the form below to speak with a valuation expert. We'll review your case details and let you know exactly what your claim is worth.
            </p>
            
            <div className="space-y-6 pt-8 border-t border-white/10">
              <div>
                <h4 className="font-heading font-bold text-white mb-2">Office Hours</h4>
                <p className="text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM CST</p>
              </div>
              <div>
                <h4 className="font-heading font-bold text-white mb-2">Email Us</h4>
                <p className="text-primary">claims@autovaluate.demo</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-white/10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Requested</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background/50 border-white/10 focus:ring-primary">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="dv">Diminished Value Report</SelectItem>
                            <SelectItem value="lou">Loss of Use Report</SelectItem>
                            <SelectItem value="valuation">Total Loss Valuation</SelectItem>
                            <SelectItem value="consulting">General Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="vehicleInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vehicle (Year/Make/Model)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 2022 BMW X5" {...field} className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Briefly describe the accident or your specific needs..." 
                          className="bg-background/50 border-white/10 min-h-[100px] focus-visible:ring-primary"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full font-bold text-base bg-primary hover:bg-primary/90 text-white">
                  Request Free Consultation
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
