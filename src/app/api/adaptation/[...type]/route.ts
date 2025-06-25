import {NextResponse} from "next/server";
import {data} from "@/app/api/adaptation/[...type]/data";




// eslint-disable-next-line
export async function GET(request: Request, context: any) {
    const {type} = await context.params;
    try {
        const response = {
            employee: {
                firstName: "Иван",
                secondName: "Иванов",
                lastName: "Иванович",
                position: "Инженер",
                department: "Отдел разработки",
                officeAddress: "г. Москва, ул. Пушкина, д. 17",
                phone: "+7 (999) 999-99-99",
                about: "Занимаюсь программированием, начинаю изучать Next.js",
                photo: "https://via.placeholder.com/150",
                organization: "ООО Компания",
            },
            documents: [],
            mentors: [
                {
                    email: "",
                    role: "",
                    fullName: "",
                    position: "",
                    officeAddress: "",
                    phone: "",
                    telegram: "",
                    mattermost: "",
                    description: ""
                }
            ],
            helpContacts: [
                {
                    email: "",
                    role: "",
                    fullName: "",
                    position: "",
                    officeAddress: "",
                    phone: "",
                    telegram: "",
                    mattermost: "",
                    description: "",
                    questions: [""]
                }
            ]
        };
        return NextResponse.json(
            {data: data[Math.random() * data.length | 0]},
            {status: 200}
        );
    } catch (error) {
        console.error(error);
    }
}
