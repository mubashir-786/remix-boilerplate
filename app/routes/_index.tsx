
import { Form } from "@remix-run/react";
import type { ActionFunction, LinksFunction, MetaFunction } from "@vercel/remix";
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
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8", backgroundColor: "#EEEAF9", paddingTop: "20px", paddingBottom: "20px", boxShadow: "30px" }}>
      <Form method="post" style={{ maxWidth: '700px', margin: '0 auto', backgroundColor: "#F5F6FE", paddingTop: "20px", borderRadius: "10px", paddingBottom: "20px", boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .5)" }}>
        <div style={{ marginBottom: '15px', textAlign: "center" }}>
          <div>
            <label className="font-extrabold " style={{ marginRight: '10px' }}>Date:</label>
          </div>

          <input type="text" name="date" style={{ width: "90%", height: "30px", marginTop: "10px", borderRadius: "10px", outline: "none", border: "none", boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .5)", paddingLeft: "20px" }} onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '15px', textAlign: "center" }}>
          <div>
            <label style={{ marginRight: '10px' }}>Provider Name:</label>
          </div>
          <input type="text" name="providerName" style={{ width: "90%", height: "30px", marginTop: "10px", borderRadius: "10px", outline: "none", border: "none", boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .5)", paddingLeft: "20px" }} onChange={handleChange} />
        </div>

        <div style={{ marginBottom: '15px', textAlign: "center" }}>
          <label style={{ marginRight: '10px' }}>Customer Name:</label>
          <div>
            <input type="text" name="customerName" style={{ width: "90%", height: "30px", marginTop: "10px", borderRadius: "10px", outline: "none", border: "none", boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .5)", paddingLeft: "20px" }} onChange={handleChange} />
          </div>

        </div>

        <div style={{ marginBottom: '15px', textAlign: "center" }}>
          <label style={{ marginRight: '10px' }}>Contact Number:</label>
          <div>
            <input type="text" name="contactNumber" style={{ width: "90%", height: "30px", marginTop: "10px", borderRadius: "10px", outline: "none", border: "none", boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .5)", paddingLeft: "20px" }} onChange={handleChange} />
          </div>

        </div>

        <div style={{ marginBottom: '15px', textAlign: "center" }}>
          <label style={{ marginRight: '10px' }}>Associated Phone Number:</label>
          <div>
            <input type="text" name="associatedPhoneNumber" style={{ width: "90%", height: "30px", marginTop: "10px", borderRadius: "10px", outline: "none", border: "none", boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .5)", paddingLeft: "20px" }} onChange={handleChange} />
          </div>

        </div>

        <div style={{ marginBottom: '15px', textAlign: "center" }}>
          <label style={{ marginRight: '10px' }}>Service Address:</label>
          <div>
            <input type="text" name="serviceAddress" style={{ width: "90%", height: "30px", marginTop: "10px", borderRadius: "10px", outline: "none", border: "none", boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .5)", paddingLeft: "20px" }} onChange={handleChange} />
          </div>

        </div>

        <div style={{ marginBottom: '15px', textAlign: "center" }}>
          <label style={{ marginRight: '10px' }}>Bill Amount:</label>
          <div>
            <input type="text" name="billAmount" style={{ width: "90%", height: "30px", marginTop: "10px", borderRadius: "10px", outline: "none", border: "none", boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .5)", paddingLeft: "20px" }} onChange={handleChange} />
          </div>

        </div>

        <div style={{ marginBottom: '15px', textAlign: "center" }}>
          <label style={{ marginRight: '10px' }}>Card Number:</label>
          <div>
            <input type="text" name="cardNumber" style={{ width: "90%", height: "30px", marginTop: "10px", borderRadius: "10px", outline: "none", border: "none", boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .5)", paddingLeft: "20px" }} onChange={handleChange} />
          </div>

        </div>

        <div style={{ marginBottom: '15px', textAlign: "center" }}>
          <label style={{ marginRight: '10px' }}>Expiration:</label>
          <div>
            <input type="text" name="expiration" style={{ width: "90%", height: "30px", marginTop: "10px", borderRadius: "10px", outline: "none", border: "none", boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .5)", paddingLeft: "20px" }} onChange={handleChange} />
          </div>

        </div>

        <div style={{ marginBottom: '15px', textAlign: "center" }}>
          <label style={{ marginRight: '10px' }}>CVV:</label>
          <div>
            <input type="text" name="cvv" style={{ width: "90%", height: "30px", marginTop: "10px", borderRadius: "10px", outline: "none", border: "none", boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .5)", paddingLeft: "20px" }} onChange={handleChange} />
          </div>

        </div>

        <div style={{ marginBottom: '15px', textAlign: "center" }}>
          <label style={{ marginRight: '10px' }}>Billing Address:</label>
          <div>
            <input type="text" name="billingAddress" style={{ width: "90%", height: "30px", marginTop: "10px", borderRadius: "10px", outline: "none", border: "none", boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .5)", paddingLeft: "20px" }} onChange={handleChange} />
          </div>

        </div>

        <div style={{ marginBottom: '15px', textAlign: "center" }}>
          <label style={{ marginRight: '10px' }}>Email:</label>
          <div>
            <input type="text" name="email" style={{ width: "90%", height: "30px", marginTop: "10px", borderRadius: "10px", outline: "none", border: "none", boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .5)", paddingLeft: "20px" }} onChange={handleChange} />
          </div>

        </div>

        <div style={{ marginBottom: '15px', textAlign: "center" }}>
          <label style={{ marginRight: '10px' }}>Sales Agent Name:</label>
          <div>
            <input type="text" name="salesAgentName" style={{ width: "90%", height: "30px", marginTop: "10px", borderRadius: "10px", outline: "none", border: "none", boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .5)", paddingLeft: "20px" }} onChange={handleChange} />
          </div>

        </div>

        <div style={{ marginBottom: '15px', textAlign: "center" }}>
          <label style={{ marginRight: '10px' }}>Categories:</label>
          <div style={{ border: "2px", borderColor: "black" }}>
            <input type="text" name="categories" style={{ width: "90%", height: "30px", marginTop: "10px", borderRadius: "10px", outline: "none", border: "none", boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .5)", paddingLeft: "20px" }} onChange={handleChange} />
          </div>

        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button name="action" value="create" type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', width: "94%", boxShadow: "-1px 0 5px 0 rgba(0, 0, 0, .5)", marginTop: "20px" }}>Submit</button>
        </div>
      </Form>
    </div>
  );
}
