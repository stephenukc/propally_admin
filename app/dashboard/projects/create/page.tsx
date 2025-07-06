import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import {
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "@/components/fieldset";
import { Heading } from "@/components/heading";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { Text } from "@/components/text";
import { Input as FileInput } from "@/components/ui/input";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Create Project",
};
// TODO only send filled data
export default function CreateProjectPage() {
  async function createProject(formData: FormData) {
    "use server";
    const rawFormData = {
      latitude: formData.get("latitude"),
      longitude: formData.get("longitude"),
      city: formData.get("city"),
      country: formData.get("country"),
      province: formData.get("province"),
      state: formData.get("state"),
      county: formData.get("county"),
      name: formData.get("name"),
      address: formData.get("address"),
      images: formData.get("image"),
      videos: formData.get("videos"),
      documents: formData.get("documents"),
      funding_target: formData.get("funding_target"),
      project_duration: formData.get("project_duration"),
      currency: formData.get("currency"),
      project_type: formData.get("project_type"),
      investment_type: formData.get("investment_type"),
      target_roi: formData.get("target_roi"),
      minimum_investment: formData.get("minimum_investment"),
      unit_price: formData.get("unit_price"),
      number_of_slots: formData.get("number_of_slots"),
      available_slots: formData.get("available_slots"),
      funding_opening_date: formData.get("funding_opening_date"),
      funding_closing_date: formData.get("funding_closing_date"),
      target_mortgage: formData.get("target_mortgage"),
      total_equity_offering: formData.get("total_equity_offering"),
      mortgage_annual_interest_rate: formData.get(
        "mortgage_annual_interest_rate"
      ),
      target_annual_roi: formData.get("target_annual_roi"),
      target_irr: formData.get("target_irr"),
      target_completion_date: formData.get("target_completion_date"),
      target_annual_rental_yield: formData.get("target_annual_rental_yield"),
    };
    await fetch(`http://localhost:8000/dashboard/project/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        property_images: [],
        property_videos: [],
        property_documents: [],
        name: rawFormData.name,
        address: rawFormData.address,
        city: rawFormData.city,
        state: rawFormData.state,
        province: rawFormData.province,
        county: rawFormData.county,
        country: rawFormData.country,
        longitude: rawFormData.latitude,
        latitude: rawFormData.longitude,
        currency: rawFormData.currency,
        funding_target: rawFormData.funding_target,
        term: rawFormData.project_duration,
        project_type: rawFormData.project_type,
        investment_type: rawFormData.investment_type,
        target_roi: rawFormData.target_roi,
        minimum_investment: rawFormData.minimum_investment,
        unit_price: rawFormData.unit_price,
        number_of_slots: rawFormData.number_of_slots,
        available_slots: rawFormData.available_slots,
        target_mortgage: rawFormData.target_mortgage,
        total_equity_offering: rawFormData.total_equity_offering,
        mortgage_annual_interest_rate:
          rawFormData.mortgage_annual_interest_rate,
        funding_opening_date: rawFormData.funding_opening_date,
        funding_closing_date: rawFormData.funding_closing_date,
        target_annual_roi: rawFormData.target_annual_roi,
        target_irr: rawFormData.target_irr,
        target_completion_date: rawFormData.target_completion_date,
        target_annual_rental_yield: rawFormData.target_annual_rental_yield,
      }),
    });
    redirect("/dashboard/projects");
  }
  return (
    <>
      <Heading>Create Project</Heading>
      <Divider className="my-10 mt-6" />
      <form action={createProject} method="POST">
        <Fieldset>
          <Legend>Property Information</Legend>
          <Text>Property information for the project.</Text>
          <FieldGroup>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-4">
              <Field>
                <Label>Latitude</Label>
                <Input
                  name="latitude"
                  required
                  type="number"
                  placeholder="0"
                  step="any"
                />
              </Field>
              <Field>
                <Label>Longitude</Label>
                <Input
                  name="longitude"
                  required
                  type="number"
                  placeholder="0"
                  step="any"
                />
              </Field>
              <Field>
                <Label>City</Label>
                <Select name="city" defaultValue="" required>
                  <option value="" disabled>
                    Select a city&hellip;
                  </option>
                  <option value="DXB_AE">Dubai</option>
                  <option value="TOR_CA">Toronto</option>
                  <option value="LON_GB">London</option>
                  <option value="MNC_GB">Manchester</option>
                  <option value="FC_NG">Abuja</option>
                  <option value="LA_NG">Lagos</option>
                  <option value="LAX_US">Los Angeles</option>
                  <option value="NY_US">New York</option>
                  <option value="CPT_ZA">Cape Town</option>
                  <option value="DUR_ZA">Durban</option>
                  <option value="JNB_ZA">Johannesburg</option>
                </Select>
              </Field>
              <Field>
                <Label>Country</Label>
                <Select name="country" defaultValue="" required>
                  <option value="" disabled>
                    Select a country&hellip;
                  </option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="CA">Canada</option>
                  <option value="GB">United Kingdom</option>
                  <option value="NG">Nigeria</option>
                  <option value="US">United States of America</option>
                  <option value="ZA">South Africa</option>
                </Select>
              </Field>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
              <Field>
                <Label>Province</Label>
                <Input name="province" placeholder="0" />
              </Field>
              <Field>
                <Label>State</Label>
                <Input name="state" placeholder="0" />
              </Field>
              <Field>
                <Label>County</Label>
                <Input name="county" placeholder="0" />
              </Field>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
              <Field>
                <Label>Name</Label>
                <Input name="name" required placeholder="0" />
              </Field>
              <Field>
                <Label>Address</Label>
                <Input name="address" required placeholder="0" />
              </Field>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
              <Field>
                <Label>Images</Label>
                <FileInput type="file" name="images" />
              </Field>
              <Field>
                <Label>Videos</Label>
                <FileInput type="file" name="videos" />
              </Field>
              <Field>
                <Label>Documents</Label>
                <FileInput type="file" name="documents" />
              </Field>
            </div>
          </FieldGroup>
        </Fieldset>
        <Divider className="my-10" soft />
        <Fieldset>
          <Legend>Project Information</Legend>
          <Text>More details about the project.</Text>
          <FieldGroup>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-4">
              <Field>
                <Label>Funding Target</Label>
                <Input
                  name="funding_target"
                  required
                  type="number"
                  placeholder="0"
                />
              </Field>
              <Field>
                <Label>Project Duration</Label>
                <Input
                  name="project_duration"
                  required
                  type="number"
                  placeholder="0"
                />
              </Field>
              <Field>
                <Label>Currency</Label>
                <Select name="currency" defaultValue="" required>
                  <option value="" disabled>
                    Select a currency&hellip;
                  </option>
                  <option value="AED">United Arab Emirates Dirham</option>
                  <option value="CAD">Canada Dollar</option>
                  <option value="GBP">United Kingdom Pound</option>
                  <option value="NGN">Nigeria Naira</option>
                  <option value="USD">United States Dollar</option>
                  <option value="ZAR">South Africa Rand</option>
                </Select>
              </Field>
              <Field>
                <Label>Project Type</Label>
                <Select name="project_type" defaultValue="" required>
                  <option value="" disabled>
                    Select a project type&hellip;
                  </option>
                  <option value="FIX_AND_FLIP">Fix and Flip</option>
                  <option value="DEVELOPMENT">Development</option>
                  <option value="BUY_TO_LET">Buy to Let</option>
                  <option value="SHORT_LET">Short Let</option>
                  <option value="LAND_BANKING">Land Banking</option>
                </Select>
              </Field>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-4">
              <Field>
                <Label>Investment Type</Label>
                <Select name="investment_type" defaultValue="" required>
                  <option value="" disabled>
                    Select an investment type&hellip;
                  </option>
                  <option value="DIRECT">Direct</option>
                  <option value="FLEXIBLE">Flexible</option>
                </Select>
              </Field>
              <Field>
                <Label>Target ROI</Label>
                <Input
                  name="target_roi"
                  type="number"
                  required
                  placeholder="0"
                />
              </Field>
              <Field>
                <Label>Minimum Investment</Label>
                <Input
                  name="minimum_investment"
                  type="number"
                  placeholder="0"
                />
              </Field>
              <Field>
                <Label>Unit Price</Label>
                <Input name="unit_price" type="number" placeholder="0" />
              </Field>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-4">
              <Field>
                <Label>Number of Slots</Label>
                <Input name="number_of_slots" type="number" placeholder="0" />
              </Field>
              <Field>
                <Label>Available Slots</Label>
                <Input name="available_slots" type="number" placeholder="0" />
              </Field>
              <Field>
                <Label>Funding Opening Date</Label>
                <Input name="funding_opening_date" type="date" />
              </Field>
              <Field>
                <Label>Funding Closing Date</Label>
                <Input name="funding_closing_date" type="date" />
              </Field>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-4">
              <Field>
                <Label>Target Mortgage</Label>
                <Input name="target_mortgage" type="number" placeholder="0" />
              </Field>
              <Field>
                <Label>Total Equity Offering</Label>
                <Input
                  name="total_equity_offering"
                  type="number"
                  placeholder="0"
                />
              </Field>
              <Field>
                <Label>Mortgage Annual Interest Rate</Label>
                <Input
                  name="mortgage_annual_interest_rate"
                  type="number"
                  placeholder="0"
                />
              </Field>
              <Field>
                <Label>Target Annual ROI</Label>
                <Input name="target_annual_roi" type="number" placeholder="0" />
              </Field>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 sm:gap-4">
              <Field>
                <Label>Target IRR</Label>
                <Input name="target_irr" type="number" placeholder="0" />
              </Field>
              <Field>
                <Label>Target Completion Date</Label>
                <Input
                  name="target_completion_date"
                  type="number"
                  placeholder="0"
                />
              </Field>
              <Field>
                <Label>Target Annual Rental Yield</Label>
                <Input
                  name="target_annual_rental_yield"
                  type="number"
                  placeholder="0"
                />
              </Field>
            </div>
          </FieldGroup>
        </Fieldset>
        <Divider className="my-10" soft />

        <div className="flex justify-end gap-4">
          <Button type="reset" plain>
            Reset
          </Button>
          <Button type="submit">Create Project</Button>
        </div>
      </form>
    </>
  );
}
