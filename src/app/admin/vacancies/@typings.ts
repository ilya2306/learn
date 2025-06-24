export type Vacancy = {
    id: number;
    title: string;
    description: string;
    salary: {
        from: number;
        to: number;
        currency: string;
        gross: boolean;
    }
    priority: number;
    location: string;
    experience: string;
    schedule: string
    employment: string
    published: string
    url: string
}
