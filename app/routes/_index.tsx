
import { Form } from "@remix-run/react";
import type { ActionFunction, MetaFunction } from "@vercel/remix";
import { useState } from "react";
import { createUser } from "~/utils/user.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData()
  // const action = form.get("action")
  // switch (action) {
  // case "create": {
  const formValues: any = {};
  for (const [key, value] of form.entries()) {
    formValues[key] = value;
  }
  console.log(formValues)
  createUser(formValues)
  // }
  //   default:
  //     return null
  // }
}

export default function Index() {
  const [formData, setFormData] = useState({
    date: '',
    providerName: '',
    customerName: '',
    contactNumber: '',
    associatedPhoneNumber: '',
    serviceAddress: '',
    billAmount: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
    billingAddress: '',
    email: '',
    salesAgentName: '',
    categories: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Form method="post" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Date:</label>
          <input type="text" name="date" onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Provider Name:</label>
          <input type="text" name="providerName" onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Customer Name:</label>
          <input type="text" name="customerName" onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Contact Number:</label>
          <input type="text" name="contactNumber" onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Associated Phone Number:</label>
          <input type="text" name="associatedPhoneNumber" onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Service Address:</label>
          <input type="text" name="serviceAddress" onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Bill Amount:</label>
          <input type="text" name="billAmount" onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Card Number:</label>
          <input type="text" name="cardNumber" onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Expiration:</label>
          <input type="text" name="expiration" onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>CVV:</label>
          <input type="text" name="cvv" onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Billing Address:</label>
          <input type="text" name="billingAddress" onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Email:</label>
          <input type="text" name="email" onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Sales Agent Name:</label>
          <input type="text" name="salesAgentName" onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Categories:</label>
          <input type="text" name="categories" onChange={handleChange} />
        </div>

        <div>
          <button name="action" value="create" type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
        </div>
      </Form>
    </div>
  );
}
