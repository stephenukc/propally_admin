import { Button } from "@/components/button";
import { Field, FieldGroup, Fieldset, Label } from "@/components/fieldset";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Switch } from "@/components/switch";
import { Text, TextLink } from "@/components/text";
import * as Headless from "@headlessui/react";

export default function SignUp() {
  return (
    <main>
      <Heading>Sign up</Heading>
      <form action="" className="py-8">
        <Fieldset aria-label="Sign in information">
          <FieldGroup>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
              <Field>
                <Label>First name</Label>
                <Input name="first_name" />
              </Field>
              <Field>
                <Label>Last name</Label>
                <Input name="last_name" />
              </Field>
            </div>
            <Field>
              <Label>Email address</Label>
              <Input name="email_address" type="email" />
            </Field>
            <Field className="sm:col-span-2">
              <Label>Country</Label>
              <Select name="country">
                <option>Nigeria</option>
                <option>United Kingdom</option>
              </Select>
            </Field>
            <Field>
              <Label>Password</Label>
              <Input name="password" type="password" />
            </Field>
            <Headless.Field className="inline-flex items-center gap-4">
              <Switch name="remember_me" defaultChecked />
              <Label className="text-sm">Remember me</Label>
            </Headless.Field>
            <Button type="submit" className="w-full" href={"dashboard/home"}>
              Sign up
            </Button>
          </FieldGroup>
        </Fieldset>
      </form>
      <Text>
        Already have an account? <TextLink href={"signin"}>Sign in</TextLink>
      </Text>
    </main>
  );
}
