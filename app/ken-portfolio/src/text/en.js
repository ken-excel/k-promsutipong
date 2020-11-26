const introduction = {
    title: "Hi, This is Kengkij Promsutipong. Ken for short.",
    paragraph: "A highly motivated student who found the passion in programming after years in robotic field which requires expertise in both software and hardware. I always strive to learn state-of-art technologies and gain new experience.",
    image: require('../assets/images/ken_pic.png').default
};

const contact = {
    title: "Contact Me:",
    number: "+81-80-5560-9218",
    email_address: "k.promsutipong@gmail.com"
}

const socialMediaLinks = {
    github: "https://github.com/ken-excel",
    linkedin: "https://www.linkedin.com/in/kengkij-promsutipong/",
    gmail: "k.promsutipong@gmail.com",
    facebook: "https://www.facebook.com/kengkij.promsutipong",
    instagram: "https://www.instagram.com/ken.kengkij/"
};

const experience = {
    records:[
        {
            date: "May 2009",
            background: "rgb(33, 150, 243)",
            icon: "school",
            iconcolor: "#fff",
            title: "Suankularb Witthayalai School",
            subtitle: "Gifted and Talented Program",
            content:["Junior High School & High School GPA: 3.97/4.00"]
        },
        {
            date: "October 2015",
            background: "rgb(33, 150, 243)",
            icon: "school",
            iconcolor: "#fff",
            title: "Tohoku University",
            subtitle: "Mechanical Engineering, Robotics Course",
            content:["Bachelor's Degree",
            "Received President's Award from School of Engineering",
            "Published and presented a conference paper at SII2020",
            "GPA: 3.96/4.00"]
        },
        {
            date: "August 2018",
            background: "rgb(233, 30, 99)",
            icon: "work",
            iconcolor: "#fff",
            title: "ROS Engineer @Obodroid",
            subtitle: "Internship (1 month)",
            content:["Mobile robot control and navigation development"]
        },
        {
            date: "October 2019",
            background: "rgb(33, 150, 243)",
            icon: "school",
            iconcolor: "#fff",
            title: "Tohoku University",
            subtitle: "Mechanical Engineering, Robotics Major",
            content:["Master's Degree",
            "IREX2019 Robot Exhibition - Joint Research with OLPASO"]
        },
        {
            date: "August 2020",
            background: "rgb(233, 30, 99)",
            icon: "work",
            iconcolor: "#fff",
            title: "Android App Developer @Teamlab",
            subtitle: "Internship (2 weeks)",
            content:["Android application development using Kotlin and Android Architecture"]
        },
        {
            date: "February 2021",
            background: "rgb(233, 30, 99)",
            icon: "work",
            iconcolor: "#fff",
            title: "Software Development Engineer @Amazon Japan",
            subtitle: "Internship (TBD)",
            content:["TBD"]
        }
    ]
};
  
