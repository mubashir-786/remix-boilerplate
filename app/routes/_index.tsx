
import { Form } from "@remix-run/react";
import type { ActionFunction, MetaFunction } from "@vercel/remix";
import { createUser } from "~/utils/user.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const currentDate = new Date(Date.now());
  const date = currentDate.toISOString();
  const providerName = form.get("providerName");
  const customerName = form.get("customerName");
  const contactNumber = form.get("contactNumber");
  const associatedPhoneNumber = form.get("associatedPhoneNumber");
  const serviceAddress = form.get("serviceAddress");
  const billAmount = form.get("billAmount");
  const cardNumber = form.get("cardNumber");
  const expiration = form.get("expiration");
  const cvv = form.get("cvv");
  const billingAddress = form.get("billingAddress");
  const email = form.get("email");
  const salesAgentName = form.get("salesAgentName");
  const categories = form.get("categories");

  await createUser({ date, providerName, customerName, contactNumber, associatedPhoneNumber, serviceAddress, billAmount, cardNumber, expiration, cvv, billingAddress, email, salesAgentName, categories })
  return null
}


export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Form method="post" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Provider Name:</label>
          <input type="text" name="providerName" />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Customer Name:</label>
          <input type="text" name="customerName" />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Contact Number:</label>
          <input type="text" name="contactNumber" />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Associated Phone Number:</label>
          <input type="text" name="associatedPhoneNumber" />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Service Address:</label>
          <input type="text" name="serviceAddress" />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Bill Amount:</label>
          <input type="text" name="billAmount" />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Card Number:</label>
          <input type="text" name="cardNumber" />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Expiration:</label>
          <input type="text" name="expiration" />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>CVV:</label>
          <input type="text" name="cvv" />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Billing Address:</label>
          <input type="text" name="billingAddress" />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Email:</label>
          <input type="text" name="email" />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Sales Agent Name:</label>
          <input type="text" name="salesAgentName" />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Categories:</label>
          <input type="text" name="categories" />
        </div>

        <div>
          <button name="_action" value="create" type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
        </div>
      </Form>
    </div>
  );
}
