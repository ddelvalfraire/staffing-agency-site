"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "../ui/checkbox";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";
import { useEffect } from "react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xyzyapze");
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent!");
    }
  }, [state.succeeded]);
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 bg-zinc-900 text-white rounded-3xl w-full "
    >
      <div className="space-y-6 p-8">
        <h1 className="text-2xl mb-6">What would you like to say?</h1>
        <div>
          <Label required htmlFor="company">
            Company
          </Label>
          <Input required name="company" placeholder="Company Name" />
          <ValidationError
            prefix="Company"
            field="company"
            errors={state.errors}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label required htmlFor="firstName">
              First Name
            </Label>
            <Input required name="firstName" placeholder="John" />
            <ValidationError
              prefix="First Name"
              field="firstName"
              errors={state.errors}
            />
          </div>

          <div>
            <Label required htmlFor="surname">
              Surname
            </Label>
            <Input required name="surname" placeholder="Doe" />
            <ValidationError
              prefix="Surname"
              field="surname"
              errors={state.errors}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label required htmlFor="email">
              Email
            </Label>
            <Input
              required
              name="email"
              type="email"
              placeholder="john@example.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <Label required htmlFor="phone">
              Phone
            </Label>
            <Input
              required
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>
        </div>

        <div>
          <Label required htmlFor="subject">
            Subject
          </Label>
          <Select required name="subject" defaultValue="">
            <SelectTrigger>
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="support">Technical Support</SelectItem>
              <SelectItem value="hr">Human Resources</SelectItem>
              <SelectItem value="sales">Sales Inquiry</SelectItem>
              <SelectItem value="billing">Billing</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>

        <div>
          <Label required htmlFor="title">
            Title
          </Label>
          <Input required name="title" placeholder="Message Title" />
          <ValidationError prefix="Title" field="title" errors={state.errors} />
        </div>

        <div>
          <Label required htmlFor="message">
            Message
          </Label>
          <Textarea
            required
            name="message"
            placeholder="Type your message here..."
            className="min-h-[150px] resize-none"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox required id="terms" className="border border-white" />
          <Label required htmlFor="terms">
            Accept terms and conditions
          </Label>
          <ValidationError prefix="Terms" field="terms" errors={state.errors} />
        </div>

        <Button type="submit" variant="secondary" disabled={state.submitting}>
          Submit
          {state.submitting && (
            <LoaderCircle className="w-6 h-6 ml-2 animate-spin" />
          )}
        </Button>
      </div>
    </form>
  );
}