const showcase = {
    background: "Starting my path as a mechanical engineer majoring in Robotics, my interests started moving toward software side as I find programming really fascinating. Hoping to shift my career towards computer science, I started self-studying programming languages, learning frameworks, and making some projects. I have the experience in various fields including web and mobile, frontend and backend.",
    frameworks: [
        {
            name: "Spring",
            url: require("../assets/images/icons/spring.svg").default
        },
        {
            name: "Hibernate",
            url: require("../assets/images/icons/hibernate.png").default
        },
        {
            name: "Laravel",
            url: require("../assets/images/icons/laravel.png").default
        },
        {
            name: "Reactjs",
            url: require("../assets/images/icons/react.png").default
        },
        {
            name: "Nodejs",
            url: require("../assets/images/icons/nodejs.png").default
        },
        {
            name: "AWS",
            url: require("../assets/images/icons/aws.png").default
        },
        {
            name: "SQL",
            url: require("../assets/images/icons/database.png").default
        },
        {
            name: "Unity",
            url: require("../assets/images/icons/unity.svg").default
        },
        {
            name: "Android",
            url: require("../assets/images/icons/android.svg").default
        },
        {
            name: "ROS",
            url: require("../assets/images/icons/ros.png").default
        },
        {
            name: "Matlab",
            url: require("../assets/images/icons/matlab.png").default
        },
        {
            name: "Solidworks",
            url: require("../assets/images/icons/solidworks.png").default
        },
        {
            name: "Docker",
            url: require("../assets/images/icons/docker.png").default
        }
    ],
    languages:[
        {
            name: "Java",
            url: require("../assets/images/icons/java.png").default
        },
        {
            name: "Kotlin",
            url: require("../assets/images/icons/kotlin.svg").default
        },
        {
            name: "Javascript",
            url: require("../assets/images/icons/javascript.svg").default
        },
        {
            name: "CSS",
            url: require("../assets/images/icons/css.png").default
        },
        {
            name: "HTML",
            url: require("../assets/images/icons/html.svg").default
        },
        {
            name: "php",
            url: require("../assets/images/icons/php.png").default
        },
        {
            name: "Python",
            url: require("../assets/images/icons/python.svg").default
        },
        {
            name: "C++",
            url: require("../assets/images/icons/c++.png").default
        },
        {
            name: "C#",
            url: require("../assets/images/icons/csharp.png").default
        },
        {
            name: "C",
            url: require("../assets/images/icons/c.png").default
        }
    ],
    categories:[
        {
            name: "Robotic Engineer",
            background: "Being a student in Robotics major, I have developed several types of robots and integrated systems: mobile robots, human assistive devices, etc. There are several system integration, I am in charge from conceptual idea, hardware design, software implementation, to deployment. While most of my works are made for the research purpose, I also have the experience of making enterprise robots. I might have worked on both software and hardware, but I am more specialized in software especially ROS framework.",
            projects:[
                {
                    name: "Wi-Fi Navigation for an Electric Wheelchair",
                    image: require("../assets/images/showcases/dummy.png").default,
                    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur volutpat con",
                    paragraphs:["The aim of this research is to contribute to improving the aging situation in Japan in which people need a kind of mobile support. The concept resembles publicly shared bicycles which is being implemented all around the world, but in an electric wheelchair version. Given the electric wheelchair could locate a user in public spaces, it can move to another user once one person finishes using it, thus, provides a cost-efficient solution to this expensive equipment.",
                    "Regarding technical methodology, we record Wi-Fi signals profile (signal strength to each access point deployed in the environment) at each position in the map and fills the database. Then, we retrieve Wi-Fi signals at the user location and match the signals profile with one we have in the database. Finally, the robot autonomously navigates to the estimated user’s position.",
                    "This title is my bachelor’s thesis and also my first paper to be published and presented at an international conference."
                    ],
                    frameworks:[
                        {
                            name: "ROS",
                            url: require("../assets/images/icons/ros.png").default
                        },
                        {
                            name: "Matlab",
                            url: require("../assets/images/icons/matlab.png").default
                        }
                    ],
                    languages:[
                        {
                            name: "Python",
                            url: require("../assets/images/icons/python.svg").default
                        },
                        {
                            name: "C++",
                            url: require("../assets/images/icons/c++.png").default
                        },
                        {
                            name: "C",
                            url: require("../assets/images/icons/c.png").default
                        }
                    ]
                },
                {
                    name: "Docking system and SLAM for a Mobile Robot",
                    image: require("../assets/images/showcases/dummy.png").default,
                    summary: " ",
                    paragraphs:["This project is a joint research with a Robot company OLPASO. My task is to implement the docking system into the company’s robot which is differential drive type and also improve the Simultaneous Localization and Mapping (SLAM) of the robot which utilizes a laser rangefinder and stereo cameras.",
                    "The docking system involves retrieving the dock pose (position and orientation) using computer vision technique and path planning. I utilized an open-source QR code tracker package in a ROS platform and wrote a path planning algorithm based on Bezier’s curve trajectory.",
                    "The docking system is completed and the robot is exhibited at the IREX 2019 exhibition at Tokyo, Japan."
                    ],
                    frameworks:[
                        {
                            name: "ROS",
                            url: require("../assets/images/icons/ros.png").default
                        },
                        {
                            name: "Matlab",
                            url: require("../assets/images/icons/matlab.png").default
                        }
                    ],
                    languages:[
                        {
                            name: "Python",
                            url: require("../assets/images/icons/python.svg").default
                        },
                        {
                            name: "C++",
                            url: require("../assets/images/icons/c++.png").default
                        },
                        {
                            name: "C",
                            url: require("../assets/images/icons/c.png").default
                        }
                    ]
                },
                {
                    name: "TMEX",
                    image: require("../assets/images/showcases/dummy.png").default,
                    summary: " ",
                    paragraphs:["The aim of this research is to contribute to improving the aging situation in Japan in which people need a kind of mobile support. The concept resembles publicly shared bicycles which is being implemented all around the world, but in an electric wheelchair version. Given the electric wheelchair could locate a user in public spaces, it can move to another user once one person finishes using it, thus, provides a cost-efficient solution to this expensive equipment.",
                    "Regarding technical methodology, we record Wi-Fi signals profile (signal strength to each access point deployed in the environment) at each position in the map and fills the database. Then, we retrieve Wi-Fi signals at the user location and match the signals profile with one we have in the database. Finally, the robot autonomously navigates to the estimated user’s position.",
                    "This title is my bachelor’s thesis and also my first paper to be published and presented at an international conference."
                    ],
                    frameworks:[
                        {
                            name: "ROS",
                            url: require("../assets/images/icons/ros.png").default
                        },
                        {
                            name: "Matlab",
                            url: require("../assets/images/icons/matlab.png").default
                        }
                    ],
                    languages:[
                        {
                            name: "Python",
                            url: require("../assets/images/icons/python.svg").default
                        },
                        {
                            name: "C++",
                            url: require("../assets/images/icons/c++.png").default
                        },
                        {
                            name: "C",
                            url: require("../assets/images/icons/c.png").default
                        }
                    ]
                }
            ]
        }
    ]
};

const headertext = {
    upper: "STRIVE TO BE BETTER",
    lower: "BEAT YESTERDAY",
    contact: "Contact"
}

export {introduction, contact, socialMediaLinks, headertext, showcase, experience};