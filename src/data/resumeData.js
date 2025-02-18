export const resumeData = {
    personalInfo: {
        name: "John Doe",
        role: "Senior Software Engineer",
        roleDescription: "Full-stack developer with expertise in React and Node.js",
        email: "john.doe@example.com",
        phone: "(555) 123-4567",
        address: "San Francisco, CA 94105",
        linkedin: "johndoe",
    },
    education: [
        {
            schoolName: "University of Colorado Boulder",
            specialization: "Bachelor of Science in Computer Science",
            monthOfPassing: "May",
            yearOfPassing: "2013",
            achievements: "Some Achievements"
        },
        {
            schoolName: "University of Colorado Boulder",
            specialization: "Masters of Science in Computer Science",
            monthOfPassing: "May",
            yearOfPassing: "2017",
            achievements: "Some Achievements"
        }
    ],
    work: [
        {
            companyName: "ABC Company",
            role: "Software Engineer",
            summary: "Some summary ABC",
            monthOfStarting: "Jan",
            yearOfStarting: "2013",
            monthOfLeaving: "Jan",
            yearOfLeaving: "2014",
            achievements: "Some Achievements",
            presentEmployer: false
        },
        {
            companyName: "DEF Company",
            role: "Software Engineer",
            summary: "Some summary DEF",
            monthOfStarting: "Feb",
            yearOfStarting: "2014",
            monthOfLeaving: "",
            yearOfLeaving: "",
            achievements: "Some Achievements",
            presentEmployer: true
        }
    ],
    skills: [
        { skillname: "HTML5", yearsOfExperience: 2 },
        { skillname: "CSS", yearsOfExperience: 2 },
        { skillname: "Reactjs", yearsOfExperience: 1 }
    ],
    references: [
        {
            name: "Larry Jones",
            description: "Friend",
            email: "abc@def.com",
            phone: "123-456-7890"
        },
        {
            name: "Tony Smith",
            description: "Supervisor",
            email: "zzz@def.com",
            phone: "123-555-8888"
        }
    ]
};

export default resumeData;