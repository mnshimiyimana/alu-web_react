// the teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [propName: string]: any;
}

const teacher1: Teacher = {
    firstName: "Alice",
    lastName: "Johnson",
    fullTimeEmployee: true,
    location: "Boston",
    contract: true,
    subject: "Mathematics",
    yearsOfExperience: 3,
};

teacher1.contract = false;