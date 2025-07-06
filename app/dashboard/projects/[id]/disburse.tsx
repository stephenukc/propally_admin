"use client";

import { Button } from "@/components/button";
import { Checkbox, CheckboxField } from "@/components/checkbox";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "@/components/dialog";
import { Description, Field, FieldGroup, Label } from "@/components/fieldset";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { useState } from "react";

export function Disburse({
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)} {...props} />
      <Dialog open={isOpen} onClose={setIsOpen}>
        <DialogTitle>Disburse project funds</DialogTitle>
        <DialogDescription>
          The money wil be distrbuted form the project wallet to the users&apos;
          wallets.
        </DialogDescription>
        <DialogBody>
          <FieldGroup>
            <Field>
              <Label>Amount</Label>
              <Input name="amount" placeholder="0.00" autoFocus />
            </Field>
            <Field>
              <Label>Reason</Label>
              <Select name="reason" defaultValue="">
                <option value="" disabled>
                  Select a reason&hellip;
                </option>
                <option value="rental_income">Rental income</option>
                <option value="requested_by_customer">
                  Requested by customer
                </option>
                <option value="other">Other</option>
              </Select>
            </Field>
            <CheckboxField>
              <Checkbox name="notify" />
              <Label>Notify investors</Label>
              <Description>
                An email notification will be sent to this customer.
              </Description>
            </CheckboxField>
          </FieldGroup>
        </DialogBody>
        <DialogActions>
          <Button plain onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)}>Disburse</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
