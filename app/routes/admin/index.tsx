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
            <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Provider Name</th>
                        <th>Customer Name</th>
                        <th>Contact Number</th>
                        <th>Associated Phone Number</th>
                        <th>Service Address</th>
                        <th>Bill Amount</th>
                        <th>Card Number</th>
                        <th>Expiration</th>
                        <th>CVV</th>
                        <th>Billing Address</th>
                        <th>Email</th>
                        <th>Sales Agent Name</th>
                        <th>Categories</th>
                    </tr>
                </thead>
                <tbody>
                    {user?.map((user: any, index: number) => (
                        <tr key={index}>
                            <td>{user.date}</td>
                            <td>{user.providerName}</td>
                            <td>{user.customerName}</td>
                            <td>{user.contactNumber}</td>
                            <td>{user.associatedPhoneNumber}</td>
                            <td>{user.serviceAddress}</td>
                            <td>{user.billAmount}</td>
                            <td>{user.cardNumber}</td>
                            <td>{user.expiration}</td>
                            <td>{user.cvv}</td>
                            <td>{user.billingAddress}</td>
                            <td>{user.email}</td>
                            <td>{user.salesAgentName}</td>
                            <td>{user.categories}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
