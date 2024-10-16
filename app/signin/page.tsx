import { Button } from "@/components/button";
import { Field, FieldGroup, Fieldset, Label } from "@/components/fieldset";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import { Switch } from "@/components/switch";
import { Text, TextLink } from "@/components/text";
import * as Headless from "@headlessui/react";

export default function SignIn() {
  return (
    <main>
      <Heading>Sign in</Heading>
      <form action="" className="py-8">
        <Fieldset aria-label="Sign in information">
          <FieldGroup>
            <Field>
              <Label>Email address</Label>
              <Input name="email_address" type="email" />
            </Field>
            <Field>
              <Label>Password</Label>
              <Input name="password" type="password" />
            </Field>
            <Headless.Field className="inline-flex items-center gap-4">
              <Switch name="remember_me" defaultChecked />
              <Label>Remember me</Label>
            </Headless.Field>
            <Button type="submit" className="w-full" href={"dashboard"}>
              Sign in
            </Button>
          </FieldGroup>
        </Fieldset>
      </form>
      <Text>
        Don&apos;t have an account? <TextLink href={"signup"}>Sign up</TextLink>
      </Text>
      <div className="h-4"></div>
      <TextLink href="/forgot-password" className="text-sm">
        Forgot password?
      </TextLink>
    </main>
  );
}
