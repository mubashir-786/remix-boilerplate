import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction, MetaFunction } from "@vercel/remix";
import { getUser } from "~/utils/user.server";

export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export const loader: LoaderFunction = async ({ request }) => {

    const user = await getUser()
    return { user }
}



export default function Index() {
    const { user } = useLoaderData<typeof loader>()
    console.log(user)

    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <table style={{ marginTop: '20px', borderCollapse: 'collapse', overflow: "scroll" }}>
                <thead>
                    <tr style={{ backgroundColor: "#EEEAF9" }}>
                        <th style={{ border: " 1px solid", fontSize: "14px" }}>Date</th>
                        <th style={{ border: " 1px solid", fontSize: "14px" }}>Provider Name</th>
                        <th style={{ border: " 1px solid", fontSize: "14px" }}>Customer Name</th>
                        <th style={{ border: " 1px solid", fontSize: "14px" }}>Contact Number</th>
                        <th style={{ border: " 1px solid", fontSize: "14px" }}>Associated Phone Number</th>
                        <th style={{ border: " 1px solid", fontSize: "14px" }}>Service Address</th>
                        <th style={{ border: " 1px solid", fontSize: "14px" }}>Bill Amount</th>
                        <th style={{ border: " 1px solid", fontSize: "14px" }}>Card Number</th>
                        <th style={{ border: " 1px solid", fontSize: "14px" }}>Expiration</th>
                        <th style={{ border: " 1px solid", fontSize: "14px" }}>CVV</th>
                        <th style={{ border: " 1px solid", fontSize: "14px" }}>Billing Address</th>
                        <th style={{ border: " 1px solid", fontSize: "14px" }}>Email</th>
                        <th style={{ border: " 1px solid", fontSize: "14px" }}>Sales Agent Name</th>
                        <th style={{ border: " 1px solid", fontSize: "14px" }}>Categories</th>
                    </tr>
                </thead>
                <tbody>
                    {user?.map((user: any, index: number) => (
                        <tr key={index} style={{ backgroundColor: "#F6F6FE", border: " 1px solid" }}>
                            <td style={{ border: " 1px solid", textAlign: "center", fontSize: "14px" }}>{user.date}</td>
                            <td style={{ border: " 1px solid", textAlign: "center", fontSize: "14px" }}>{user.providerName}</td>
                            <td style={{ border: " 1px solid", textAlign: "center", fontSize: "14px" }}>{user.customerName}</td>
                            <td style={{ border: " 1px solid", textAlign: "center", fontSize: "14px" }}>{user.contactNumber}</td>
                            <td style={{ border: " 1px solid", textAlign: "center", fontSize: "14px" }}>{user.associatedPhoneNumber}</td>
                            <td style={{ border: " 1px solid", textAlign: "center", fontSize: "14px" }}>{user.serviceAddress}</td>
                            <td style={{ border: " 1px solid", textAlign: "center", fontSize: "14px" }}>{user.billAmount}</td>
                            <td style={{ border: " 1px solid", textAlign: "center", fontSize: "14px" }}>{user.cardNumber}</td>
                            <td style={{ border: " 1px solid", textAlign: "center", fontSize: "14px" }}>{user.expiration}</td>
                            <td style={{ border: " 1px solid", textAlign: "center", fontSize: "14px" }}>{user.cvv}</td>
                            <td style={{ border: " 1px solid", textAlign: "center", fontSize: "14px" }}>{user.billingAddress}</td>
                            <td style={{ border: " 1px solid", textAlign: "center", fontSize: "14px" }}>{user.email}</td>
                            <td style={{ border: " 1px solid", textAlign: "center", fontSize: "14px" }}>{user.salesAgentName}</td>
                            <td style={{ border: " 1px solid", textAlign: "center", fontSize: "14px" }}>{user.categories}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
