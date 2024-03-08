import { prisma } from "./prisma.server";

export const createUser = async (formData: any) => {
    try {
        await prisma.userData.create({
            data: formData
        });
        alert('created sucessfully')
    } catch (e: any) {
        console.log(e.message)
        console.log("error aya h ")

    }
}

export const getUser = async () => {
    try {
        const data = await prisma.userData.findMany();
        return data
    } catch (e: any) {
        console.log(e.message)
    }


}